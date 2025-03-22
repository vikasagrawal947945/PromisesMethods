// Promise.allSettled()  it waits for each promise to be resolved  or rejected and return the array in which status of each promise is showing 
// or ✅ Sabhi promises settle hone ke baad ek array return karta hai (chahe resolve ho ya reject).
let p1 = new Promise((resolve) => setTimeout(() => resolve("✅ Task 1 done"), 2000));
let p2 = new Promise((reject) => setTimeout(() => reject("❌ Task 2 failed"), 1000));
let p3 = new Promise((resolve) => setTimeout(() => resolve("✅ Task 3 done"), 3000));

Promise.allSettled([p1, p2, p3]).then((results) => {
  console.log(results);
});
