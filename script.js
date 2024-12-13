// строки

// '' "" ``
// 'hello world' => 'Hello world'
// [индекс]
// 'hello'[0]

// Boxing, unboxing

// методы строк => возвращают новую строку, не изменяют исходную

// length => возвращает длину строки
const testString = "Hello world!";

// const pass = prompt('Введите пароль')
// console.log(testString.length);

// if (pass.length < 6) {
//     console.log('Пароль не соответствует заданной длине');
// } else {
//     console.log('Длина пароля ок');
// }

// изменение регистра
// при сравнении строк
// toLowerCase() - в нижний регистр
// toUpperCase() - в верхний регистр

// console.log(testString.toLowerCase());
// console.log(testString.toUpperCase());

// объединение строк
// concat(value) => объединяет две и более строк
// возвращает одну строку
// const str = 'javascript';

// console.log(testString.concat(' ', str));

// доступ к символам
// 'строка'[индекс]
// индекс => с 0
// charAt(индекс)
// возвращает символ по индексу

// let a;

// индекс последнего символа => str.length - 1

// console.log(testString.charAt(0));
// console.log(testString[0]);
// console.log(testString[40]);
// console.log(testString.length);
// console.log(testString[testString.length - 1]);
// console.log(a);

// for (let i = 0; i < testString.length; i++) {
//     console.log(testString[i]);
// }

// includes('подстрка', index) => проверяет содержит ли строка указанную подстроку
// возвращает true/false
// index - позиция в строке, с которой начать поиск, не обязательно
// console.log(testString.includes("!"));
// console.log(testString.includes("javascript"));

// const email = "test@mail.ru";
// console.log(email.includes('@')) // true
// console.log(email.includes('@', 5)) // false, поиск начинается с индекса 5

// indexOf(value, index) => возвращает индекс первого вхождения символа/значения
// index - позиция в строке, с которой начать поиск, не обязательно
// возвращает -1 если не было найдено совпадений
// console.log(email.indexOf('@')) // 4
// console.log(email.indexOf('!')) // -1

// lastIndexOf(value, index) => возвращает индекс последнего вхождения символа/значения
// index - позиция в строке, с которой начать поиск, не обязательно
// возвращает -1 если не было найдено совпадений
// console.log(email.lastIndexOf('@')) // 9
// console.log(email.lastIndexOf('!')) // -1

// const isAtExists = email.includes('@');
// const atPosition = email.indexOf('@');
// const isDotExists = email.includes('.', atPosition);

// if (isAtExists) {
//     const atPosition = email.indexOf('@');
//     const isDotExists = email.includes('.', atPosition);
//     if (isDotExists) {
//         console.log('ok');

//     }
// } else {
//     console.log('ne ok');
// }

// endsWith(value) - заканчивается ли строка значением
// startsWith(value) - начинается ли строка со значения
// Возвращают true/false

// console.log(testString.startsWith("!"));
// console.log(testString.endsWith("!"));

// search(value или регулярное выражение) => проверяет есть ли в строке value или регулярное выражение
// Возвращает индекс начала совпадения

// console.log(testString.search('world'));

// slice(start, end) => извлекает часть строки и возвращает новую
// start - индекс начала извлечения
// end - индекс конца извлечения
// без аргументов => извлекачется вся строка от начала до конца
// const res = testString.slice(5, 9);

// console.log(res);

// substring(start, end) => извлекает часть строки и возвращает новую

// console.log(testString.substring());
// console.log(testString.substring(5));
// console.log(testString.substring(5, 10));
// console.log(testString.substring(10, 5));

// substr(start, length) => извлекает часть строки указанной длины (length)

// console.log(testString.substr(4, 10));
// console.log(testString.substr(4));

// padEnd(number, СИМВОЛ) => добавляет в конец строки смиволы, по умолчанию - пробел
// padStart(number, СИМВОЛ) => добавляет в начало строки смиволы, по умолчанию - пробел

