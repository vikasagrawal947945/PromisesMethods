// Promise.allSettled() sabhi promises ke complete hone ka wait karta hai, chahe koi fail ho ya success ho, aur ek array return karta hai jo har promise ka status batata hai.
// or ✅ Sabhi promises settle hone ke baad ek array return karta hai (chahe resolve ho ya reject).
let p1 = new Promise((resolve) => setTimeout(() => resolve("✅ Task 1 done"), 2000));
let p2 = new Promise((reject) => setTimeout(() => reject("❌ Task 2 failed"), 1000));
let p3 = new Promise((resolve) => setTimeout(() => resolve("✅ Task 3 done"), 3000));

Promise.allSettled([p1, p2, p3]).then((results) => {
  console.log(results);
});
