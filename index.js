//Массивы
//  function Phone(model, manufacturer, year, price ){
//      this.model = model;
//      this.manufacturer = manufacturer;
//      this.year = year;
//      this.price = price;
//      this.call = function(){
//          return 'Я умею звонить'
//      }
//  }

//  const phone1 = new Phone('X', 'Iphine', 2018, 9999);
//  const phone2 = new Phone('Galaxy X', 'Samsung', 2016, 99999);

//  const arr1 = [1,2,3,4];
//  const arr2 = ['t','e','s','t'];


 // прототипы

/* Без протатипа
 const obj1 = {
     name:'Test',
     lastName:'Testivich',
     greet: function(){
         `Hallo ${this.name} ${this.lastName}`
     }
 }

 const obj2 = {
    name:'Null',
    lastName:'Nullenko',
    greet: function(){
        `Hallo ${this.name} ${this.lastName}`
    }
}
*/
// С прототипом
// Прототип записан в 
// obj1.__proto__ = prototype;
// у каждого object может быть только 1 прототип, либо сделать подвязку(каждый модер умеет то что и user, а каждый админ может все что модер) пример ниже '3'
// const prototype = {
//     greet : function (){
//         `Hallo ${this.name} ${this.lastName}`
//     },
//     endCall: function(){
//         return `You call ended`;
//     },
//     password:1234
// }

// const obj1 = {
//     name:'Test',
//     lastName:'Testivich',
//     password:54321
// }
// obj1.__proto__ = prototype;


// const obj2 = {
//     name:'Null',
//     lastName:'Nullenko',
//     __proto__: prototype
// }


/*3

const userProto = {
write: function(){},

}

const moderProto = {
    write: function(){},
    __proto__:userProto
}

const adminProto = {
    write: function() {},
    __proto__:moderProto
}

const user1 = {
    name: 'user',
    __proto__:userProto
}

const user2 = {
    name: 'moder',
    __proto__: moderProto
}

const user3 = {
    name: 'admin',
    __proto__:adminProto
}

обычно так не делают ↑ */


// const phonePrototype = new PhonePrototype();
//  function Phone(model, manufacturer, year, price ){
//      this.model = model;
//      this.manufacturer = manufacturer;
//      this.year = year;
//      this.price = price;
//     //  this.__proto__=phonePrototype;
//  }

//  function PhonePrototype(){
//      this.call = function(){
//          return 'you can call abonents'
//      }

//      this.endCall = function(){
//          return 'Call ended'
//      }
//  }

// const phonePrototype = new PhonePrototype();

// Phone.prototype = phonePrototype;

//  const phone1 = new Phone('X', 'Iphine', 2018, 9999);
//  const phone2 = new Phone('Galaxy X', 'Samsung', 2016, 99999);





 // задание на паре

 function Car(marka,model, godWupuska,cwet, rasxodTopliva, objemBaka, startSpeed, maxSpeed, stop, toBrake){
this.marka = marka;
this.model = model;
this.godWupuska = godWupuska;
this. cwet = cwet;
this.rasxodTopliva = rasxodTopliva;
this.objemBaka = objemBaka;
this.startSpeed = startSpeed;
this.maxSpeed = maxSpeed;
this.stop = stop;
this.toBrake = toBrake;
this.getDriveDistant = function(){
    return this.rasxodTopliva * this.objemBaka;
}
}

function CarPrototype(){
    this.rasgon = function(){
        if(this.startSpeed < this.maxSpeed){
        return (this.startSpeed += 10) 
    }else{
        return this.startSpeed    }
}

    this.brake = function(){
        if(this.startSpeed > 10){
        return (this.startSpeed -= 10) 
    }else{
        return 'speed cannot be less than 0'
    }
}

this.stope = function(){
    return 0;
}
}

const rasgon = new CarPrototype();
Car.prototype = rasgon;

const car1 = new Car('Audi','A6', 2015, 'Grey', 8.3, 60, 0, 250, 'Stop', 10);