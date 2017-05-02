import {expect} from 'chai';
import {UserService} from "../src/domain/user/user.service";

const userService = new UserService();

describe("User service test", () => {
  it("should create user", (done) => {
    let user = userService.create("name", "email", "password");
    expect(user.name).to.equal("name");
    expect(user.email).to.equal("email");
    expect(user.password).to.equal("password");
    done();
  })
});
