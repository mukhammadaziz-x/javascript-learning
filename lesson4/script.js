// LESSON 4
// Mavzu-1: Array, uni yaratish, elementlarni olish, qo'shish 
// o'zgartirish, o'chirish, array uzunligini aniqlash.
// Mavzu-2: Array metodlari 

// 1. Array yaratish
// const languages = ['js', 'java', 'go'];
// console.log(languages);

// const language = new Array('js', 'java', 'go');
// console.log(language)

// Array o'z ichida turli xil qiymatlarni saqlashi mumkin.
// bo'sh array
// const boshArray = [];

// sonlar array
// const sonArray = [1,3,8,4]

// string array
// const stringArray = ['Javascript', 'Java', 'Python']

// aralash array
// const aralash = ['Javascrip', 2, false, null]

// 2. Array elementini olish
// 
// const helloArray = ['h', 'e', 'l', 'l', 'o']

// console.log(helloArray[0])
// console.log(helloArray[4])

// 3. Array element qo'shish
// push() metodi yordamida array oxiriga element qo'shish mumkin.
// let languages = ['js', 'python', 'go'];

// languages.push('ruby');

// console.log(languages)

// unshift() metodi yordamida array boshiga element qo'shish mumkin.
// const languages = ['c', 'c++', 'js']

// languages.unshift('python')

// console.log(languages)

// 4. Array elementini o'zgartirish
// mobile_languages = ['dart', 'flutter', 'python']

// mobile_languages[2] = 'swift'

// console.log(mobile_languages)

// 5. Array elementini o'chirish
// pop() metodidan foydalanib array ichidagi oxirgi elementni o'chirish
// imkoniyati mavjud. 
// const languages = ['js', 'python', 'java', 'go']

// languages.pop()

// console.log(languages)
// const ochirilganTil = languages.pop()

// shift() metotidan foydalanib array ichidagi birinchi elementni
// o'chirish imkoniyati mavjud. Metod o'chirilgan elementni qaytaradi.
// const languages = ['js', 'java', 'ruby', 'swift']
// languages.shift()

// console.log(languages)

// // 6. Array uzunligini aniqlash
// const languages = ['js', 'dart', 'ruby', 'swift']

// console.log(languages.length)

// Array metodlari:
// concat() metodi
const array1 = [1, 4];
const array2 = [2, 3, 7];
const natija = array1.concat(array2);

console.log(natija)

const find = (number) => number === 2;
const found = natija.find(find);
console.log(found)