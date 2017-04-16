import {suite, test} from "mocha-typescript";
import {expect} from "chai";
import {foo} from "../src/main";

describe("HelloTest", () => {
    it("foo() should return 'Hello World'", () => {
        const result = foo();
        expect(foo()).to.equal('Hello World');
    });
});