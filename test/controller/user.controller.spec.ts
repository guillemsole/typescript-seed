import {expect, assert} from 'chai';
import {Server} from "../../src/server";
import * as supertest from 'supertest';

const server = Server.bootstrap();

describe("User controller test", () => {

  it("should create user", (done) => {
    supertest(server.app)
      .post("/user/register")
      .send({
        "name": "name",
        "email": "email@email.com",
        "password": "password"
      })
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        expect(res.body).to.have.property('token');
        done();
      });
  });
});