// console.log(testString.padEnd(22, "*"));
// console.log(testString.padStart(22, "*"));

// replace(ЧТО ИСКАТЬ, НА ЧТО ЗАМЕНИТЬ) => ищет ПЕРВОЕ совпадение и заменяет на "НА ЧТО ЗАМЕНИТЬ"
// replaceAll(ЧТО ИСКАТЬ, НА ЧТО ЗАМЕНИТЬ) => ищет ВСЕ совпадения и заменяет на "НА ЧТО ЗАМЕНИТЬ"

// console.log(testString.replace('world', 'city'));

// console.log(testString.replaceAll('l', '2'));
// console.log(testString.replace('l', '2'));

// repeat(number) => повторяет строку указанное количество раз

// console.log(testString.repeat(3));

// задача по циклам № 4
// const count = +prompt("Введите количество символов #");

// const sign = "#";

// console.log(sign.repeat(count));

// обрезают пробелы в строке
// trimEnd() => в конце строки
// trimStart() => в начале строки
// trim() => в конце и в начале

// const userName = prompt("Введите Ваше имя").trim().toUpperCase();
// // const userName = prompt("Введите Ваше имя")?.trim()?.toUpperCase();

// console.log(userName);
// console.log(userName.trim());

// const car = {
//     model: 'tesla',
//     engine: 'electric',
//     year: 2022,
// }

// car?.color

// String()
// toString()

// const num = 2;

// console.log(num.toString());

// // console.log([2] + [3]) => [2].toString() + [3].toString() => '2' + '3' => '23'
// console.log(2 + '3')

// // JSON
// console.log({a: 2} + {b: 3}) // => [objectObject]

// ----------------------------------------
// ЗАДАЧИ
// ----------------------------------------

// Запросить имя и фамилию и добавить * в начало и в конец строки
// Иванов Иван => *Иванов Иван*

// const userInfo = prompt('Введите имя и фамилию');

// console.log(userInfo.padEnd(userInfo.length + 1, '*'))
// console.log(userInfo.padStart(userInfo.length + 1, '*'))

// 1) Запросить 2 строки и сравнивнить их длину. Вывести 1, если в первой строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.

// const str1 = prompt("Строка 1");
// const str2 = prompt("Строка 2");

// if (str1.length > str2.length) {
//   console.log(1);
// } else if (str1.length < str2.length) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

// 2) Дана строка 'aaa@bbb@ccc'. Замените все @ на '!'

// const str = "aaa@bbb@ccc";

// console.log(str.replaceAll("@", "!"));

// 3) Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

// const str = 'я учу javascript!';
// const str2 = '';

// console.log(str.length)
// console.log(str2.length)

// if (str2.length) {
//     console.log('ok')
// } else {
//     alert('Введите что-нибудь')
// }

// 4) Перевернуть строку:
// 'JavaScript' => 'tpircSavaJ'
// Пример:
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// const str = 'JavaScript';
// let res = ''

// // console.log(str.split('').reverse().join(''))

// for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i];
// }

// console.log(res);

// 5) Запросить у пользователя ввести строку, посчитать сколько в этой строке заглавных букв.

// const str = 'JavaScriPt';

// let countUpperCaseLetters = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//         countUpperCaseLetters += 1;
//     }
// }

// console.log(countUpperCaseLetters);

// 6) Запросить у пользователя имя и фамилию, вывести в консоль fullName пользователя используя метод строк concat

// const userFirstName = prompt("Ваше имя").trim();
// const userLastName = prompt("Ваша фамилия").trim();

// console.log(userFirstName.concat(' ', userLastName));

// console.log(`${userFirstName} ${userLastName}`);

// console.log(userFirstName + ' ' + userLastName);

// 8) Написать программу, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.

// const num = 1357;
// let sum = 0;
// const numAsString = String(num);

// for (let i = 0; i < numAsString.length; i++) {
//   sum += Number(numAsString[i]);
// //   sum += +numAsString[i];
// }

// console.log(sum);

