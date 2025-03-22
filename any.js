// Promise.any([...])	Returns the first fulfilled promise (ignores rejections).
 // return the  promise which fullfiled first .. rejected ignored
let p1 = new Promise((resolved,rejeced )=> setTimeout(() => resolved("🍕 Pizza"), 3000));
let p2 = new Promise((resolved, rejected)=> setTimeout(() => rejected("🍔 Burger"), 2000));
let p3 = new Promise((resolved ,rejected)=> setTimeout(() => resolved("hotdog"), 1500));

Promise.any([p1, p2, p3]).then(console.log)
.catch((err)=>{
     console.log(err);
 });  
 // see here we are using any method it take array of promises and return those promise which are resolved
 // 2 reject ho rahe hai  burger and hotdog wale