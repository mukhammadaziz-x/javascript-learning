// LESSON 2
// THEME-1: STRING, CONCATENATION, TEMPLATE LITERALS

// String - belgilar ketma-ketligidan tashkil topgan ma'lumot turi.
// bittalik ('') yoki ikkitalik ("") qo'shtirnoqlardan foydalanib yaratish
// imkoniyati mavjud. Ba'zi bir maxsus belgilardan tashkil topgan matnlarda
// odatda ikkitalik qo'shtirnoqlardan foydalaniladi.


// let name = 'Otabek';
// console.log(name);
// let surname = "Haydarov";
// console.log(surname);


// let name = 'Otabek';
// let firstName = 'Og\'abek'
// console.log(name);
// let surname = "Haydarov";
// let buyLaptop = "Men \"Dell\" modelidagi notebookni sotib oldim."
// console.log(surname);
// console.log(buyLaptop)

// CONCATENATION
// Qo'shish (+) operatoridan foydalangan holda, string'larni qo'shish
// ya'ni concatenation qilish imkoniyati mavjud.

// let name = 'Muhammadali';
// let message = 'Hi ' + name + '!';
// console.log(message)

// let name = 'Mohinur'
// let message = `Hi ${name}!`; // backtick
// console.log(message);


// let name = 'Muhammadali';
// let message = 'Hi ' + name + ' !';
// console.log(message)

// let name = 'Mohinur'
// let message = `Hi ${name}`; // backtick
// console.log(message);

// THEME-2: MANTIQIY OPERATORLAR
// BOOLEAN LOGIC (mantiq), LOGICAL (mantiqiy) OPERATORS


// const age = 10;
// const a = age > 18; // false
// const b = age < 20; // true

// // AND operator
// console.log(a && b); // false

// // OR operator
// console.log(a || b); // true

// // NOT operator
// console.log(!a); // true
// console.log(!b) // false

// MINI TASK
// const htmlPassed = true;
// const cssPassed = false;
// let message = '';

// if (htmlPassed && cssPassed) {
//     message = 'Siz JavaScript kursini boshlashingiz mumkin!'
// } else if (htmlPassed || cssPassed) {
//     message = 'Iltimos ikkinchi kursni ham tugating.'
// } else {
//     message = 'Iltimos birinchi ikkala kursni tugating.'
// }

// console.log(message)

// THEME-3: TURNI (type) o'zgartirish
// Type conversion, type coercion, truthy and falsy

// TYPE CONVERSION
// const age = '23'; // String
// console.log(age); // String
// console.log(Number(age)); // Number

// console.log(age + 1); // 231 (concatenation)
// console.log(Number(age) + 1); // 24

// const name = 'Muslima';
// console.log(Number(name)); // NaN

// const age = '23'; // String
// console.log(age); // String
// console.log(Number(age)); // Number
// console.log(age + 1); // 231 (concatenation)
// console.log (Number(age) + 1); // 24
// const name = 'Ulugbek';
// console.log(Number(name)); // NaN


// const year = 2026; // Number
// console.log(year); // Number
// console.log(String(year)); // String
// console.log(typeof year)

// TYPE COERCION
// console.log('Men ' + 2011 + 'chi yilda tavallud topganman.') // auto string conversion
// console.log('30' - '10' - 5); // auto number conversion

// TRUTHY AND FALSY
// Fasly ko'rinishiga keladigan qiymatlar

// false
// 0
// ''
// undefined
// null
// NaN
// 0n

// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(0n));

// Truthy qiymatlar
// console.log(Boolean('Asadbek'));
// console.log(Boolean(18));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean('0'));
// console.log(Boolean('false'));

// Misol uchun
// const name = '';
// if (name) {
//     console.log('Sizning ismingiz: ' + name);
// } else {
//     console.log('Ismingizni kiriting: ')
// }