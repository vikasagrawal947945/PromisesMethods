// JavaScript Promises – Explained Simply
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation. It allows you to handle asynchronous code without callback hell.

// 1️⃣ Basic Syntax
// A Promise has three states:

// Pending → Initial state, operation not yet completed.
// Fulfilled → Operation completed successfully.
// Rejected → Operation failed.
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true; // Change to false to test rejection
        if (success) {
            resolve("✅ Promise Resolved!");
        } else {
            reject("❌ Promise Rejected!");
        }
    }, 2000);
});
myPromise
    .then(response => console.log(response))  // Runs if resolved
    .catch(error => console.log(error))       // Runs if rejected
    .finally(() => console.log("🎉 Promise completed"));
