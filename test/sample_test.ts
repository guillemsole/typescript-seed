import {suite, test} from "mocha-typescript";
import {expect} from "chai";
import {foo} from "../src/main";

@suite class HelloTest {
    @test "foo() should return 'Hello World'"() {
        expect(foo()).to.equal("Hello World");
    }
}