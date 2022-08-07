import supertest from 'supertest';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
const request = supertest("http://localhost:8444");
chai.use(chaiHttp);


describe('POST login: /login', () =>{
    it('Send the correct response when a user is able to login', async () => {
        const sendData = {
            document_type: 0,
            document_number: "24902315",
            password: "123456"
        }

        const expectedResult = {
                "status": 200,
                "data": {
                  "otp": true
                },
                "message": "Operación exitosa"
        }

        await request.post('/login')
        .send(sendData)
        .expect(200)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult);
            // Si ejecuto la prueba varias veces seguidas se cae el API
        });
    });

    it('Send the correct response when a user in unathorized to login', async () => {
        const sendData = {
            document_type: "0",
            document_number: "24902314",
            password: "123456"
        }

        const expectedResult = {
                "status": 401,
                "data": null,
                "message": "Usuario o contraseña incorrecta"
        }

        await request.post('/login')
        .send(sendData)
        .expect(401)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult);
        });
    });

    it('Send the correct response when the user is not sending all the data', async () => {
        const sendData =  {}

        const expectedResult = {
                "status": 400,
                "data": null,
                "message": [
                  "El campo Tipo de Documento, debe ser requerido",
                  "El campo Tipo de Documento, no contiene la información correcta",
                  "El campo Número de Documento, debe ser requerido",
                  "El campo Contraseña, debe ser requerido"
                ]
        }

        await request.post('/login')
        .send(sendData)
        .expect(400)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult)
        });
    });
});