import supertest from 'supertest';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
const request = supertest("http://localhost:8444");
const key = 'Pr0l3.2022.';
chai.use(chaiHttp);


describe('GET Ref-Customer: /ref-customer', () => {
    it("Send the correct response when the customer is found", async () => {
        const sendData = {
            document_type: '0',
            document_number: '6833445'
        }
        const expectedResult = {
            "status": 200,
            "data": [],
            "message": "Operacion exitosa"
        }

        await request.get('/ref-customer')
            .query(sendData)
            .set('token', key)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

    it("Send the correct response when the customer is not found", async () => {
        const sendData = {
            document_type: '0',
            document_number: '24902315'
        }

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": "No hay registros asociados"
        }

        await request.get('/ref-customer')
            .query(sendData)
            .set('token', key)
            .expect(400)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

    it("Send the correct response when there is no data being sent", async () => {
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
            .set('token', key)
            .expect(400)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });


});

describe('GET Ref-Customer: /ref-customer-info', () => {
    it('Send the correct response when the information is found', async () => {
        const sendData = {
            "document_type": 0,
            "device_code": 123,
            "contract_code": 654
        }

        const expectedResult = {
            "document_type": 0,
            "document_number": "24902315"
        }

        await request.get('/ref-customer-info')
            .query(sendData)
            .set('token', key)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });

    });

    it('Send the correct response when the information is not found', async () => {
        const sendData = {
            "document_type": 0,
            "device_code": 123,
            "contract_code": 654
        }

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": "No hay registros asociados"
        }

        await request.get('/ref-customer-info')
            .query(sendData)
            .set('token', key)
            .expect(500)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });

    });

    it('Send the correct response when we are not sending the data', async () => {
        const sendData = {}

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": "Error Interno del Servidor"
        }

        await request.get('/ref-customer-info')
            .query(sendData)
            .set('token', key)
            .expect(400)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

});