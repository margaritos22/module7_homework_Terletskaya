//Задание 5.
//Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalDevice {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isConnected = false;
  }
  //Мощность прибора
  getPower(){
    console.log(`${this.name}, мощность равна ${this.power} Вт`);
  }
  //прибор включен
  connectedOn(){
    console.log(`${this.name} вкл`);
    this.isConnected = true;
  }
  //прибор выключен
  connectedOff(){
    console.log(`${this.name} выкл`);
    this.isConnected = false;
  }
}
//настольная лампа
class Lamp extends ElectricalDevice {
  constructor(name, brand, bulb, power, color, material){
    super(name, power);
    this.brand = brand;
    this.bulb = bulb;
    this.color = color;
    this.material = material;
    this.isConnected = true;
  }
}
//компьютер
class Computer extends ElectricalDevice {
  constructor(name, brand, power, color, screenSize, specifications){
    super(name, power);
    this.power = power;
    this.color = color;
    this.screenSize = screenSize;
    this.specifications = specifications;
    this.isConnected = true;
  }
}
//утюг
class Iron extends ElectricalDevice{
  constructor(name, brand, power, color, coating, selfClean, nonStick){
    super(name, power);
    this.brand = brand;
    this.color = color;
    this.coating = coating;
    this.selfClean = selfClean;
    this.nonStick = nonStick;
    this.isConnected = false;
  }
}
//электрический чайник
class Kettle extends ElectricalDevice{
  constructor(name, brand, power, volume, materialFrame, noise, backlight){
    super(name, power);
    this.brand = brand;
    this.volume = volume;
    this.materialFrame = materialFrame;
    this.noise = noise;
    this.backlight = backlight;
    this.isConnected = false;
  }
}

//приборы
const lampEx = new Lamp("Светодиодная настольная лампа", "ЭРА", "Светодиодная лампа", 8, "черный", "Пластик");
const computerEx = new Computer('Ноутбук', 'ASUS', 65, 'серый', 15.6, '4ГБ оперативка, intel core i3');
const ironEx = new Iron('Паровой утюг', 'Braun', 2400, 'серый', 'керамическое', 'самоочистка есть', 'антипригарное покрытие');
const kettleEx = new Kettle('Эл.чайник', 'Scarlett', 1350, 1.5, 'Металл', 'бесшумный', 'без подсветки');

lampEx.connectedOff();
lampEx.getPower();
console.log(lampEx);

computerEx.connectedOff();
computerEx.getPower();
console.log(computerEx);

ironEx.connectedOn();
ironEx.getPower();
console.log(ironEx);

kettleEx.connectedOn();
kettleEx.getPower();
console.log(kettleEx);

