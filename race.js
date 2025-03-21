// Promise.race([...])	Returns the first promise that resolves/rejects.

let p1 = new Promise((resolved,rejeced )=> setTimeout(() => resolved("🍕 Pizza"), 3000));
let p2 = new Promise((resolved, rejected)=> setTimeout(() => resolved("🍔 Burger"), 2000));
let p3 = new Promise((resolved ,rejected)=> setTimeout(() => resolved("hotdog"), 4000));

Promise.race([p1, p2, p3]).then(console.log)
.catch((err)=>{
     console.log(err);
 }); 
 // rece function of promise take an array of promises  and return only those promise jo sbse pahle resolve ya reject huya ho upper wale code pe hame burger millega out put pe....

 // niche wale code pe sbse pahle promise reject ho raha hai to  hame catch block pe hotdog Unavilable millega
 let p4 = new Promise((resolved,rejeced )=> setTimeout(() => resolved("🍕 Pizza"), 3000));
let p5 = new Promise((resolved, rejected)=> setTimeout(() => resolved("🍔 Burger"), 2000));
let p6 = new Promise((resolved ,rejected)=> setTimeout(() => rejected("hotdog unvaliable"), 1000));

Promise.race([p4, p5, p6]).then(console.log)
.catch((err)=>{
     console.log(err);
 });
