alert("Задумайте число");
alert("Умножте данное число на 2");
alert("прибате к этому числу 7");
let chislo = prompt("ввидите Результат");
let chislon = chislo - 7;
alert(chislon);
let CHISlo = chislon / 2;
alert(CHISlo);

//  console.log(1<2)
// console.log(1!=2)
// console.log("">2)
// console.log("кот">"код")
//  let result = 5 >4
//  console.log(result)
// console.log("Собака"> "кошка")
// let name ="Misha"
// let Name = "Oksana"
// console.log(Name)
// // const name1 ="Stalin"
// // console.log(name1)
// // console.log(name)

// let admin, username
//  admin="Alex"
//  username=admin
// console.log(username)
//  let friend="Slava"
//  bestfriend=friend
//  console.log(bestfriend)

// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!

//
// Перепишите конструкцию if с использованием условного оператора '?':

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// let result=(a+b<4)?  'Мало' :  'Много';

// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
let message =
  login == "Cотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здраствуйте"
    : login == ""
    ? "Нет логина"
    : "";
