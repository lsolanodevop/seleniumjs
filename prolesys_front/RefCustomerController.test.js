import supertest from 'supertest';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
const request = supertest("http://localhost:8444");
chai.use(chaiHttp);


describe('GET Ref-Customer: /ref-customer', ()=>{
    it("Send the correct response when the customer is found", async () =>{
        const sendData = {
            document_type: '0',
            document_number: '6833445'
        }
        const expectedResult = {
                "data": {
                    "id": "487977",
                    "document_type": 0,
                    "document_number": "6833445",
                    "names": "HERNAN",
                    "last_name": "VEGA",
                    "business_name": null,
                    "phone_1": "4146383027",
                    "phone_2": "0",
                    "address": "CALLE 150 CASA  54A-12  54A-12 FDO.FARMACIA SUR AMERICA.",
                    "status": true,
                    "created_at": "2022-07-22T02:47:48.318Z",
                    "updated_at": null,
                    "deleted_at": null
                    }
        }

        await request.get('/ref-customer')
        .query(sendData)
        .expect(200)
        .then((res) =>{
            expect(Object.keys(res.body.data)).to.include.deep.members(Object.keys(expectedResult.data));
        });
    });

    it("Send the correct response when the customer is not found", async () =>{
        const sendData = {
            document_type: '0',
            document_number: '24902315'
        }

        const expectedResult = {
            "status": 200,
            "data": null,
            "message": "No hay registros asociados"
        }

        await request.get('/ref-customer')
        .query(sendData)
        .expect(200)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult);
        });
    });

    it("Send the correct response when there is no data being sent", async () =>{
        const sendData = {
        }

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": [
                "El campo Tipo de Documento, debe ser requerido",
                "El campo Tipo de Documento, no contiene la información correcta",
                "El campo Número de Documento, debe ser requerido"
            ]

        }

        await request.get('/ref-customer')
        .query(sendData)
        .expect(400)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult);
        });
    });


});