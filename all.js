// Promise.all([...])	 takes an array of promise and return result in the form of array when each promsie is resolved .if any promises failed the  it rejected it

let p1 = new Promise((resolved,rejeced )=> setTimeout(() => resolved("🍕 Pizza"), 3000));
let p2 = new Promise((resolved, rejected)=> setTimeout(() => resolved("🍔 Burger"), 2000));
let p3 = new Promise((resolved ,rejected)=> setTimeout(() => resolved("hotdog"), 4000));

Promise.all([p1, p2, p3]).then(console.log)
.catch((err)=>{
     console.log(err);
 }); //or
// Promise.all([p1, p2, p3]).then((values)=>values.forEach((value)=>{
//     console.log(value);
// }))
// .catch((err)=>{
//     console.log(err);
// });

