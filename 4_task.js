//Задание 4.
//Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
//Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalDevice(name, power) {
  this.name = name;
  this.power = power;
  this.isConnected = false;
}
//Мощность прибора
ElectricalDevice.prototype.getPower = function() {
  console.log(`${this.name}, мощность равна ${this.power} Вт`);
}
//прибор включен
ElectricalDevice.prototype.connectedOn = function() {
  console.log(`${this.name} вкл`);
  this.isConnected = true;
}
//прибор выключен
ElectricalDevice.prototype.connectedOff = function() {
  console.log(`${this.name} выкл`);
  this.isConnected = false;
}
//настольная лампа
function Lamp(name, brand, bulb, power, color, material) {
  this.name = name;
  this.brand = brand;
  this.bulb = bulb;
  this.power = power;
  this.color = color;
  this.material = material;
}
Lamp.prototype = new ElectricalDevice();

//компьютер
function Computer(name, brand, power, color, screenSize, specifications) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.color = color;
  this.screenSize = screenSize;
  this.specifications = specifications;
}
Computer.prototype = new ElectricalDevice();

//утюг
function Iron(name, brand, power, color, coating, selfClean, nonStick) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.color = color;
  this.coating = coating;
  this.selfClean = selfClean;
  this.nonStick = nonStick;
}
Iron.prototype = new ElectricalDevice();

//электрический чайник
function Kettle(name, brand, power, volume, materialFrame, noise, backlight) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.volume = volume;
  this.materialFrame = materialFrame;
  this.noise = noise;
  this.backlight = backlight;
}
Kettle.prototype = new ElectricalDevice();

//приборы
const LampEx = new Lamp("Светодиодная настольная лампа", "ЭРА", "Светодиодная лампа", 8, "черный", "Пластик");
const ComputerEx = new Computer('Ноутбук', 'ASUS', 65, 'серый', 15.6, '4ГБ оперативка, intel core i3');
const IronEx = new Iron('Паровой утюг', 'Braun', 2400, 'серый', 'керамическое', 'самоочистка есть', 'антипригарное покрытие');
const KettleEx = new Kettle('Эл.чайник', 'Scarlett', 1350, 1.5, 'Металл', 'бесшумный', 'без подсветки');

//работа с приборами
LampEx.getPower();
ComputerEx.getPower();
IronEx.getPower();
KettleEx.getPower();

LampEx.connectedOn();
ComputerEx.connectedOff();
IronEx.connectedOn();
KettleEx.connectedOff();

