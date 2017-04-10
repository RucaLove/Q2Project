process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');
const knex = require('../knex');

beforeEach(done => {
  Promise.all([
    knex('users').insert({
      id: 1,
      first_name: 'Sam',
      last_name: 'Miller',
      email: 'sammzamm01@gmail.com ',
      hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
      gender: 1,
      age: 28,
      looking_for: true,
      interested_in: 2,
      bio: 'I am Sam. I like climbing.',
      usr_name: 'SammZamm',
      lat: 40.068337,
      long: -105.1820337,
      photo: 'https://www.facebook.com/photo.php?fbid=10209718362210655&set=t.1078410022&type=3&theater'
    }),
    knex('users').insert({
      id: 2,
      first_name: 'Haley',
      last_name: 'Kalb',
      email: 'haley.kalb@gmail.com ',
      hashed_password: '$4a$90$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
      gender: 1,
      age: 34,
      looking_for: false,
      interested_in: 1,
      bio: 'I am the most amazing.',
      usr_name: 'RucaLove',
      lat: 40.0228514,
      long: -105.2544565,
      photo: 'https://www.facebook.com/photo.php?fbid=10103928666203455&set=a.806490888855.2461131.22426940&type=3&theater'
    })
  ]).then(() => done());
});

afterEach(done => {
  knex('users').del().then(() => done())
});

describe('GET /users', () => {
  it('renders then page when a get request happens', done => {
    request(app)
      .get('/users')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('returns an array of all users when responding with JSON', done => {
    request(app)
      .get('/users')
      .end((err, res) => {
        expect(res.body).to.deep.equal([{
            id: 1,
            first_name: 'Sam',
            last_name: 'Miller',
            email: 'sammzamm01@gmail.com ',
            hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
            gender: 1,
            age: 28,
            looking_for: true,
            interested_in: 2,
            bio: 'I am Sam. I like climbing.',
            usr_name: 'SammZamm',
            lat: 40.068337,
            long: -105.1820337,
            photo: 'https://www.facebook.com/photo.php?fbid=10209718362210655&set=t.1078410022&type=3&theater'
          },
          {
            id: 2,
            first_name: 'Haley',
            last_name: 'Kalb',
            email: 'haley.kalb@gmail.com ',
            hashed_password: '$4a$90$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
            gender: 1,
            age: 34,
            looking_for: false,
            interested_in: 1,
            bio: 'I am the most amazing.',
            usr_name: 'RucaLove',
            lat: 40.0228514,
            long: -105.2544565,
            photo: 'https://www.facebook.com/photo.php?fbid=10103928666203455&set=a.806490888855.2461131.22426940&type=3&theater'
          }
        ]) // end of expect
      }) // end of end
  }) // end of it
}); // end of describe block


describe('GET /users/:id', () => {
  it('responds with a rendered page', done => {
    request(app)
      .get('/users/:id')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('returns an OBJECT matching the requested user', done => {
    request(app)
      .get('/users/2')
      .end((err, res) => {
        expect(res.body).to.deep.equal({
          id: 2,
          first_name: 'Haley',
          last_name: 'Kalb',
          email: 'haley.kalb@gmail.com ',
          hashed_password: '$4a$90$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
          gender: 1,
          age: 34,
          looking_for: false,
          interested_in: 1,
          bio: 'I am the most amazing.',
          usr_name: 'RucaLove',
          lat: 40.0228514,
          long: -105.2544565,
          photo: 'https://www.facebook.com/photo.php?fbid=10103928666203455&set=a.806490888855.2461131.22426940&type=3&theater'
        }) // end of expect
      }) // end of end
  }) // end of it

  // if this isn't working switch Content-Type to text/plain
  it('returns a 404 error when it is given a request with no matching id', done => {
    request(app)
      .get('/users/99')
      .expect('Content-Type', /plain/)
      .expect(404, 'select valid user id', done);
  }) // end of it
}); // end of describe block

describe('POST /users/:id', () => {
  let newUser = {
    user: {
      id: 3,
      first_name: 'Megan',
      last_name: 'Gross',
      email: '144.mdgross@gmail.com',
      hashed_password: '$4a$90$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
      gender: 2,
      age: 26,
      looking_for: false,
      interested_in: 1,
      bio: 'Really loves colors',
      usr_name: 'Megan',
      lat: 40.0228514,
      long: -105.2544565,
      photo: 'https://pbs.twimg.com/profile_images/771552455125405696/G7b6y_uV.jpg'
    }
  }

  it('responds with JSON', done => {
    request(app)
      .post('/profile/3')
      .type('form')
      .send(newUser)
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('adds the new user to the database', done => {
    request(app)
      .post('/profile/:id')
      .type('form')
      .send(newUser)
      .end((err, res) => {
        knex('users').select().then(users => {
          expect(users).to.have.lengthOf(3)
          expect(users).to.deep.include(newUser.user)
          done()
        })
      })
  })
})

describe('PUT /users/:id', () => {
  let updatedUser = {
    user: {
      id: 1,
      first_name: 'Nico',
      last_name: 'Roldos',
      email: 'nico.roldos@icloud.com',
      hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
      gender: 1,
      age: 28,
      looking_for: true,
      interested_in: 2,
      bio: 'I am not Sam. I am Nico! But I used to be Sam in the database...and in the profile picture......',
      usr_name: 'SammZamm',
      lat: 40.068337,
      long: -105.1820337,
      photo: 'https://www.facebook.com/photo.php?fbid=10209718362210655&set=t.1078410022&type=3&theater'
    }
  }

  // forms can't do put requests so what is this test saying?
  it('responds with JSON', done => {
    request(app)
      .put('/users/1')
      .type('form')
      .send('updatedUser')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('updates the user in the database', done => {
      request(app)
        .put('/users/1')
        .type('form')
        .send(updatedUser)
        .end((err, res) => {
          knex('users').where('id', 1).first().then(user => {
            expect(user.first_name).to.equal(updatedUser.user.first_name);
            expect(user.last_name).to.equal(updatedUser.user.last_name);
            expect(user.email).to.equal(updatedUser.user.email);
            expect(user.hashed_password).to.equal(updatedUser.user.hashed_password);
            expect(user.gender).to.equal(updatedUser.user.gender);
            expect(user.looking_for).to.equal(updatedUser.user.looking_for);
            expect(user.interested_in).to.equal(updatedUser.user.interested_in);
            expect(user.bio).to.equal(updatedUser.user.bio)
            expect(user.usr_name).to.equal(updatedUser.user.usr_name)
            expect(user.lat).to.equal(updatedUser.user.lat)
            expect(user.long).to.equal(updatedUser.user.long)
            expect(user.photo).to.equal(updatedUser.user.photo)
            done();
          });
        });
    });
})

describe('DELETE users/:id', () => {

  it('responds with JSON', done => {
    request(app)
    .delete('/users/2')
    .type('form')
    .expect('Content-Type', /json/)
    .expect(200, done)
  })

  it('deletes the user in the database', done => {
    request(app)
    .delete('/users/2')
    .end((err, res) => {
      knex('users').where('id', 2).del().then(allGone => {
        expect(allGone).to.equal(1)
        done()
      })
    })
  })
})
