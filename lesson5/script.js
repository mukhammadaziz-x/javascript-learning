// LESSON 5
// Mavzu-1: ARRAY metodlari

// concat()
const array1 = [1, 4];
const array2 = [2, 3, 7];
const result = array1.concat(array2);

console.log(result);

// find()
const findValue = (number) => number === 2;
const foundValue = result.find(findValue);
console.log(foundValue);

// filter()
let filterValues = number => number > 5;
filterValues = result.filter(filterValues)

console.log(filterValues)

// map()
const mapValues = number => 'Son: ' + number;
const mappedValues = result.map(mapValues);

console.log(mappedValues);

// sort()
 