import supertest from 'supertest';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
const request = supertest("http://localhost:8444");
chai.use(chaiHttp);

describe('GET User: /user', () =>{ //Search

    it('Returning the correct user when searching and finding the user', async() => {
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
        .then((res) =>{
            expect(Object.keys(res.body.data)).to.include.deep.members(Object.keys(expectedResult.data));
        });
    });

    it('Returning the correct response when searching and not finding the user', async() => {
        const sendData = {}
        const expectedResult = {
            "status": 200,
            "data": null,
            "message": "No Existen Registros"
    };
        
        await request.get('/user')
        .query(sendData)
        .expect(200)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult)
        });;
    });
});

describe('PATCH User: /user', () =>{ //Update NO ESTAN FUNCIONANDO
    it('Send the correct response when updating an user', async() => {
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
        

        await request.patch('/user')
        .send(sendData)
        .expect(200)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult)
        });
    });

    it('Send the correct response when it was not possible to update an user', async() => {
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
        

        await request.patch('/user')
        .send(sendData)
        .expect(200)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult)
        });
    });

    it('Send the correct response when we are not sending data', async() => {
        const sendData = {

        }

        const expectedResult = {
            "status": 400,
            "data": null,
            "message": "El campo Cedula es requerido"
    };
        

        await request.patch('/user')
        .send(sendData)
        .expect(400)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult)
        });
    });

});


describe('POST User: /user/:id/change-password', () =>{ //Change Password
    it('Send the correct response when the password was change', async () =>{
        const userID = "2";

        const sendData = {
                "oldPassword": "123456",
                "newPassword": "654321"
        }

        const expectedResult = {
            "status": 200,
            "data": null,
            "message": "Operacion Exitosa"
        };

        await request.post(`/user/${userID}/change-password`)
        .send(sendData)
        .expect(200)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult);
        });
    });

    it('Send the correct response when the password were missing', async () =>{
        const userID = "2";
        const sendData = {
            "oldPassword": "123456",
            "newPassword": "654321"
        }

        const expectedResult = {
                "status": 400,
                "data": null,
                "message": [
                  "El campo Vieja contarseña, debe ser requerido",
                  "El campo Nueva contraseña, debe ser requerido"
                ]
        }

        await request.post(`/user/${userID}/change-password`)
        .send(sendData)
        .expect(400)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult);
        });
    });
    

});


describe('POST User: /user/create', () =>{ //Create User
    it('Send the correct response when the user create was succesfull', async () =>{
            // FALLO GRAVE SE HACE LA INSERCION SIN VALIDAR LA DATA PREVIO
        const sendData = {
            document_type: 0,
            document_number: "17481412",
            names: "Eileen Carolina",
            last_name: "Caicedo Carvajal",
            business_name: "EiCakes",
            email: "eileen3caa@gmail.com",
            phone_1: "099999595",
            phone_2: "091999591",
            address: "Casa",
            password: "123456"
        }

        const expectedResult = {
                "status": 200,
                "data": {
                  "status": true,
                  "id": "3",
                  "document_type": "V",
                  "document_number": "17481413",
                  "names": "Eileen Carolina",
                  "last_name": "Caicedo Carvajal",
                  "business_name": "EiCakes",
                  "email": "eileen3ca@gmail.com",
                  "phone_1": "099999595",
                  "phone_2": "091999591",
                  "address": "Casa",
                  "updated_at": "2022-07-29T08:29:22.502Z",
                  "created_at": "2022-07-29T08:29:22.502Z",
                  "deleted_at": null
                },
                "message": "Operación exitosa"
        }

        await request.post('/user')
        .send(sendData)
        .expect(200)
        .then((res) =>{
            expect(Object.keys(res.body)).to.include.deep.members(Object.keys(expectedResult));
        });
    });

    it('Send the correct response when the user create was not succesfull', async () =>{
        const sendData = {
            document_type: 0,
            document_number: "17481412",
            names: "Eileen Carolina",
            last_name: "Caicedo Carvajal",
            business_name: "EiCakes",
            email: "eileen3caa@gmail.com",
            phone_1: "099999595",
            phone_2: "091999591",
            address: "Casa",
            password: "123456"
        }

        const expectedResult = {
                "status": 200,
                "data": null,
                "message": [
                  "El Numero de Cedula ya esta siendo utilizado",
                  "El Correo electronico ya esta siendo utilizado"
                ]
        }

        await request.post('/user')
        .send(sendData)
        .expect(200)
        .then((res) =>{
           expect(res.body).to.deep.include(expectedResult);
        });

    });

    it('Send the correct response when the user create was missing data', async () =>{
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
                  "El campo Direccion, debe ser requerido",
                  "El campo Contraseña, debe ser requerido"
                ]
        }


        await request.post('/user')
        .send(sendData)
        .expect(400)
        .then((res) =>{
            expect(res.body).to.deep.include(expectedResult);
        });
    });

});

