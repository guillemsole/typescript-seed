import {Observable} from "@reactivex/rxjs";
import {expect} from 'chai';

async function foo() {
  return await Observable.of(1).toPromise();
}

describe(":D", () => {
  it("should be fun", async () => {
    expect(await foo()).to.be.equal(1);
  })
});
