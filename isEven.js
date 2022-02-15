/* const isEven = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven); */

/* produces the same result as above but simplifies by not setting function return values to new variables. */

const isEven = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));