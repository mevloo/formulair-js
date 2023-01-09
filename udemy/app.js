const obj ={
    test1:function(){
        console.log("Test 1");

    },
    test2:function(){
        console.log("Test 2");
    }
}
console.log(obj);


const emp =Object.create(obj);

console.log(emp);



function Person(){

}
Person.prototype.test1 = function(){
    console.log("Test 1");
    
}
Person.prototype.test1 = function(){
    console.log("Test 1");

}
function Employee(name,age){
    this.name = name;
    this.age =age;
}

Employee.prototype = Object.create(Person.prototype)
const emp = new Employee("mustafa ", 25);
console.log(emp);

// call apply , bind

const Obj ={
    number1: 10,
    number2:20
};
const Obj ={
    number1: 30,
    number2:40
};
function addNumbers(number3,number4){
    console.log(this.number1 + this.number2+ number3 + number4);

}
// addNumbers(100,200);



// kalitim Inheritance

function Person(name,age){  
this.name =name;
this.age =age;
}

Person.prototype.showInfos = function(){
    console.log("isim "+ this.name +" yas : "+ this.age);

}

function Employee(name,age,salary){
    this.name = name;
    this.age=age;
    this.salary =salary;


}
Employee.prototype = Object.create(Person.prototype);
const emp =new Employee("mustafa",25,4000);

console.log(emp);


emp.showInfos();

emp.toString

function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.prototype=salary;

}
Employee.prototype.showInfos = function(){
    console.log("isim" + this.name + "yas" + this.age + "Maas: ")
}

}