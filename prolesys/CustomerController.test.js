import supertest from 'supertest';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
const request = supertest("http://localhost:8444");
chai.use(chaiHttp);

describe('GET customer: /customer', ()=>{
    it('Send the correct response when the customer is found', async () => {
        const responseData = {
            customer_document: '24902315',
            document_type: 'V',
            nombre: 'Leonardo',
            apellido: 'Solano',
            costumer_type: 'Usuario'
        }
    
        const res = await request.get('/customer')
        .set('token', 'Pr0l3.2022.')
        .send(responseData)

        expect(res.body).to.have.status(200);
        expect(res.body).to.not.be.null;
    });

    it('Send the correct response when the customer is not found', async () => {
        const responseData = {
            customer_document: '24902315',
            document_type: 'V',
            nombre: 'Leonardo',
            apellido: 'Solano',
            customer_type: 'Usuario'
        }

        const res = await request.get('/customer')
        .set('token', 'Pr0l3.2022.')
        .send(responseData)

        expect(res.body).to.have.status(200);
        expect(res.body).to.not.be.null;
    });

    it('Send the correct response when the request is not authorized', async () => {
        const responseData = {
            customer_document: '24902315',
            document_type: 'V',
            nombre: 'Leonardo',
            apellido: 'Solano',
            customer_type: 'Usuario'
        }

        const res = await request.get('/customer')
        .set('token', 'Pr0l3.2022.')
        .send(responseData);

        expect(res.body).to.have.status(403);
        expect(res.body).to.not.be.null;
    });
    
});

describe('PATCH customer: /customer/:id', ()=>{
    it('Send the correct response when the customer is updated', async () => {
        const responseData = {
            id: '2022',
            customer_document: '24902315',
            nombre: 'Leonardo',
            apellido: 'Solano',
        }

        const res = await request.patch(`/customer/${responseData.id}`)
        .set('token', 'Pr0l3.2022.')
        .send(responseData);

        expect(res.body).to.have.status(200);
        expect(res.body).to.not.be.null;
    });
    it('Send the correct response when the customer is not updated', async () => {
        const responseData = {
            id: '2022',
            customer_document: '24902315',
            nombre: 'Leonardo',
            apellido: 'Solano',
        }

        const res = await request.patch(`/customer/${responseData.id}`)
        .set('token', 'Pr0l3.2022.')
        .send(responseData);

        expect(res.body).to.have.status(400);
        expect(res.body).to.not.be.null;
    });
    it('Send the correct response when the request is not authorized', async () => {
        const responseData = {
            id: '2022',
            customer_document: '24902315',
            nombre: 'Leonardo',
            apellido: 'Solano',
        }

        const res = await request.patch(`/customer/${responseData.id}`)
        .set('token', 'Pr0l3.2022.')
        .send(responseData);

        expect(res.body).to.have.status(403);
        expect(res.body).to.not.be.null;
    });
});