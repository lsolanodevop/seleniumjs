import supertest from 'supertest';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
const request = supertest("http://localhost:8444");
chai.use(chaiHttp);

describe('GET customer: /customer', ()=>{

});

describe('PATCH customer: /customer/:id', ()=>{

});