// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// ## Example 2 - Комбіновані оператори

// Заміни вираз перевизначення комбінованим оператором `+=`.

// let students = 100;
// students += 50;
// console.log(students);

// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
//  значення змінної value. Використовуй методи Math.floor(), Math.ceil()
// та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.9;

// console.log(Math.floor(value));
// console.log(Math.round(value));
// console.log(Math.ceil(value));

// console.log(Math.round(Math.random() * 100));

// Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const totalBots = repairBots + defenceBots;
// const message = `${companyName} has ${totalBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = "88,3";
// let height = "1.75";

// weight = weight.replace(",", ".");
// height = height.replace(",", ".");

// const bmi = (weight / Math.pow(height, 2)).toFixed(1);
// console.log(bmi); // 28.8

// Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// Example 8 - Логічні оператори
// Яким буде результат виразів?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// Example 9 - Значення за замовчуванням та оператор нульового злиття
// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = undefined;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// Example 10 - Оператор % та методи рядків
// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01
// const totalMinutes = 120;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// Example 1 - Введення користувача та розгалуження
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва
// JavaScript?". Якщо користувач вводить
// ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// let quetion = prompt("Яка офіційна назва JavaScript?");

// if (quetion === "ECMAScript") {
// 	console.log("Правильно!");
// } else {
// 	console.log("Не знаєте? ECMAScript!");
// }

// quetion === "ECMAScript" ? console.log("Правильно!") : console.log("Не знаєте? ECMAScript!");

// Example 1.1 - Guess a Number ----

// let x = Math.round(Math.random() * 100 + 1);

// console.log(x);

// let userInput;

// do {
// 	userInput = Number(prompt("Enter number"));
// 	if (!userInput) {
// 		alert("vvedi chislo");
// 	} else if (userInput > x) {
// 		alert("Mnogo");
// 	} else if (userInput < x) {
// 		alert("malo vvedi bolshe");
// 	} else {
// 		alert("ugadal");
// 	}
// } while (x !== userInput);

//

// Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату
// "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.
const hours = 12;
const minutes = 40;
let time;

if (minutes == 0) {
	time = `${hours} god`;
} else {
	time = `${hours}god ${minutes}hv`;
}
console.log(time);
