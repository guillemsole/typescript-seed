import {expect, assert} from 'chai';
import {UserService} from "../src/domain/user/user.service";
import {Server} from "../src/server";

const userService = new UserService();
Server.bootstrap();

describe("User service test", () => {
  var savedUser;
  it("should create user", async () => {
    try {
      let user = await userService.create("name", "email@email.com", "password");
      expect(user.name).to.equal("name");
      expect(user.email).to.equal("email@email.com");
      expect(user.password).to.equal("password");
      savedUser = user;
    } catch(err) {
      assert.ifError(err, "Error when creating user");
    }

  });

  it("should find by email", async () => {
    let user = await userService.findByEmail(savedUser.email);
    expect(user.email).to.equal(savedUser.email);
  });

  it("should find by id", async () => {
    let user = await userService.findById(savedUser.id);
    expect(user._id.toString()).to.equal(savedUser.id);
  });


});
