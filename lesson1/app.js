// alert('Hello World!');
// alert('Mening ismim Muhammadaziz');

// let name = "Muhammadaziz";
// let surname = "Xabibullayev";
// let age = 20

// name = "Muhammadali"
// console.log(name)
// console.log(surname)
// console.log(age)

// const id = "AA0"
// // id = 'AA1'
// console.log(id)


// console.log(name);
// console.log(surname);
// console.log(age);

// console.log(name);
// let name = "Muhammadaziz";

// // O'zgaruvchilarga nom berish
// // O'zgaruvchilarga nom berayotganda, u o'zida qanday ma'lumot saqlashini hisobga
// // olib, berilgan nom saqlayotgan ma'lumotni ifoda etib turishi kerak. O'zgaruvchilar
// // odatda camelCase ko'rinishida yoziladi.
// let firtname = "Muhammadaziz"; // understandable
// let var1 = "Muhammadaziz"; // misunderstandable

// console.log(firtname)

// let userName = "username"; // correct (camelCase style)
// let user_name = "username"; // incorrect

// let with space = "withSpace"; // error
// let StartsWithNumber = "startsWithNumber"; // error
// let otherSymbolUsed = "otherSymbolUsed"; // error
// let for = "Reserved word"; // error

// let firstName = "Muhammadaziz";
// let firsTName = "Muhammadaziz";

// ----------------------------------------------------------------------------------- //
// Primitive turdagi qiymatlar
// Primitive qiymat to'g'ridan to'g'ri o'zgaruvchi murojaat qiladigan manzilda joylashadi.

// Number - sonlarni o'zida saqlovchi ma'lumot turi
// let age = 20; // number
// let price = 19.99;
// console.log(age)
// console.log(price)

// String - o'zida belgilar ketma-ketligini saqlovchi ma'lumot turi
// let firstName = "Muhammadaziz";
// console.log(firstName)

// Boolean - mantiqiy ma'lumot turi bo'lib faqatgina true (rost) yoki false (yolg'on)
// qiymatlarni qabul qilishi mumkin bo'lgan ma'lumot turi.
// let isUser = true
// let hasPassport = false
// console.log(isUser)
// console.log(hasPassport)

// Undefined - hali aniqlanmagan ma'lumot turi.
// let student;
// console.log(student);

// Null - bo'sh qiymatga ega bo'lgan ma'lumot turi.
// let school = null;
// console.log(school);

// Symbol - yagon (unique) va o'zgarmas qiymatga ega bo'luvchi ma'lumot turi.
// let id = Symbol('id');
// console.log(id);

//Bigint - katta sonlarni saqlashga mo'ljallangan ma'lumot turi.
// const alsoHuge = BigInt(325234234242423424);
// console.log(alsoHuge);

// // JavaScript dynamic typing funksiyasiga ega bo'lib uning yordamida o'zgaruvchi
// // saqlovchi ma'lumot turini ko'rsatmasdan ham qiymat saqlashimiz mumkin.
// // O'zgaruvchi saqlaydigan ma'lumot turi avtomatik tarzda aniqlanadi.

// type of - operatoridan foydalanib o'zgaruvchi saqlayotgan ma'lumotning turini
// aniqlash imkoniyati mavjud.

// let myAge = 10;
// console.log(typeof myAge)

// // Object turdagi qiymatlar
// // Object qiymat o'zgaruvchi murojaat qilgan manzilda ko'rsatilgan boshqa manzilda saqlanadi.

// // Function
// // Array
// Object
// ----------------------------------------------------------------------------------- //
// 3 - Lesson: let, const, var
// 'use strict';

// let age = 19
// age = 20
// console.log(age)

// const id = 'AA0';
// console.log(id);
// id = 'AA1'; // X
// console.log(id) // X

// var name = 'Muhammadaziz';
// console.log(name)
// name = 'Muhammadali';
// console.log(name)

// use strict mode
// let firstName = 'Muhammadaziz'
// console.log(firstName)
// ----------------------------------------------------------------------------------- //
// // Lesson 4: arifmetik operatorlar, solishtirish operatorlar, tayinlash operatorlar

// ARIFMETIK OPERATORLAR
// let a = 5, b = 10;
// console.log(a + b); // 15
// console.log(a - b); // -5
// console.log(a * b); // 50
// console.log(a / b); // 0.5
// console.log(a % b); // 5
// console.log(a++); // 5
// console.log(a); // 6
// console.log(++a); // 6 (7)
// console.log(++a); // 7
// console.log(b--); // 10
// console.log(b); // 9
// console.log(--b); // 9 (8)
// console.log(b); // 8

// SOLISHTIRISH OPERATORLAR
// let a = 5, b = 10, c = '5';
// const z = a

// console.log(a == c); // true - qiymatiga qarab solishtiradi
// console.log(a === c); // false - turiga qarab solishtiradi
// console.log(a == z); // true
// console.log(a === z); // true
// console.log(a != b); // true
// console.log(a != z); // false
// console.log(a > b); // false
// console.log(a < b); // true
// console.log(a >= b); // false
// console.log(a <= b); // true

// TAYINLASH OPERATORLAR
// let a = 5, b = 10, c = 15;

// console.log(a);
// a = b; // 10
// console.log(a);
// a += b; // 20
// a = a + b
// console.log(a);
// a -= b; // 10
// console.log(a);
// c *= b; // 150
// console.log(c);
// c /= 5; // 30
// c = c / b
// console.log(c);
// b %= 2; // 0
// b = b % 2
// console.log(b);