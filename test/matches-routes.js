process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');
const knex = require('../knex');

beforeEach(done => {
  Promise.all([
    knex('user_saved_matches').insert({
      user_id: 1,
      match_id: 2
    }),
    knex('users').insert({
      user_id: 2,
      match_id: 1
    })
  ]).then(() => done());
});

afterEach(done => {
  knex('user_saved_matches').del().then(() => done())
});



describe('GET /matches', () => {
  it('responds with a rendered page of all saved matches', done => {
    request(app)
      .get('/matches/:id')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  // this could be weird without testing the cookie
  it('returns an array of all the users saved matches when repsonding with JSON (remember to use humps)', done => {
    request(app)
      .get('/matches')
      .end((err, res) => {
        expect(res.body).to.deep.equal([{
          id: 1,
          userId: 1,
          matchId: 2
        }])
      })
  })
});

describe('GET /matches/:id', () => {
  it('redirects to the users/:id profile', done => {
    request(app)
      .get('/matches/:id')
      .expect(302, done);
  });
});

describe('POST /matches/:id', () => {
  let newMatch = {
    match: {
      id: 3,
      user_id: 2,
      match_id: 1
    }
  }
// I feel like there might be a problem with the /:id part of this...
it('responds with JSON', done => {
  request(app)
  .post('/matches/2')
  .type('form')
  .send(newMatch)
  .end((err, res) => {
    knex('user_saved_matches')
    .select()
    .then(matches => {
      expect(matches).to.have.lengthOf(3)
      expect(matches).to.deep.include(newMatch.match)
      done()
    })
  })
})

  it('puts the match in the database', done => {
    request(app)
      .post('/matches/1')
      .end((err, res) => {
        knex('user_saved_matches').where('id', 1).del().then(allGone => {
          expect(allGone).to.equal(1)
          done()
        })
      })
  })
})

describe('DELETE /matches/:id', () => {
  it('responds with JSON', done => {
    request(app)
      .delete('/matches/1')
      .type('form')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('deletes the match in the database', done => {
    request(app)
      .delete('/matches/1')
      .end((err, res) => {
        knex('user_saved_matches').where('id', 1).del().then(allGone => {
          expect(allGone).to.equal(1)
          done()
        })
      })
  })
})
