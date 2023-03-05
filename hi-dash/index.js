module.exports = {

  // implement forEach method
  forEach(arr, fn) {
    // for(in) returns the indexes - for(of) returns the values
    for (let i in arr) {
      // return the values, and indexes
      fn(arr[i], i)
    }
  },

  // implement map method
  map(arr, fn) {
    // initialize a new array as empty
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const value = fn(arr[i], i);
      // push the value or append
      result.push(value);
    }
    // return result of a map method
    return result;
  }
}
