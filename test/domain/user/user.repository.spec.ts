import {expect, assert} from 'chai';
import {UserRepository} from "../../../src/domain/user/user.repository";
import * as mongoose from "mongoose";
import config from "../../../src/config/env/test";

const userRepository = new UserRepository();

describe("User domain test", () => {
  before(done => {
    mongoose.connect(config.db);
    done();
  });

  it("should create user", async () => {
    try {
      let user = await userRepository.create("name", "email@email.com", "password");
      expect(user.name).to.equal("name");
      expect(user.email).to.equal("email@email.com");
      expect(user.password).to.not.equal("password");
    } catch(err) {
      assert.ifError(err, "Error when creating user");
    }
  });



  it("should create user trim spaces on email", async () => {
    try {
      let user = await userRepository.create("name", " email@email.com ", "password");
      expect(user.email).to.equal("email@email.com");
    } catch(err) {
      assert.ifError(err, "Error when creating user trimming email");
    }
  });

  it("should find by email", async () => {
    try {
      let user = await userRepository.create("name", " email@email.com ", "password");
      let dbUser = await userRepository.findByEmail(user.email);
      expect(user.email).to.equal(dbUser.email);
    } catch (err) {
      assert
    }
  });

  it("should find by id", async () => {
    try {
      let user = await userRepository.create("name", " email@email.com ", "password");
      let dbUser = await userRepository.findById(user._id);
      expect(user._id).to.equal(dbUser._id);
    } catch (err) {
      assert
    }
  });

  after(done => {
    mongoose.connection.collections['users'].drop();
    mongoose.connection.close();
    done();
  });


});
