import supertest from 'supertest';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
const request = supertest("http://localhost:8444");
chai.use(chaiHttp);

describe('GET customer: /customer', ()=>{
    it('Send the correct response when the customer is found', async () => {
        const sendData = {
            document_number: '24902315',
            document_type: '0'
        }
        const expectedResult = {
                "data": [
                    {
                    "id": "1",
                    "document_type": "V",
                    "document_number": "24902315",
                    "names": "Leonardo Raul",
                    "last_name": "Solano",
                    "business_name": "SolanoCorp",
                    "email": "evan.solano@gmail.com",
                    "phone_1": "4242279907",
                    "phone_2": "4242279907",
                    "address": "Casa",
                    "status": true,
                    "created_at": "2022-07-28T03:42:19.806Z",
                    "updated_at": "2022-07-29T06:08:08.883Z",
                    "deleted_at": null
                    }
                ]
        }


        await request.get('/customer')
        .query(sendData)
        .expect(200)
        .then((res) =>{
            expect(Object.keys(res.body.data[0])).to.include.deep.members(Object.keys(expectedResult.data[0]));
        });
    });

    it('Send the correct response when the customer is not found', async () => {
        const sendData = {
            document_number: '24902314',
            document_type: '0'
        }
    
        const expectedResult = {
                "status": 200,
                "data": [],
                "message": "No hay registros asociados"
        }


        await request.get('/customer')
        .query(sendData)
        .expect(200)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult);
        });

        //Deberia de mostrar que no hay registros asociados pero esta devolviendo operacion existosa
        //
    });

    it('Send the correct response when we are not sending data', async () => {
        const sendData = {}
    
        const expectedResult = 
            {
                "status": 400,
                "data": null,
                "message": [
                    "El campo Tipo de Documento, debe ser requerido",
                    "El campo Tipo de Documento, no contiene la información correcta",
                    "El campo Número de Documento, debe ser requerido"
                ]
            }
        


        await request.get('/customer')
        .query(sendData)
        .expect(400)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult);
        });
    });
    
});

describe('PATCH customer: /customer/:id', ()=>{
    it('Send the correct response when the customer is updated', async () => {
        const customerID = "1";

        const sendData = {
            email: "evan.solano@gmail.com",
            phone_1: "4242279907",
            phone_2: "4242279907"
        }

        const expectedResult = {
                "status": 200,
                "data": [
                  1
                ],
                "message": "Operación exitosa" 
        }
        await request.patch(`/customer/${customerID}`)
        .send(sendData)
        .expect(200)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult);
        });
    });

    it('Send the correct response when the customer is not found', async () => {
        const customerID = "1";

        const sendData = {
        }

        const expectedResult = {
            "status": 400,
            "data": [
                0
            ],
            "message": "No hay registros asociados"
    }

        await request.patch(`/customer/${customerID}`)
        .send(sendData)
        .expect(400)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult);
        });
    });

    it('Send the correct response when we are not sending data', async () => {
        const customerID = "2";

        const sendData = {
        }

        const expectedResult = {
                "status": 400,
                "data": null,
                "message": [
                    "El campo Email, debe ser requerido",
                    "El campo Numero de Celular, debe ser requerido",
                    "El campo Número de Telefono, debe ser requerido"
                ]
    }

        await request.patch(`/customer/${customerID}`)
        .send(sendData)
        .expect(400)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult);
        });
    });

    it('Send the correct response when we do not have the user id', async () => {
        const customerID = "";

        const sendData = {
            email: "evan.solano@gmail.com",
            phone_1: "4242279907",
            phone_2: "4242279907"    
        }

        const expectedResult = {
                "status": 400,
                "data": null,
                "message": [
                    "El ID del cliente es requerido"
                ]
    }

        await request.patch(`/customer/${customerID}`)
        .send(sendData)
        .expect(400)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult);
        });
    });
});