
const a = 5;     // number
const b = "2";   // text

const myName = "harin";  // camelCase

const c = 20;   // const : default
let d = 10;     // let can change(const cannot change)
d = 12;

var e = 0;      // var(old version)

console.log(a+b);
console.log("HEllo " + myName);
console.log(d + 2);

//bool
const amIFat = true;
console.log(amIFat);

//null
const friend = null; // not false(just empty on purpose)
console.log(friend);

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

console.log(daysOfWeek);
console.log(nonsense);

daysOfWeek.push("oneMoreDay");

console.log(daysOfWeek);

// object
const player = {   // 여기서는 object 가 const  그 안에 하나 하나 바꾸는 건 상관x
    name : "h", 
    points : 121212, 
    handsome : true, 
    fat : "little bit"
}

console.log(player);
console.log(player.fat);
console.log(player["name"]);

player.fat = false;  // 그 안의 값을 바꾸는건 가능 
console.log(player.fat);

player.lastName = "potato"; // 새로운 항목 추가도 가능 
console.log(player);

