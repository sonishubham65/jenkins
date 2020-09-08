let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let server = require('../app');
var expect = chai.expect;

describe("Testing account API", () => {
    context('Signup:', () => {
        it("1. Validation", (done) => {
            chai.request(server)
                .get("/").then(response => {
                    expect(response.statusCode).to.equal(200);
                    expect(response.body).to.be.an('object').to.contain.all.keys('success', 'message');
                    expect(response.body.message).to.be.a("string");
                    expect(response.body.success).to.equal(0);
                    done();
                }).catch(err => {
                    done(err)
                })
        })
    })
})