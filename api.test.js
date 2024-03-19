const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Books API', () => {
    it('should post a book', (done) => {
        const body = {"id":"1","title":"test","author":"tester"};
        chai.request(server)
            .post('/books')
            .send(body)
            .end((err, res) => {
                if(err){
                    return done(err)
                }
                expect(res.statusCode).to.equal(201)
                done();
            })
    })

    it('should get a book', (done) => { //this test depends on the POST request in the previous one. WHY???
        chai.request(server)
            .get('/books/1')
            .end((err, res) => {
                if (err){
                    return done(err)
                }
                expect(res.statusCode).to.equal(200)
                done()
            })
    })
})