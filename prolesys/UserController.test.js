import supertest from 'supertest';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
const request = supertest("http://localhost:8444");
chai.use(chaiHttp);

describe('GET User: /user', () =>{ //Search
    it('Returning the correct user when searching and finding the user', async() => {
        const data = {document_number: '6833445', document_type: 'V'}
        const fakeData = {};

        const res = await request.get('/user')
        .set('token', 'Pr0l3.2022.')
        .send(data);

        expect(res.body).to.have.status(200);
        expect(res.body).to.be.deep.equal(fakeData);
    });

    it('Returning the correct response when searching and not finding the user', async() => {
        const data = {document_number: '6833445', document_type: 'V'}
        const responseData = {};
        
        const res = await request.get('/user')
        .set('token', 'Pr0l3.2022.')
        .send(data);

        expect(res.body).to.have.status(200);
        expect(res.body).to.be.equal(responseData);
    });

    it('Returning the correct response when the search is empty', async() => {
        const data = {document_number: '6833445', document_type: 'V'}
        
        const res = await request.get('/user')
        .set('token', 'Pr0l3.2022.')
        .send(data);

        expect(res.body).to.have.status(200);
        expect(res.body).to.not.be.empty;
    });

});

describe('PATCH User: /user/id', () =>{ //Update
    it('Send the correct response when updating an user', async() => {
        const fakeData = {
           document_number: '6833445',
           document_type: 'V',
           id: '2502'
        }

        const res = await request.patch('/user/id')
        .set('token', 'Pr0l3.2022.')
        .send(fakeData);

        expect(res.body).to.have.status(200);
        expect(res.body).to.not.be.empty;
    });

    it('Send the correct response when it was not possible to update an user', async() => {
        const fakeData = {
            document_number: '6833445',
            document_type: 'V',
            id: '2502'
         }
 
         const res = await request.patch('/user/id')
         .set('token', 'Pr0l3.2022.')
         .send(fakeData);
 
         expect(res.body).to.have.status(400);
         expect(res.body).to.not.be.empty;
    });

    it('Send the correct response when not authorized to update an user', async() => {
        const fakeData = {
            document_number: '6833445',
            document_type: 'V',
            id: '2502'
         }
 
         const res = await request.patch('/user/id')
         .set('token', 'Pr0l3.2022.')
         .send(fakeData);
 
         expect(res.body).to.have.status(403);
         expect(res.body).to.not.be.null;
    });

});


describe('POST User: /user/:id/change-password', () =>{ //Change Password
    it('Send the correct response when the password was change', async () =>{
        const data = {
            id: '2502',
            password: 'abc123546',
        }

        const res = await request.post(`/user/${data.id}/change-password`)
        .set('token', 'Pr0l3.2022.')
        .send(data);

        expect(res.body).to.have.status(200);
        expect(res.body).to.not.be.null;
    });

    it('Send the correct response when the password was not change', async () =>{
        const data = {
            id: '2502',
            password: 'abc123546',
        }

        const res = await request.post(`/user/${data.id}/change-password`)
        .set('token', 'Pr0l3.2022.')
        .send(data);

        expect(res.body).to.have.status(400);
        expect(res.body).to.not.be.empty;
    });
    

});


describe('POST User: /user/create', () =>{ //Create User
    it('Send the correct response when the user create was succesfull', async () =>{
        const data = {
            id: 2502,
            nombre: 'Leonardo',
            apellido: 'Solano',
            user: 'lsolano',
            password: 'abc123456',
            customer_document: '24902315',
            customer_type: 'V'
        }

        const res = await request.post('/user/create')
        .set('token', 'Pr0l3.2022.')
        .send(data);

        expect(res.body).to.have.status(200);
        expect(res.body).to.not.be.null;
    });

    it('Send the correct response when the user create was not succesfull', async () =>{
        const data = {
            id: 2502,
            nombre: 'Leonardo',
            apellido: 'Solano',
            user: 'lsolano',
            password: 'abc123456',
            customer_document: '24902315',
            customer_type: 'V'
        }

        const res = await request.post('/user/create')
        .set('token', 'Pr0l3.2022.')
        .send(data);

        expect(res.body).to.have.status(400);
        expect(res.body).to.not.be.empty;
    });

    it('Send the correct response when the user create was missing data', async () =>{
        const data = {
            id: 2502,
            user: 'lsolano',
            password: 'abc123456',
            customer_type: 'V'
        }

        const res = await request.post('/user/create')
        .set('token', 'Pr0l3.2022.')
        .send(data);

        expect(res.body).to.have.status(400);
        expect(res.body).to.not.be.empty;
    });

});

