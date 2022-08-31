import supertest from 'supertest';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
const request = supertest("http://localhost:8444");
const key = 'Pr0l3.2022.';
chai.use(chaiHttp);

describe('GET /contracts-ref', () => {
    it('Send the correct corresponse when the contract are found', async () => {
        //It is not working
        const sendData = {}

        const expectedResult = {
            "contracts": [
                {
                    "contract_code": "string",
                    "commercial_contact_code": "string",
                    "device_code": "string",
                    "tech_at_code": "string",
                    "material_number": "string",
                    "address": "string",
                    "ref_customer_id": "string",
                    "fare_id": "string",
                    "parish_id": "string",
                    "status": true,
                    "files": [
                        "string"
                    ]
                }
            ]
        }

        await request.get('/contracts-ref')
            .send(sendData)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

    it('Send the correct corresponse when the contract is not found', async () => {
        const sendData = {}


        const expectedResult = {
            "status": 400,
            "data": null,
            "message": [
                "No hay registros asociados"
            ]
        }


        await request.get('/contracts-ref')
            .send(sendData)
            .expect(400)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });
});


describe('GET /contracts-ref-info', () => {
    it('Send the correct response when the contract-ref is found', async () => {
        const sendData = {
            contract_code: 1,
            device_code: 1
        }

        const expectedResult = {
            "contracts": [
                {
                    "contract_code": "string",
                    "commercial_contact_code": "string",
                    "device_code": "string",
                    "tech_at_code": "string",
                    "material_number": "string",
                    "address": "string",
                    "ref_customer_id": "string",
                    "fare_id": "string",
                    "parish_id": "string",
                    "status": true,
                    "files": [
                        "string"
                    ]
                }
            ]
        }

        await request.get('/contracts-ref-info')
            .send(sendData)
            .set('token', key)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

    it('Send the correct response when the contract-ref is not found', async () => {
        const sendData = {
            contract_code: 1,
            device_code: 1
        }

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": "No Existen registros asociados"
        }

        await request.get('/contracts-ref-info')
            .send(sendData)
            .set('token', key)
            .expect(400)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });

    });

    it('Send the correct response when we are not sending the data', async () => {
        const sendData = {}

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": ""
        }

        await request.get('/contracts-ref-info')
            .send(sendData)
            .set('token', key)
            .expect(400)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

    it('Sent the correct response when we are not authorized', async () => {

        const sendData = {
            contract_code: 1,
            device_code: 1
        }

        const expectedResult = {
            "status": 403,
            "data": null,
            "message": "Sesión expirada"
        }

        await request.get('/contracts-ref-info')
            .send(sendData)
            .set('token', key)
            .expect(403)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });
});


describe('POST /contracts', () => {
    it('Send the correct corresponse when the contract is created ', async () => {
        const sendData = {
            "contracts": [
                {
                    "contract_code": "123456",
                    "commercial_contact_code": "654321",
                    "device_code": "123",
                    "tech_at_code": "456",
                    "material_number": "1234",
                    "address": "Mi casa",
                    "ref_customer_id": "1",
                    "fare_id": "1",
                    "parish_id": "1",
                    "status": true,
                    "files": [
                        "string"
                    ]
                }
            ]
        }

        const expectedResult = {
            "contracts": [
                {
                    "contract_code": "string",
                    "commercial_contact_code": "string",
                    "device_code": "string",
                    "tech_at_code": "string",
                    "material_number": "string",
                    "address": "string",
                    "ref_customer_id": "string",
                    "fare_id": "string",
                    "parish_id": "string",
                    "status": true,
                    "files": [
                        "string"
                    ]
                }
            ]
        }

        await request.post('/post_contracts')
            .send(sendData)
            .set('token', key)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

    it('Send the correct corresponse when the contract is not created', async () => {
        const sendData = {
            "contracts": [
                {
                    "contract_code": "123456",
                    "commercial_contact_code": "654321",
                    "device_code": "123",
                    "tech_at_code": "456",
                    "material_number": "1234",
                    "address": "Mi casa",
                    "ref_customer_id": "1",
                    "fare_id": "1",
                    "parish_id": "1",
                    "status": true,
                    "files": [
                        "string"
                    ]
                }
            ]
        }

        const expectedResult = {
            "status": 403,
            "data": null,
            "message": "Sesión expirada"
        }

        await request.post('/post_contracts')
            .send(sendData)
            .set('token', key)
            .expect(403)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

    it('Send the correct corresponse when we are not sending the data', async () => {
        const sendData = {
            "contracts": [
                {
                }
            ]
        }

        const expectedResult = {
            "status": 403,
            "data": null,
            "message": "Los siguientes campos son requeridos"
        }

        await request.post('/post_contracts')
            .send(sendData)
            .set('token', key)
            .expect(403)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });
});

describe('GET /contracts', () => {
    it('Send the correct corresponse when the contract is found', async () => {
        const sendData = {
        }

        const expectedResult = {
            "contracts": [
                {
                    "contract_code": "string",
                    "commercial_contact_code": "string",
                    "device_code": "string",
                    "tech_at_code": "string",
                    "material_number": "string",
                    "address": "string",
                    "ref_customer_id": "string",
                    "fare_id": "string",
                    "parish_id": "string",
                    "status": true,
                    "files": [
                        "string"
                    ]
                }
            ]
        }

        await request.get('/contracts')
            .send(sendData)
            .set('token', key)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });

    });

    it('Send the correct corresponse when the contract is not found', async () => {

        const sendData = {
        }

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": "El Registro no fue encontrado"
        }

        await request.get('/contracts')
            .send(sendData)
            .set('token', key)
            .expect(400)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

    it('Send the correct corresponse when we are not authorized', async () => {

        const sendData = {
        }

        const expectedResult = {
            "status": 403,
            "data": null,
            "message": "Sesión expirada"
        }

        await request.get('/contracts')
            .send(sendData)
            .set('token', key)
            .expect(403)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });
});