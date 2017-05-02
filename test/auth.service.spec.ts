import {expect} from 'chai';
import {AuthService} from "../src/domain/auth.service";

const authService = new AuthService();

describe("Auth service test", () => {
  it("should generate token from userId", (done) => {
    let userId = "testUserId";
    let token = authService.createToken(userId);
    let decryptInfo = authService.decryptToken(token);
    expect(decryptInfo[0]).to.be.null;
    expect(decryptInfo[1].userId).to.equal(userId);
    done();
  })
});
