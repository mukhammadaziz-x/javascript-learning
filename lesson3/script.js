// LESSON 3
// Mavzu-1: Funksiya va uni e'lon qilish (function declaration)
// Mavzu-2: Arrow funksiya va expression funksiya
// Mavzu-3: Funksiyalar bo'yicha amaliyot

// Mavzu-1: Funksiya va uni e'lon qilish
// Funksiya:

// Funksiyani e'lon qilish:

// Declaration funksiya

// Expression funksiya

// Arrow funksiya
// 1. Expression funksiyaga juda o'xshash bo'lib, faqatgina arrow (=>) kalit so'ziga ega bo'ladi.


// 2. Agar funksiya tana qismi bir qatordan iborat bo'lsa, return kalit so'zini yozmaslik mumkin.


// 3. Agar funksiya hech qanday parametrga ega bo'lmasa.


// 4. Ikki yoki undan ko'p parametrlarga ega bo'lgan funksiya uchun, parametrlar qavslar ichida bo'lishi shart



// Funksiyalar bo'yicha amaliyot:
// 1) Online do'kon narxini hisoblash funksiyasi

// 1. Declaration funksiya
// function narxniHisoblash(narx) {
//     const soliq = narx * 0.12 // 12 foiz soliq
//     return narx + soliq
// }

// console.log(`Mahsulot summasi (narx + soliq): ${narxniHisoblash(150000)} so'm`)

// 2. Expression funksiya
// const narxniHisoblash = function(narx) {
//     const soliq = narx * 0.12;
//     return narx + soliq;
// }

// console.log(`Mahsulot summasi (narx + soliq): ${narxniHisoblash(200000)} so'm`)

// 3. Arrow funksiya
// const narxniHisoblash = (narx) => narx + (narx * 0.12);

// console.log(`Mahsulot summasi (narx + soliq): ${narxniHisoblash(100000)} so'm`)


// 2) Salom berish funksiyasi
// 1. Declaration funksiya
// function salomBerish(name) {
//     return `Assalamu alaykum, ${name}!`;
// }

// console.log(salomBerish('Otabek'));

// 2. Expression funksiya
// const salomBerish = function(name) {
//     return `Assalamu alaykum, ${name}!`;
// }

// console.log(salomBerish('Munisa'));

// 3. Arrow funksiya
// const salomBerish = name => `Assalamu alaykum, ${name}!`;

// console.log(salomBerish('Husan'));

// 3) Yoshni topish funksiyasi
// 1. Function Declaration
// function yoshTopish(t_yil) {
//     return 2026 - t_yil;
// }

// console.log(`Sizning yoshingiz: ${yoshTopish(2008)}`)

// 2. Expression funksiya
// const yoshTopish = function(t_yil) {
//     return 2026 - t_yil;
// }

// console.log(`Sizning yoshingiz: ${yoshTopish(1995)}`)

// 3. Arrow funksiya
// const yoshTopish = (t_yil) => 2026 - t_yil;

// console.log(`Sizning yoshingiz: ${yoshTopish(2020)}`)