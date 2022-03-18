//Задание 1.
//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const obj = {
  name: 'Margarita',
  age: 20,
}
function func(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key} = ${obj[key]}`)
    }
  }
}

func(obj);