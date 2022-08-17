
import supertest from 'supertest';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
const request = supertest("http://localhost:8444");
chai.use(chaiHttp);

describe('POST User: /user/create', () => { //Create User
    it('Send the correct response when the user create was succesfull', async () => {
        // FALLO GRAVE SE HACE LA INSERCION SIN VALIDAR LA DATA PREVIO
        const sendData = {
            "document_type": 0,
            "document_number": "24902310",
            "names": "Leonardo Raul",
            "last_name": "Solano",
            "business_name": "LeoCorp",
            "email": "lsolano@prolesys.com",
            "phone_1": "099433302",
            "phone_2": "099433302",
            "address": "Rio Negro 1242",
            "password": "250L$os..",
            "key_code": 0,
            "otp": "string",
            "file": "string",
            "contracts": [
                {
                    "contract_code": "100",
                    "commercial_contact_code": "100",
                    "device_code": "100",
                    "tech_at_code": "100",
                    "type_contract": "1",
                    "material_number": "100",
                    "address": "100",
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
            "status": 200,
            "data": {
                "document_type": 0,
                "document_number": "string",
                "names": "string",
                "last_name": "string",
                "business_name": "string",
                "email": "string",
                "phone_1": "string",
                "phone_2": "string",
                "address": "string",
                "password": "string",
                "key_code": 0,
                "otp": "string",
                "file": "string",
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
            },
            "message": "Operación exitosa"
        }

        await request.post('/user')
            .send(sendData)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

    it('Send the correct response when the user create was not succesfull', async () => {
        const sendData = {
            "document_type": 0,
            "document_number": "24902310",
            "names": "Leonardo Raul",
            "last_name": "Solano",
            "business_name": "LeoCorp",
            "email": "lsolano@prolesys.com",
            "phone_1": "099433302",
            "phone_2": "099433302",
            "address": "Rio Negro 1242",
            "password": "250L$os..",
            "key_code": 0,
            "otp": "string",
            "file": "string",
            "contracts": [
                {
                    "contract_code": "100",
                    "commercial_contact_code": "100",
                    "device_code": "100",
                    "tech_at_code": "100",
                    "type_contract": "1",
                    "material_number": "100",
                    "address": "100",
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
            "status": 400,
            "data": null,
            "message": [
                "No fue posible crear el registro"
            ]
        }

        await request.post('/user')
            .send(sendData)
            .expect(400)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });

    });

    it('Send the correct response when the user create was missing data', async () => {
        const sendData = {
            document_type: 0,
            document_number: "17481412"
        }

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": [
                "El campo Correo electronico, debe ser requerido",
                "El campo Correo electronico, no es un formato válido",
                "El campo Telefono, debe ser requerido",
                "El campo Telefono, no es un texto",
                "El campo Direccion, debe ser requerido",
                "El campo Direccion, no es un texto",
                "El campo Contraseña, debe ser requerido",
                "El campo Contraseña, no es segura",
                "El campo Código de verificación, debe ser requerido",
                "El campo Código de verificación, no es un texto",
                "El campo Contador, debe ser requerido",
                "El campo Contador, no es un número entero",
                "El campo Documentos, debe ser requerido",
                "El campo Contratos, debe ser requerido"
            ]
        }


        await request.post('/user')
            .send(sendData)
            .expect(400)
            .then((res) => {
                expect(res.body).to.deep.include(expectedResult);
            });
    });

    it('Send the correct response when the code is not correct', async () => {
        const sendData = {
            "document_type": 0,
            "document_number": "24902310",
            "names": "Leonardo Raul",
            "last_name": "Solano",
            "business_name": "LeoCorp",
            "email": "lsolano@prolesys.com",
            "phone_1": "099433302",
            "phone_2": "099433302",
            "address": "Rio Negro 1242",
            "password": "250L$os..",
            "key_code": 0,
            "otp": "string",
            "file": "string",
            "contracts": [
                {
                    "contract_code": "100",
                    "commercial_contact_code": "100",
                    "device_code": "100",
                    "tech_at_code": "100",
                    "type_contract": "1",
                    "material_number": "100",
                    "address": "100",
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
            "status": 401,
            "data": null,
            "message": "Codigo enviado incorrecto"
        }


        await request.post('/user')
            .send(sendData)
            .expect(401)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

});

describe('GET User: /user', () => { //Search

    it('Returning the correct user when searching and finding the user', async () => {
        const sendData = {}

        const expectedResult = {
            "status": 200,
            "data": [
                {
                    "id": "1",
                    "customer_id": "2",
                    "password": "$2b$10$b8f1tHm6vZIp3tyGvjotfOz06FApfXI7Ry5IZD8fPBqUOQhBJS02C",
                    "otp": null,
                    "status": true,
                    "created_at": "2022-07-29T07:21:39.268Z",
                    "updated_at": "2022-07-29T07:21:39.268Z",
                    "deleted_at": null
                }
            ],
            "message": "Operación exitosa"
        };

        await request.get('/user')
            .query(sendData)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });
    });

    it('Returning the correct response when searching and not finding the user', async () => {
        const sendData = {}
        const expectedResult = {
            "status": 200,
            "data": "null",
            "message": "No Existen Registros"
        };

        await request.get('/user')
            .query(sendData)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });;
    });
});

describe(`PATCH User: /user/{id}`, () => { //Update NO ESTAN FUNCIONANDO
    it('Send the correct response when updating an user', async () => {
        const id = "1";
        const sendData = {
            "document_type": 0,
            "document_number": "24902315",
            "names": "Leonardo Evan",
            "last_name": "Solano Chavez",
            "business_name": "SolanoCorps",
            "email": "evan.solano@gmail.com",
            "phone_1": "097233330",
            "phone_2": "097233330",
            "address": "House",
            "password": "123456"
        }

        const expectedResult = {
            "status": 200,
            "data": null,
            "message": "Operacion Exitosa"
        };


        await request.patch(`/user/${id}`)
            .send(sendData)
            .expect(200)
            .then((res) => {
                expect(res.body).to.deep.include(expectedResult)
            });
    });

    it('Send the correct response when it was not possible to update an user', async () => {
        const id = "1";
        const sendData = {
            "document_type": 0,
            "document_number": "24902315",
            "names": "Leonardo Evan",
            "last_name": "Solano Chavez",
            "business_name": "SolanoCorps",
            "email": "evan.solano@gmail.com",
            "phone_1": "097233330",
            "phone_2": "097233330",
            "address": "House",
            "password": "123456"
        }

        const expectedResult = {
            "status": 200,
            "data": null,
            "message": "No Fue posible actualizar el usuario"
        };


        await request.patch(`/user/${id}`)
            .send(sendData)
            .expect(200)
            .then((res) => {
                expect(res.body).to.deep.include(expectedResult)
            });
    });

    it('Send the correct response when we are not sending data', async () => {
        const id = "1";
        const sendData = {

        }

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": "El campo Cedula es requerido"
        };


        await request.patch(`/user/${id}`)
            .send(sendData)
            .expect(400)
            .then((res) => {
                expect(res.body).to.deep.include(expectedResult)
            });
    });

});


describe('POST User: /user/{id}/change-password', () => { //Change Password
    it('Send the correct response when the password was change', async () => {
        const id = "2";

        const sendData = {
            "oldPassword": "250L$os..",
            "newPassword": "251L$os.."
        }

        const expectedResult = {
            "status": 200,
            "data": null,
            "message": "Operacion Exitosa"
        };

        await request.post(`/user/${id}/change-password`)
            .send(sendData)
            .expect(200)
            .then((res) => {
                expect(res.body).to.deep.include(expectedResult);
            });
    });

    it('Send the correct response when the register is missing', async () => {
        const id = "2";
        const sendData = {
            "oldPassword": "250L$os..",
            "newPassword": "251L$os.."
        }

        const expectedResult = {
            "status": 404,
            "data": null,
            "message": "Registro no encontrado"
        }

        await request.post(`/user/${id}/change-password`)
            .send(sendData)
            .expect(404)
            .then((res) => {
                expect(res.body).to.deep.include(expectedResult);
            });
    });

    it('Send the correct response when the password is not secure enough', async () => {
        const id = "2";
        const sendData = {
            "oldPassword": "123456",
            "newPassword": "654321"
        }

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": [
                "El campo Nueva contraseña, no es segura"
            ]
        }

        await request.post(`/user/${id}/change-password`)
            .send(sendData)
            .expect(400)
            .then((res) => {
                expect(res.body).to.deep.include(expectedResult);
            });
    });

});

