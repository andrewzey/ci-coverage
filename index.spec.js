var chai = require('chai');
var expect = chai.expect;

var whatIsIt = require('./index.js').whatIsIt;

describe('whatIsIt()', function () {

  it('should throw an error when called with no arguments', function () {
    expect(function(){ whatIsIt(); }).to.throw(Error, 'you must pass a single argument');
  });

  it('should return "array" for an array input', function () {
    expect(whatIsIt([1,2,3,4])).to.equal("array");
  });

  it('should return "null" for a null input', function () {
    expect(whatIsIt(null)).to.equal("null");
  });

  it('should return "object" for an object input', function () {
    expect(whatIsIt({stuff: [1,'hi']})).to.equal("object");
  });

  it('should return "string" for a string input', function () {
    expect(whatIsIt('Hello')).to.equal("string");
  });

});





















// it('should return "number" for a number input', function () {
  //   expect(whatIsIt(42)).to.equal("number");
  // });

  // it('should return "boolean" for a boolean input', function () {
  //   expect(whatIsIt(true)).to.equal("boolean");
  // });

  // it('should return "undefined" for an undefined input', function () {
  //   expect(whatIsIt(undefined)).to.equal("undefined");
  // });



