import {expect} from 'chai';
import {hello} from '../src/index';

describe("Hello", function() {
  it("should return hello + a name", function() {
    expect(hello()).to.match(/^hello \w+/);
  });
});
