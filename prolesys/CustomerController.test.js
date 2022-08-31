import supertest from 'supertest';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
const request = supertest("http://localhost:8444");
const key = 'Pr0l3.2022.';
chai.use(chaiHttp);

describe('GET customer: /customer', () => {
    it('Send the correct response when the customer is found', async () => {
        const sendData = {
            document_number: '119900',
            document_type: '0'
        }
        const expectedResult = {
            "id": 0,
            "document_type": "string",
            "document_number": "string",
            "names": "string",
            "last_name": "string",
            "business_name": "string",
            "email": "string",
            "phone_1": "string",
            "phone_2": "string",
            "address": "string",
            "status": true,
            "created_at": "Unknown Type: Date",
            "updated_at": "Unknown Type: Date",
            "deleted_at": "Unknown Type: Date"
        }


        await request.get('/customer')
            .query(sendData)
            .set('token', key)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
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
            .set('token', key)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
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
            .set('token', key)
            .expect(400)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

});

describe('GET customer: /customer/{id}', () => {
    it('Send the correct response when the customer is found', async () => {
        const customerID = 1;

        const expectedResult = {
            "id": 0,
            "document_type": "string",
            "document_number": "string",
            "names": "string",
            "last_name": "string",
            "business_name": "string",
            "email": "string",
            "phone_1": "string",
            "phone_2": "string",
            "address": "string",
            "status": true,
            "created_at": "Unknown Type: Date",
            "updated_at": "Unknown Type: Date",
            "deleted_at": "Unknown Type: Date"
        }

        await request.get(`/customer/${customerID}`)
            .set('token', key)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

    it('Send the correct response when the customer is not found', async () => {
        const customerID = 1000;

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": "No hay registros asociados"
        }

        await request.get(`/customer/${customerID}`)
            .set('token', key)
            .expect(400)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

    it('Send the correct response when we are not authorized', async () => {
        const customerID = 1000;

        const expectedResult = {
            "status": 403,
            "data": null,
            "message": "Sesión expirada"
        }

        await request.get(`/customer/${customerID}`)
            .set('token', key)
            .expect(403)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

    it('Send the correct response when we are not sending data', async () => {

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": ["El campo Tipo de Documento, debe ser requerido", "El campo Tipo de Documento, no contiene la información correcta", "El campo Número de Documento, debe ser requerido", "El campo Número de Documento, no es un texto"]
        }

        await request.get(`/customer/`)
            .set('token', key)
            .expect(400)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

});

describe('PATCH customer: /customer/:id', () => {
    it.only('Send the correct response when the customer is updated', async () => {
        const customerID = "1";

        const sendData = {
            email: "evan.solano@gmail.com",
            phone_1: "4242279907",
            phone_2: "4242279907"
        }

        const expectedResult = {
            "email": "string",
            "phone_1": "string",
            "phone_2": "string"
        }
        await request.patch(`/customer/${customerID}`)
            .send(sendData)
            .set('token', key)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));;
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
            .set('token', key)
            .expect(400)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));;
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
            .set('token', key)
            .expect(400)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));;
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
            .set('token', key)
            .expect(400)
            .then((res) => {
                expect(res.body).to.deep.include(expectedResult);
            });
    });
});

describe('GET customer/ref/contracts', () => {

    it('Send the correct response when the data is found', async () => {
        const sendData = {}

        const expectedResult = {
            "status": 200,
            "data": [
            ],
            "message": "Operacion Exitosa"
        }

        await request.get('/customer/ref/contracts')
            .query(sendData)
            .set('token', key)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });
});

it('Send the correct response when we are not authorized', async () => {

    const sendData = {}

    const expectedResult = {
        "status": 403,
        "data": null,
        "message": "Sesión expirada"
    }

    await request.get('/customer/ref/contracts')
        .query(sendData)
        .set('token', key)
        .expect(403)
        .then((res) => {
            expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
        });
});
