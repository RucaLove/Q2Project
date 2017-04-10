process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');
const knex = require('../knex');

// check for cookie containing user personality result
describe('GET /personalities/:id', () => {
  it('responds with a rendered page', done => {
    request(app)
      .get('/personalities/:id')
      .expect('Content-Type', /html/)
      .expect(200, done);
  })
})
