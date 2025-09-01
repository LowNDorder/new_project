

// var
let days = 365;
let planet = 'Земля';
let population = 7e9;
let star = 'Солнце';

console.log("В нашем году", days, "дней. Днём у нас светит", star, ". Население планеты", planet, "составляет примерно", population, "человек.");

// condition op
let a = 1
let b = 15
if(a > 2 && a < 11 || b >= 6 && b < 14)
    console.log('True')
else
    console.log('False') 


// Cicles
let n = 1000
let temp
let num = 0
temp = n

while(temp >=50) {
    n /=2;
    temp = n;
    ++num;
}

console.log(num, temp)

// arrays

let m = 10
let arNum;
// let arNum1; 
// let res;
let array = [1];

for(let i = 1; i < m; ++i) {
    arNum = Math.floor(Math.pow(10, i) / 9 * i);
  //  arNum1 = arNum / 9;
   // res = Math.floor(arNum1) * i;
array.push(arNum);
console.log(array[i]);
}

// array reverse

let intAr = [];
let revAr = [];

for (i = 0; i < m; ++i) {
    intAr.push(i);
    revAr.unshift(i);
}
console.log(intAr, revAr);

let backRevAr = [];

for (i = revAr.length - 1; i >= 0; --i) {
    backRevAr.push(revAr[i]);
}
console.log(backRevAr);