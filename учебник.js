let str = 'my-short-string';
function camelize(str){
   return str
       .split('-')
       .map(
           (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
       .join('');
}


console.log(camelize(str));
console.log('---')


function filterRange(arr, a, b){
   return arr.filter(item => (item >= a && item <= b));
}

let arr2 = [5, 3, 8, 1];
console.log(filterRange(arr2, 1, 4))


function filterRangeInPlace(arr, a, b){
   for (let i = 0; i <= arr.length; i++){
      if (!(arr[i] >= a && arr[i] <= b)){
         arr.splice(i, 1);
      }
   }
}

filterRangeInPlace(arr2, 1, 4);
console.log(arr2);


function sort(arr){
   return arr.sort(function (a, b){
      return b-a;
   })
}


let arr4 = [5, 2, 1, -10, 8];
console.log(sort(arr4));


function copySorted(arr){
   let arr1 = arr.slice(0, arr.length).sort();
   return arr1;
}

let arr5 = ["HTML", "JavaScript", "CSS"];
console.log(copySorted(arr5));
console.log(arr5);


function calculate(str){
   let arr = str.split(' ');

   if (arr[1] == '+'){
      return +arr[0] + +arr[2];
   }
   if (arr[1] == '-'){
      return +arr[0] - +arr[2];
   }
}

console.log(calculate('1 + 2'));




/* let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
       fullName: `${user.name}` + ' ' + `${user.surname}`,
       id: `${user.id}`
    }
));
console.log(usersMapped)


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr6 = [ vasya, petya, masha ];

 function sortByAge(a, b){
  if (a.age > b.age)
     return 1;
     if (a.age < b.age) return -1;

}

console.log(arr6.sort((a, b) => a.age > b.age ? 1 : -1)); */


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr7 = [ vasya, petya, masha ];

function getAverageAge(arr){
   let result = arr.reduce((sum, num) => sum + num.age, 0);
   return result/arr.length;
}

console.log(getAverageAge(arr7));


// function unique(arr) {
//    for (let i = 0; i < arr.length; i++){
//       if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
//          arr.splice(i, 1);
//          i--;
//       }
//    }
//    return arr;
// }
//
// let strings = ["кришна", "кришна", "харе", "харе",
//    "харе", "харе", "кришна", "кришна", ":-O"
// ];

//console.log(unique(strings));


let users = [
   {id: 'john', name: "John Smith", age: 20},
   {id: 'ann', name: "Ann Smith", age: 24},
   {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr){
   let arr1= [];
   for (let i = 0; i < arr.length; i++){
      arr1.push()
   }
}



function unique(arr) {
   let result = new Set();
      for (let val of arr){
         result.add(val);

   }
   return Array.from(result);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
   "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(values));



let arr8 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr){
   let map = new Map();
  for (let val of arr){
     let sort = val.toLowerCase().split('').sort().join('');
     map.set(sort, val);
  }
  return Array.from(map.values())
}

console.log(aclean(arr8));


let map = new Map();

map.set("name", "John");

let keys = map.keys();
console.log(keys);
let array = Array.from(keys);

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
array.push("more");
console.log(array)


let user2O = {
   name: 'John',
   age: 30
};


function count(obj){
   return Object.values(obj).length;
}
console.log(count(user2O));


let userDp = {
   name: "John",
   years: 30
};

let {name, years: age, isAdmin = false} = userDp;
console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false


let date1 = new Date(2012, 1, 20, 7, 12);
console.log(date1);

let date11 = new Date();
date11.setFullYear(2021, 1, 20);
date11.setUTCHours(3,12);
console.log(date11);

function getWeekDay(date){
   switch (date.getDay()){
      case 0: return 'Вс';
      break;
      case 1: return 'Пн';
         break;
      case 2: return 'Вт';
         break;
      case 3: return 'Ср';
         break;
      case 4: return 'Чт';
         break;
      case 5: return 'Пт';
         break;
      case 6: return 'Сб';
         break;

   }
}
let date2 = new Date(2012, 0, 8);  // 3 января 2012 года
console.log( getWeekDay(date2) );

function getLocalDay(date){
   if (date.getDay() == 0)
      return 7;
   return date.getDay();
}
console.log(getLocalDay(date2));


function getDateAgo(date, days){
   let dateCopy = new Date(date);

   dateCopy.setDate(date.getDate() - days);
   return dateCopy.getDate();
};

let date4 = new Date(2015, 0, 2);

console.log( getDateAgo(date4, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date4, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date4, 365) ); // 2, (2 Jan 2014)


function getLastDayOfMonth(year, month){
   let date = new Date(year, month);
   date.setMonth(date.getMonth()+1);
   date.setDate(1);
   date.setDate(date.getDate() - 1);

   return date.getDate();

}
console.log(getLastDayOfMonth(2012, 1));


function getSecondsToday(){
   let date = new Date();
   return  date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
};

console.log(getSecondsToday());


function getSecondsToTomorrow(){
   let now = new Date();
   let tomor = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
   return (tomor - now)/1000;
}
console.log(getSecondsToTomorrow())


