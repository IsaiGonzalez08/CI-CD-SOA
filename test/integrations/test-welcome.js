const request = require('supertest');
const app = require('../../app.js');

describe('GET /', () => {
  it('should return Holaa mundo!!!!!', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hola mundo!!!!!', done);
  });
});
