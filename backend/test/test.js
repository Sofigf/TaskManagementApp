const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server'); // Pastikan path ke file utama Express.js benar

chai.should();
chai.use(chaiHttp);

describe('Backend API Testing', () => {
  it('should return status 200 on GET /api', (done) => {
    chai.request(server)
      .get('/api')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
