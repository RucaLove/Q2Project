process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');
const knex = require('../knex');

// what content type does a render send?
describe('GET /', () => {
  it('responsds with HTML', done => {
    request(app)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200, done)
  })
})

// how to test Oauth? necessary?....
