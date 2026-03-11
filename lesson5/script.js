// // LESSON 5
// // Mavzu-1: ARRAY metodlari


// // concat()
const array1 = [1, 453, 55];
const array2 = [2, 3, 7, 10, 23];
const result = array1.concat(array2)
// console.log(result); // [1, 4, 2, 3, 7, 10]


// // find()
const findValue = number => number == 7;
const foundValue = result.find(findValue);
// console.log(foundValue); // 2


// // filter()
const filterValues = number => number > 5;
const filteredValues = result.filter(filterValues);
// console.log(filteredValues);


// // map()
const mapValues = number => number >= 4;
const mappedValues = result.map(mapValues);
// console.log(mappedValues);


// // sort()
const sortValues = (number1, number2) => number1 - number2;
// result.sort();
// console.log(result.sort(sortValues)); // [1, 2, 3, 4, 7]

// Mavzu-2: Object
// Object e'lon qilish (yaratish)
// const developer = {
// 	name: 'Abdulloh',
// 	age: 18
// }
// console.log(developer)

// Object xossasini olish
// Xossaning qiymatini kalit yordamida olish imkoniyati mavjud.

// Dot (.) belgisidan foydalanib
const user1 = {
	name: 'Muhammad',
	age: 35,
	major: 'Accountant'
}
// console.log(user1.major)

// Qavs [] belgisidan foydalanib
const user2 = {
	name: 'Kamron',
	age: 41,
	gender: 'Male'
}
// console.log(user2['gender']);

// Nested (ichma-ich) objectlar
const developer = {
	name: 'Akmal',
	age: 20,
	address: {
		country: 'Uzbekistan',
		city: 'Namangan',
		house: 7
	}
}
// console.log(developer.name)
// console.log(developer.address.country)
// console.log(developer.address.house)


// Object method'lari

// console.log(designer.name)

// Mavzu-3: Object metodlari
// Method


// this kalit so'zi
// const designer = {
// 	firstName: 'Rayhona',
// 	age: 38,
// 	greeting: function() {
// 		console.log(`Hello ` + this.firstName);
// 		console.log(`Hello ${designer.firstName}!`);
// 		console.log('Hello ' + designer.firstName);
// 		console.log('Hello ' + firstName); // ERROR
// 	}
// }
// designer.greeting();

// Object.keys()
// const product2 = {
//     productName: 'Laptop',
//     productPrice: 12500000
// }
// console.log(Object.keys(product2));


// // Object.values()
// const product3 = {
//     productName: 'Laptop',
//     productPrice: 12500000
// }
// console.log(Object.values(product3))

// Object.entries()

// numbers = [1, 2, 5, 9, 4, 3, -4]
// console.log(numbers)

// numbers[3] = -4
// numbers[6] = 9

// console.log(numbers)
