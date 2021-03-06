/* eslint-disable */

const firstItem = (arr, cb) => {
  console.log(`The first item is ${firstItem}.`);// firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
};

const getLength = (arr, cb) => {
  console.log(`The length of the array is ${length}.`);// getLength passes the length of the array into the callback.
  cb(arr.length); // do i have ur code ryan ? ahh
};

const last = (arr, cb) => {
  console.log(`The last item in the array is ${lastItem}.`);// last passes the last item of the array into the callback.
};

const sumNums = (x, y, cb) => {
  console.log(`The sum is ${sum}.`);// sumNums adds two numbers (x, y) and passes the result to the callback.
};

const multiplyNums = (x, y, cb) => {
  console.log(`The product is ${product}.`);// multiplyNums multiplies two numbers and passes the result to the callback.
};

const contains = (item, list, cb) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');// contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
};

/* eslint-enable */
module.exports = {
  firstItem,
  getLength,
  last,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates,
};
