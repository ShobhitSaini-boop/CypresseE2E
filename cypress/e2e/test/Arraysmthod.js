//1. map
let numbers =[1,2,3,4]
let doublenumber=numbers.map((e)=> e*2 )
console.log(doublenumber)

// F->C
let fahTemp = [32,68,87,104,212] ;
 function fahToCel(fah){
    return(fah-32)*(5/9)
 }
 let celTemp = fahTemp.map(fahToCel)
 console.log(celTemp);
// filter 
let num=[1,2,3,4,5,6,8] ;
let evennum = num.filter((e)=> e % 2===0) ;
console.log(evennum);

let emp=[
    {name : "john",age : 45, gender : "male"},
    {name : "bob",age : 35, gender : "female"},
    {name : "jean",age : 25, gender : "female"},
    {name : "jeena",age : 15, gender : "male"}
]

//templte literals

let name= "rahul"
 let ages = "32"
 console.log(`His name is ${name} and his age is ${ages}`)

 //a multiline
 let para = `My name is rahul
              and my profession is software Enginneer
              and i want to prefect in this area.`
              console.log(para)
   // 

