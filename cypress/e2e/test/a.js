//Write  a program to reverse  a string
function isreverse(str){
    return str.split('').reverse().join('');
}
console.log(isreverse('Hello'));

// Write a prograam to find a string is Pallindrome

function pallindrome(str) {

let reversed = str.split("").reverse('').join("");
 return reversed === str; 
}
console.log(pallindrome('radar'));

// Write a program to find largest number in array
function largst(num) {
    return Math.max(...num);
}
console.log(largst([12,34,4,2]));

//Remove duplicates from an array
function duplicate(num){
    return [...new Set(num)];
}
console.log(duplicate([23,23,1,4,4,5,3]));

//check for prime number
function prime(num) {
    if(num <= 1)
return false;
for(let i= 2; i<=Math.sqrt(num); i++)    {
    if (num %i === 0)return false;
}
return true
}
console.log(prime(11));

//1. push
let abc=[1,2,2,4,4,5]
abc.push('6',7);
console.log(abc);

//2/push()
let lang= ["HTML","Ruby"]
lang.push('Java')
console.log(lang)

//3.shift means to temove an array from beginning
let fruits = ["Apple","banana","quava"]
let newfruits=fruits.shift("reddish")
console.log(newfruits)
console.log(fruits)

//4. Unshift 

let colors=['red','blue','pink']
let newcolors= colors.unshift("Neela")
console.log(newcolors)
console.log(colors)
console.log(typeof(colors))

//splice
let animals=['cat','dog','rat']
animals.splice(1,1,'bear')

console.log(animals)
animals.splice(1,2,"elephant")
console.log(animals)
//slice
let pop=[1,3,4,5,6]

let newpop= pop.slice(1,4)
console.log(newpop)

//concat function-
let fr=['apple','banana','grape']
let  num=[1,2,3,45,]
let mixed = fr.concat(num)
console.log(mixed)
//indexof
let color =['red','blue','green','red']
let indexed= color.indexOf('blue')
console.log(indexed)
//2nd red index of
color.indexOf('red',2)
console.log(indexed)

// 