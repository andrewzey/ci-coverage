var whatIsIt = function(input){
  if (arguments.length === 0) {
    throw new Error('you must pass a single argument');
  }
  else if (Array.isArray(input)) {
    return "array";
  }
  else if (input === null) {
    return "null";
  }
  else if (typeof input === "object") {
    return "object";
  }
  else if (typeof input === "string") {
    return "string";
  }
  else if (typeof input === "number") {
    return "number";
  }
  else if (typeof input === "boolean") {
    return "boolean";
  }
  else {
    return "undefined";
  }
};

module.exports.whatIsIt = whatIsIt;