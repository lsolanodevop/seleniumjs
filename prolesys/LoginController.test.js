import supertest from 'supertest';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
const request = supertest("http://localhost:8444");
chai.use(chaiHttp);


describe('POST login: /login', () =>{
    it('Send the correct response when a user is able to login', async () => {
        const data =  {customer_id: '2520',
        password: '123456', //It should be encrypted
        otp: 'test'}

        const res = await request.post('/login')
        .set('token', 'Pr0l3.2022.')
        .send(data);

        expect(res.body).to.have.status(200);
    });

    it('Send the correct response when a user in unathorized to login', async () => {
        const data =  {customer_id: 'lsolano',
        password: '123456', //It should be encrypted
        otp: 'test'}

        const res = await request.post('/login')
        .set('token', 'Pr0l3.2022.')
        .send(data);

        expect(res.body).to.have.status(403);
    });

    it('Send the correct response when the user is not sending all the data', async () => {
        const data =  {}

        const res = await request.post('/login')
        .set('token', 'Pr0l3.2022.')
        .send(data);
        expect(res.body).to.have.status(400);
    });
});