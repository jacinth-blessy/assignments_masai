
//question 11 : Synchronous Code Execution
function synchronousTasks() {
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
}
synchronousTasks();


//question 12 : Asynchronous Code Execution

console.log("Message 1");

setTimeout(() => {
  console.log("Message 2 after 2 seconds");
}, 2000);

console.log("Message 3");

//question 13 
const loadingInterval = setInterval(() => {
  console.log("Loading...");
}, 1000);

setTimeout(() => {
  clearInterval(loadingInterval);
  console.log("Loaded successfully!");
}, 5000);   



//question 14

console.log("Begin");

setTimeout(() => {
  console.log("Timeout Task");
}, 0);  
Promise.resolve().then(() => {
    console.log("Promise Task");
    });
console.log("End"); 

// Explanation: 
// 1. "Begin" is logged first because it's a synchronous operation.
// 2. "End" is logged next for the same reason.
// 3. The Promise's .then() callback is placed in the microtask queue, which has higher priority than the macrotask queue (where setTimeout callbacks go). Therefore, "Promise Task" is logged next.
// 4. Finally, the setTimeout callback is executed, logging "Timeout Task". 