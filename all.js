// Promise.all([...])	✅ Sabhi promises resolve hone par ek array return karta hai, ek bhi fail hua to reject ho jata hai.

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

