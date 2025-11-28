//question 11 :

function displayMessage(name) {
  console.log(`Hello, ${name}!`);
}   
function getUserInput(callback) {
    setTimeout(() => {  
        const username = "Alice";
        callback(username);
    }, 1000);
}
getUserInput(displayMessage);


//queston 12 : 

function timer(duration, onComplete) {
    setTimeout(() => {
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);   
}

timer(2000, (message) => {
    console.log(message);
}); 
