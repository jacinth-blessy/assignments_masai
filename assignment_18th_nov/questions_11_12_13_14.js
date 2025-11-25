//question 11

let input = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]
function checkPrice(products) {
  return products.map(product => {
    if (product.price > 50) {
      return `${product.name} is above $50`;
    } else {
      return `${product.name} is below $50`;
    }
  });
}

const result = checkPrice(input);
result.forEach(message => console.log(message));


//question 12

let students = [
  { "name": "Alice", "marks": 58 },
  { "name": "Bob", "marks": 85 },
  { "name": "Charlie", "marks": 92 },
  { "name": "David", "marks": 45 },
  { "name": "Emma", "marks": 76 },
  { "name": "Frank", "marks": 63 },
  { "name": "Grace", "marks": 89 },
  { "name": "Hannah", "marks": 95 },
  { "name": "Ian", "marks": 54 },
  { "name": "Jack", "marks": 79 },
  { "name": "Kate", "marks": 67 },
  { "name": "Leo", "marks": 88 },
  { "name": "Mia", "marks": 91 },
  { "name": "Nathan", "marks": 72 },
  { "name": "Olivia", "marks": 82 }
]
function processStudents (students) {
    let passedStudents = students.filter(student => student.marks >= 60);
    let sortedStudents = passedStudents.sort((a, b) => b.marks - a.marks);
    return sortedStudents.map(student => `${student.name}`);
}   

const processedResults = processStudents(students);
console.log(processedResults) 


//question 13 : 

let categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
function countCategories(categories) {
  return categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
}

const categoryCounts = countCategories(categories);
console.log(categoryCounts);
console.log(Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]))



//question 14 :

let employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

function evaluateEmployees(employees) {
  const performanceOrder = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 };
    return employees
    .filter(employee => employee.tasksCompleted > 5)
    .map(employee => {
      let performance; 
        if (employee.rating > 4.5) {
            performance = "Excellent";
        } else if (employee.rating >= 3 && employee.rating <= 4.5) {
            performance = "Good";
        }     else {
            performance = "Needs Improvement";
        }
        return { name: employee.name, performance };
    })
    .sort((a, b) => performanceOrder[b.performance] - performanceOrder[a.performance]);
}      
const evaluatedEmployees = evaluateEmployees(employees);
console.log(evaluatedEmployees);   
    


