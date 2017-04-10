process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');
const knex = require('../knex');

describe('GET /test', () => {
  it('responds with a rendered page of all saved matches', done => {
    request(app)
      .get('/test')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
})

describe('POST /test', () => {
  it('redirects to the personalities/:id page', done => {
    request(app)
      .post('/test')
      .expect(302, done);
  });
});
