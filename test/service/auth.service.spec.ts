import {expect, assert} from 'chai';
import {AuthService} from "../../src/domain/auth.service";

const authService = new AuthService();

describe("Auth service test", () => {
  it("should generate token from userId", async() => {
    let userId = "testUserId";
    let token = authService.createToken(userId);
    try {
      let decryptInfo = await authService.decryptToken(token);
      expect(decryptInfo.userId).to.equal(userId);
    } catch (err) {
      assert(err, "Error when decrypt");
    }

  })
});
