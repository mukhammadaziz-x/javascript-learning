// console.log(kvadrat(5));

// LESSON 3
// Mavzu-1: Funksiya va uni e'lon qilish (function declaration)
// Mavzu-2: Arrow funksiya va expression funksiya
// Mavzu-3: Funksiyalar bo'yicha amaliyot

// Mavzu-1: Funksiya va uni e'lon qilish
// Funksiya:
// function sonQosh(son1, son2) {
//     return son1 + son2
// }
// console.log(sonQosh(10, 30));
// console.log(sonQosh(5, 10));

// function salomBer(name) {
//     return `Assalamu alaykum, ${name}!`
// }

// console.log(salomBer('Muhammadaziz'))

// Funksiyani e'lon qilish:
// Declaration funksiya
// console.log(kvadrat(5));
// console.log(kvadrat(5));

// function kvadrat(son) {
//     return son * son;
// }

// Expression funksiya
// console.log(kvadrat(10));

// const kvadrat = function(son) {
//     return son * son;
// }
// console.log(kvadrat(10));

// Arrow funksiya
// 1. Expression funksiyaga juda o'xshash bo'lib, faqatgina arrow (=>) kalit so'ziga ega bo'ladi.
// const qoshish = (son) => {
//     console.log('Salom')
//     return son + son
// }
// console.log(qoshish(15));

// 2. Agar funksiya tana qismi bir qatordan iborat bo'lsa, return kalit so'zini yozmaslik mumkin.
// const kvadrat = son => son * son;
// console.log(kvadrat(5));

// 3. Agar funksiya hech qanday parametrga ega bo'lmasa.
// const print = () => console.log('Hello my friends!');
// print();

// 4. Ikki yoki undan ko'p parametrlarga ega bo'lgan funksiya uchun, parametrlar qavslar ichida bo'lishi shart
// const kopaytirish = (a, b, c) => a * b * c;
// console.log(kopaytirish(1, 5, 6))


// // Funksiyalar bo'yicha amaliyot:
// // 1) Online do'kon narxini hisoblash funksiyasi

// // 1. Declaration funksiya
// function narxniHisoblashDEC(narx) {
//     const soliq = narx * 0.12 // 12 foiz soliq
//     return narx + soliq
// }
// console.log(`Mahsulot summasi (narx + soliq): ${narxniHisoblashDEC(150000)} so'm`)

// // 2. Expression funksiya
// const narxniHisoblashEXP = function(narx) {
//     const soliq = narx * 0.12;
//     return narx + soliq;
// }
// console.log(`Mahsulot summasi (narx + soliq): ${narxniHisoblashEXP(200000)} so'm`)

// // 3. Arrow funksiya
// const narxniHisoblashARR = narx => narx + (narx * 0.12);
// console.log(`Mahsulot summasi (narx + soliq): ${narxniHisoblashARR(100000)} so'm`)

// // const narxniHisoblash = narx => {
// //     soliq = narx * 0.12;
// //     return soliq + narx
// // };
// // console.log(`Mahsulot summasi (narx + soliq): ${narxniHisoblashARR(100000)} so'm`)

// // 2) Salom berish funksiyasi
// // 1. Declaration funksiya
// function salomBerishDEC(name) {
//     return `Assalamu alaykum, ${name}!`;
// }
// console.log(salomBerishDEC('Mohinur'));

// // 2. Expression funksiya
// const salomBerishEXP = function(name) {
//     return `Assalamu alaykum, ${name}!`;
// }
// console.log(salomBerishEXP('Munisa'));

// // 3. Arrow funksiya
// const salomBerishARR = (name) => `Assalamu alaykum, ${name}!`;
// console.log(salomBerishARR('Husan'));

// // 3) Yoshni topish funksiyasi
// // 1. Function Declaration
// function yoshTopishDEC(t_yil) {
//     return 2026 - t_yil;
// }
// console.log(`Sizning yoshingiz: ${yoshTopishDEC(1974)} da`)

// // 2. Expression funksiya
// const yoshTopishEXP = function(t_yil) {
//     return 2026 - t_yil;
// }
// console.log(`Sizning yoshingiz: ${yoshTopishEXP(1995)} da`)

// // 3. Arrow funksiya
// const yoshTopishARR = t_yil => 2026 - t_yil;
// console.log(`Sizning yoshingiz: ${yoshTopishARR(2020)} da`)