
const a = 5;     // number
const b = "2";   // text

const myName = "harin";  // camelCase

const c = 20;   // const : default
let d = 10;     // let can change(const cannot change)
d = 12;

var e = 0;      // var(old version)

//console.log(a+b);
//console.log("HEllo " + myName);
//console.log(d + 2);

//bool
const amIFat = true;
//console.log(amIFat);

//null
const friend = null; // not false(just empty on purpose)
//console.log(friend);

//array
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
const nonsense = [1, 2, "hello", false, null, true, undefined];

//console.log(daysOfWeek);
//console.log(nonsense);

daysOfWeek.push("oneMoreDay");

//console.log(daysOfWeek);

// object
const player = {   // 여기서는 object 가 const  그 안에 하나 하나 바꾸는 건 상관x
    name : "h", 
    points : 121212, 
    handsome : true, 
    fat : "little bit", 
    sayHello : function(otherPersonsName) {
        console.log("Hello! " + otherPersonsName + " nice to meet you");
    }
}

//console.log(player);
//console.log(player.fat);
//console.log(player["name"]);

player.fat = false;  // 그 안의 값을 바꾸는건 가능 
//console.log(player.fat);

player.lastName = "potato"; // 새로운 항목 추가도 가능 
//console.log(player);

// function
function sayHello(name, age) {
    console.log(name);
    console.log(age);
}

//sayHello("a", 10);
//sayHello("harin", 30);
//sayHello("lynn", 100);

function plus(a, b) {
    console.log(a+b);
}
//plus(1, 10);

//player.sayHello("lynn");

const calculator = {
    plus : function(a, b)
    {
        console.log(a+b);
    },
    minus : function(a, b)
    {
        console.log(a-b);
    },
    multiple : function(a, b)
    {
        console.log(a*b);
    },
    devide : function(a, b)
    {
        console.log(a/b);
    },
    square : function(a, b)
    {
        console.log(a**b);
    }
}

//calculator.plus(10,2);
//calculator.minus(10,2);
//calculator.devide(10,2);
//calculator.multiple(10,2);
//calculator.square(10,2);

function calculateKrAge(age){
    return age +2;
}

console.log(calculateKrAge(12));

//const age = prompt("How old are you?");
//console.log(typeof age);

//console.log(typeof age, typeof parseInt(age));
//console.log(age, parseInt(age));

const age1 = parseInt(prompt("Age ?"));

if(isNaN(age1) || age1 < 0){
    console.log("Please write a valid number");
} else if(age1 < 18) {
    console.log("You are too young")
} else {
    console.log("You can drink!")
}
