//  Работа с файлами

const fs = require('fs');
const path = require('path');
// Чтение файла
// Первый вариант. Ассинхронное чтение
// fs.readFile('./one/t1.txt', 'utf-8', (err, data) => {
//   console.log(data + '111');
// });
// console.log('===================');
// Второй  вариант. Синхронное чтение
let text = fs.readFileSync('./one/t1.txt', 'utf-8');
console.log(text);
console.log('-----------------');

// Чтение папки
fs.readdir('one', 'utf-8', (err, data) => {
  console.log(data);
  console.log(typeof data);
  data.forEach((file) => {
    console.log(file + '  ' + path.extname(file)); // Вывод расширенмия файла
    console.dir(fs.statSync('one/' + file).size); // Вывод разменра файла
  });
});
// Запись файла
fs.writeFile('./one/newfile.txt', 'bla bla bla', (err) => {
  if (err) console.log(err);
});

// Параметры запуска приложения
// arg = process.argv;
// const b = +arg[2];
// const a = typeof b;
// console.log(a);
