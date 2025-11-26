

//question 19 


let age = 25;   
function displayAge() {
    console.log(`Age: ${age}`);
}
function changeAge(newAge) {
    age = newAge; 
    console.log(`Age updated to: ${age}`);
}   
displayAge(); 
changeAge(30);
displayAge(); 





//question 20 : question 1

function createCounter() {
    let count = 0; // private variable              
    return {
        increment: function() {
            count++;
            console.log(`Current count: ${count}`);
        },
        decrement: function() {
            count--;        
            console.log(`Current count: ${count}`);
        }   
    };
}   
// Explanation of Closures:
// In this implementation, the createCounter function defines a private variable count that is not accessible from outside the function. 
// The returned object contains two methods, increment and decrement, which form closures over the count variable. 
// This means that these methods retain access to the count variable even after createCounter has finished executing. 
// As a result, the count variable is encapsulated within the scope of createCounter, preventing direct external manipulation.  

// Example of multiple counters:
const counter1 = createCounter();
counter1.increment(); 
counter1.increment();       
const counter2 = createCounter();
counter2.decrement();
counter1.decrement();  
// Each call to createCounter creates a new instance of the counter with its own separate count variable.



//question 20 : question 2"
function createBankAccount() {
    let balance = 0;            
    let transactionHistory = [];
    return {
        deposit: function(amount) {
            balance += amount;
            transactionHistory.push(`Deposited: ${amount}`);
            console.log(`Deposited: ${amount}`);
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                transactionHistory.push(`Withdrawn: ${amount}`);
                console.log(`Withdrawn: ${amount}`);
            }
            else {
                console.log("Insufficient balance");
            }
        },
        getBalance: function() {
            console.log(`Current balance: ${balance}`); 
        },
        getTransactionHistory: function() {
            console.log("Transaction History:");    
            transactionHistory.forEach(transaction => console.log(transaction));
        }   
    };
}

// Explanation of Closures:
// In this implementation, the createBankAccount function defines a private variable balance and transactionHistory that are not accessible from outside the function. 
// The returned object contains methods deposit, withdraw, getBalance, and getTransactionHistory, which form closures over the balance and transactionHistory variables. 
// This means that these methods retain access to these variables even after createBankAccount has finished executing. 
// As a result, the balance and transactionHistory variables are encapsulated within the scope of createBankAccount, preventing direct external manipulation.