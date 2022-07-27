import supertest from 'supertest';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
const request = supertest("http://localhost:8444");
chai.use(chaiHttp);


describe('GET Ref-Customer: /ref-customer', ()=>{
    it("Send the correct response when the customer is found", async () =>{
        const data = {
            document_letter: 'V',
            document_number: '6833445'
        }
        const responseData = {
                "status": 200,
                "data": [
                    
                ],
                "message": null
        }

        const res = await request.get('/ref-customer')
        .set('token', 'Pr0l3.2022.')
        .send(data);

        expect(res.body).to.have.status(200);
        expect(res.body).to.be.deep.equal(responseData);
    });

    it("Send the correct response when the customer is not found", async () =>{
        const data = {
            document_letter: 'V',
            document_number: '6833445'
        }
        const responseData = {
                "status": 200,
                "data": null,
                "message": [
                    "El cliente buscado no existe"
                ]
        }

        const res = await request.get('/ref-customer')
        .set('token', 'Pr0l3.2022.')
        .send(data);

        expect(res.body).to.have.status(200);
        expect(res.body).to.be.deep.equal(responseData);
    });

    it("Send the correct response when there is missing information", async () =>{
        const data = {
            document_letter: 'V',
            document_number: '6833445'
        }
        const responseData = {
                "status": 400,
                "data": null,
                "message": [
                    "El campo Tipo de Documento, no contiene la información correcta"
                ]
        }

        const res = await request.get('/ref-customer')
        .set('token', 'Pr0l3.2022.')
        .send(data);

        expect(res.body).to.have.status(400);
        expect(res.body).to.be.deep.equal(responseData);
    });


});