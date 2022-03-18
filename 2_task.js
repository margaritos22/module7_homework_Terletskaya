//Задание 2.
//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const obj = {
  hello: "hello",
  age: 20,
}
const str = "hello";
const func = (str, obj) => (str in obj) ? true : false;
console.log(func(str,obj));