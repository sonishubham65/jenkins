let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let server = require('../app');
var expect = chai.expect;

describe("Testing basic api", () => {
    context('Get:/:', () => {
        it("1. First Hit", (done) => {
            chai.request(server)
                .get("/").then(response => {
                    expect(response.statusCode).to.equal(200);
                    expect(response.body).to.be.an('object').to.contain.all.keys('success', 'message');
                    expect(response.body.message).to.be.a("string");
                    expect(response.body.success).to.equal(1);
                    done();
                }).catch(err => {
                    done(err)
                })
        })
    })
})