describe('POST /generate-code', () => {
    it('Send the correct response when the code was generated correctly', async () => {

        const sendData = {
            "key_code": 164989441966
        }

        const expectedResult = {
            "status": 200,
            "data": "Codigo: 123456",
            "message": []
        }

        await request.post('/generate-code')
            .send(sendData)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });

    });

    it('Send the correct response when the code was not generated', async () => {

        const sendData = {
            "key_code": 164989441966
        }

        const expectedResult = {
            "status": 500,
            "data": null,
            "message": "Error Interno del Servidor"
        }

        await request.post('/generate-code')
            .send(sendData)
            .expect(500)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });

    });


});

describe('POST /verify-code', () => {

    it('Send the correct response when the code was verified correctly', async () => {

        const sendData = {
            "key_code": 164989441966,
            "otp": "123456"
        }

        const expectedResult = {
            "status": 200,
            "data": "Codigo: 123456",
            "message": []
        }

        await request.post('/verify-code')
            .send(sendData)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });

    });

    it('Send the correct response when the code was not verified', async () => {

        const sendData = {
            "key_code": 164989441966,
            "otp": "123456"
        }

        const expectedResult = {
            "status": 500,
            "data": null,
            "message": "Error Interno del Servidor"
        }

        await request.post('/verify-code')
            .send(sendData)
            .expect(500)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });

    });

});

describe('POST /user/password', () => {
    it("Send the correct response when the password was reseted", async () => {

        const sendData = {
            "newPassword": "250L$os.."
        }

        const expectedResult = {
            "status": 200,
            "data": null,
            "message": "Contrasena cambiada"
        }

        await request.post('/verify-code')
            .send(sendData)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });


    });

    it("Send the correct response when the password was not reseted", async () => {

        const sendData = {
            "newPassword": "250L$os.."
        }

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": "Error Interno del Servidor"
        }

        await request.post('/verify-code')
            .send(sendData)
            .expect(400)
            .then((res) => {
                expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
            });


    });
});



