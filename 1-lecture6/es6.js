// var x=15;
// {
//   let x=5;
//   console.log(x);
// }
// console.log(x);

// var x=15;
// {
//    const x=5;
//   console.log(x);
//   x=6;
//   console.log(x);
// }
// console.log(x);

// var x= function(x,y){
//   return x+y;
// };

// const x=(x,y) => {
//   return x +y;
// };

// console.log(x(5,6));

// const x=(x,y) => x+y;
// console.log(x(5,6));

// const q1 = ["Jan","feb","Mar"]
// const q2 = ["apr","May","Jun"]
// const q3 = ["Jul","Aug","Sep"]
// const q4 = ["Oct","Nov","Dec"]

// const year= [...q1,...q2 ,...q3 ,...q4];
// console.log(year);

// const myNumbers = [25,12,50,77 , -1];
// // let maxValue = Math.max(...myNumbers);

// // console.log(maxValue);

// let sum = 0;
// for(let num of myNumbers){
//   sum=sum+num;
// }
// console.log(sum);

// const name= "CipherSchools";


// let text = "";
// for(let ch of name){
//   text=text+ch+" ";
// }
// console.log(text);

// const fruits = new Map([
//   ["apples",500],["bananas",300],["oranges",200]]);
// console.log(fruits);
// console.log(fruits.get("oranges"));

// const letters = new Set();
// letters.add("a");
// letters.add("b");
// letters.add("a");

// console.log(letters);

// class Car{
//   constructor(name,mfgYear){
//     this.name = name;
//     this.mfgYear =mfgYear;
//   }
// }

// const myCar1 = new Car("Mercedes",2022);
// const myCar2 = new Car("Porsche",2020);
// console.group(myCar1,myCar2);

// const myFunction = () => {
//   return myPromise = new Promise((resolve, reject) => {
//   setTimeout(()=>
//   {
//     console.log("This is Inside Promise");
//     reject,();
//   }, 2000);
//   });
// };

// myFunction()
// .then(() => {
//   console.log("Resolved");
// })
// .catch(() =>{
//   console.log("Rejected");
// });

// const person ={
//   firstName : "John",
//   lastName:"Doe",
//   age: 30,
//   eyeColor: "Blue",
// };

// let id=Symbol("id");
// person[id]=140111;

// console.log(person);

// const addNumbers =(a,b=10)=> a+b;

// console.log(addNumbers(10));

// const addNumbers =(...args)=> {
//   console.log(args);
// }

// console.log(addNumbers(10,20,1,26,80,7678));

const addNumbers =(...args)=> {
  let sum=0;
  for(let arg of args){
    sum += arg;
  }
  return sum;
};

console.log(addNumbers(10,20,1,26,80,7678));