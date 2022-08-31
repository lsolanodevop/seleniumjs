import supertest from 'supertest';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
const request = supertest("http://localhost:8444");
const key = 'Pr0l3.2022.';
chai.use(chaiHttp);


describe('POST login: /login', () => {
    it('Send the correct response when a user is able to login', async () => {
        const sendData = {
            "document_type": 0,
            "document_number": "24902315",
            "password": "250L$os..",
            "key_code": 164989441966
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
            .set('token', key)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
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
            "status": 400,
            "data": null,
            "message": "Usuario o contraseña incorrecta"
        }

        await request.post('/login')
            .send(sendData)
            .set('token', key)
            .expect(403)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

    it('Send the correct response when the user does not exists', async () => {
        const sendData = {
            document_type: "0",
            document_number: "24902314",
            password: "123456"
        }

        const expectedResult = {
            "status": 500,
            "data": null,
            "message": "Error Interno del Servidor"
        }

        await request.post('/login')
            .send(sendData)
            .set('token', key)
            .expect(401)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

    it('Send the correct response when the user is not sending all the data', async () => {
        const sendData = {}

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
            .set('token', key)
            .expect(400)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });
});

describe('POST /verify-auth-code', () => {
    it('Send the correct response when the verification was successful', async () => {
        const sendData = {
            "document_type": 0,
            "document_number": "24902315",
            "otp": "123456",
            "key_code": 19789794564
        }

        const expectedResult = {
            "status": 200,
            "data": [],
            "message": "Codigo enviado correcto"
        }

        await request.post('/verify-auth-code')
            .send(sendData)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

    it('Send the correct response when the verification was not successful', async () => {
        const sendData = {
            "document_type": 0,
            "document_number": "24902315",
            "otp": "123456",
            "key_code": 19789794564
        }

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": "Codigo enviado incorrecto"
        }

        await request.post('/verify-auth-code')
            .send(sendData)
            .set('token', key)
            .expect(400)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });

    });

    it('Send the correct response when the verification was unathorized', async () => {
        const sendData = {
            "document_type": 0,
            "document_number": "24902315",
            "otp": "123456",
            "key_code": 19789794564
        }

        const expectedResult = {
            "status": 401,
            "data": null,
            "message": "Codigo enviado incorrecto"
        }

        await request.post('/verify-auth-code')
            .send(sendData)
            .set('token', key)
            .expect(401)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });

    });
});

describe('POST /generate-auth-code', () => {
    it('Send the correct response when the code generation was made', async () => {
        const sendData = {
            "document_type": 0,
            "document_number": "24902315",
            "key_code": 19789794564
        }

        const expectedResult = {
            "status": 200,
            "data": [],
            "message": "Operacion exitosa"
        }

        await request.post('/generate-auth-code')
            .send(sendData)
            .set('token', key)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });

    });

    it('Send the correct response when the code generation was not made', async () => {
        const sendData = {
            "document_type": 0,
            "document_number": "24902315",
            "key_code": 19789794564
        }

        const expectedResult = {
            "status": 500,
            "data": null,
            "message": "Error Interno del Servidor"
        }

        await request.post('/generate-auth-code')
            .send(sendData)
            .expect(500)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });

    });

    it('Send the correct response when the code generation had an error', async () => {
        const sendData = {
            "document_type": 0,
            "document_number": "24902315",
            "key_code": 19789794564
        }

        const expectedResult = {
            "status": 500,
            "data": null,
            "message": "Error interno del servidor"
        }

        await request.post('/generate-auth-code')
            .send(sendData)
            .set('token', key)
            .expect(500)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });


    });
});


describe('POST /generate-new-code', () => {
    it('Send the correct response when the code was generated', async () => {
        const sendData = {
            "document_type": 0,
            "document_number": "24902315",
            "email": "lsolano@prolesys.com",
            "key_code": 19854554554545
        }

        const expectedResult = {
            "status": 200,
            "data": {
                "otp": true
            },
            "message": "Operación exitosa"
        }

        await request.post('/generate-new-code')
            .send(sendData)
            .set('token', key)
            .expect(200)
            .then((res) => {
                expect(res.body).to.deep.include(expectedResult);
            });
    });

    it('Send the correct response when we are not sending the data', async () => {
        const sendData = {}

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": [
                "El campo Tipo de Documento, debe ser requerido",
                "El campo Tipo de Documento, no contiene la información correcta",
                "El campo Número de Documento, debe ser requerido",
                "El campo Número de Documento, no es un texto",
                "El campo Correo Electrónico, debe ser requerido",
                "El campo Correo Electrónico, no es un formato válido",
                "El campo Contador, debe ser requerido",
                "El campo Contador, no es un número entero"
            ]
        }

        await request.post('/generate-new-code')
            .send(sendData)
            .set('token', key)
            .expect(400)
            .then((res) => {
                expect(res.body).to.deep.include(expectedResult);
            });
    });
});


describe('POST /verify-new-code', () => {
    it('Send the correct response when the verification was a success', async () => {
        const sendData = {
            "document_type": 0,
            "document_number": "24902315",
            "otp": "456853",
            "key_code": 19789794564
        }

        const expectedResult = {
            "status": 200,
            "data": {
                "otp": true
            },
            "message": "Operación exitosa"
        }

        await request.post('/verify-new-code')
            .send(sendData)
            .set('token', key)
            .expect(200)
            .then((res) => {
                expect(res.body).to.deep.include(expectedResult);
            });

    });

    it('Send the correct response when the verification failed', async () => {
        const sendData = {
            "document_type": 0,
            "document_number": "24902315",
            "otp": "456853",
            "key_code": 19789794564
        }

        const expectedResult = {
            "status": 401,
            "data": null,
            "message": "Codigo enviado incorrecto"
        }

        await request.post('/verify-new-code')
            .send(sendData)
            .set('token', key)
            .expect(401)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });

    });

    it('Send the correct response when we are not sending the data', async () => {
        const sendData = {}

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": [
                "El campo Tipo de Documento, debe ser requerido",
                "El campo Tipo de Documento, no contiene la información correcta",
                "El campo Número de Documento, debe ser requerido",
                "El campo Número de Documento, no es un texto",
                "El campo Código de verificación, debe ser requerido",
                "El campo Código de verificación, no es un texto",
                "El campo Contador, debe ser requerido",
                "El campo Contador, no es un número entero"
            ]
        }

        await request.post('/verify-new-code')
            .send(sendData)
            .set('token', key)
            .expect(400)
            .then((res) => {
                expect(res.body).to.deep.include(expectedResult);
            });

    });

    it('Send the correct response when we are not authorized', async () => {
        const sendData = {
            "document_type": 0,
            "document_number": "24902315",
            "otp": "456853",
            "key_code": 19789794564
        }

        const expectedResult = {
            "status": 401,
            "data": null,
            "message": "Codigo enviado incorrecto"
        }

        await request.post('/verify-new-code')
            .send(sendData)
            .set('token', key)
            .expect(401)
            .then((res) => {
                expect(res.body).to.deep.include(expectedResult);
            });

    });
});


