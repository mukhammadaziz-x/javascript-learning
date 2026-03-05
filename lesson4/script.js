// LESSON 4
// Mavzu-1: Array, uni yaratish, elementlarni olish, qo'shish 
// o'zgartirish, o'chirish, array uzunligini aniqlash.
// Mavzu-2: Array metodlari 

// 1. Array yaratish
// const avtolar1 = ["Mercedes", "Volvo", "BMW"];
// console.log(avtolar1)

// const avtolar2 = new Array("Mercedes", "Volvo", "BMW");
// console.log(avtolar2)

// const boshArray = []; // bo’sh array

// const sonArray = [1, 2, 9, -2]; // sonlar array

// const stringArray = ['Javascript', 'Python', 'Java']; //string Array

// const mixedArray = ['Javascript', 2, false, null]; // aralash Array

// console.log(boshArray)
// console.log(sonArray)
// console.log(stringArray)
// console.log(mixedArray)


// const helloArray = ['h', 'e', 'l', 'l', 'o'];

// console.log(helloArray[0]); // h

// console.log(helloArray[2]); // l


// let languages1 = ['js', 'c++', 'ruby'];
// console.log(languages1);

// languages1.push('go');
// console.log(languages1); // ['js', 'java', 'go']


// let languages = ['js', 'python'];
// console.log(languages);

// languages.unshift('dart');
// console.log(languages); // ['dart', 'js', 'python']


// const languages = ['js', 'python', 'go'];
// console.log(languages);

// languages[1] = 'swift';
// console.log(languages); // ['js', 'swift', 'go']



// let languages1 = ['js', 'swift', 'dart', 'flutter'];

// languages1.pop();
// console.log(languages1); // ['js', 'dart', 'flutter']
// console.log(deletedLanguage1); // swift


// let languages2 = ['java', 'go', 'ruby', 'flutter'];

// const deletedLanguage2 = languages2.shift();
// console.log(languages2); // ['go', 'ruby', 'flutter']
// console.log(deletedLanguage2); // swift

// const users = ['user1', 'user2', 'user3'];

// console.log(users.length); // 3



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
// const array1 = [1, 4];
// const array2 = [2, 3, 7];
// const natija = array1.concat(array2);

// console.log(natija)

// const find = (number) => number === 2;
// const found = natija.find(find);
// console.log(found)






// PRACTICE
// 1-vazifa: E-commerce savatcha.
// const shoppintCart = []

// shoppintCart.push('olma');
// shoppintCart.push('sut');
// shoppintCart.push('tvorog');
// shoppintCart.push('futbolka');

// shoppintCart.unshift('sumka');

// console.log(shoppintCart.length);

// let deletedTshirt = shoppintCart.pop()

// console.log(shoppintCart)
console.log(deletedTshirt)