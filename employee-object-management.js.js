// Firstly create a Singleton Object
let employeeInfo = new Object() 

// Add Properties
employeeInfo.name = "Mayur Shahani"
employeeInfo.department = " Computer Science "
employeeInfo.age = 20

// Create Symbol and Assign Value
let employeeCode = Symbol("WMP1234")

// Add Adress In employeeInfo Object
employeeInfo.address = {
    city: "Karachi",
    zip: 71000
}

// Freeze The Object
let freezedObj = Object.freeze(employeeInfo)

// Trying to Change the department after freeze 
employeeInfo.department = "IT"

console.log(employeeInfo.department); // "Computer Science" (unchanged due to freeze)

// Create Another Object
let additionalInfo = new Object()

// Add Properties
additionalInfo.email = "Mayur@example.com"
additionalInfo.phone = "0312456789"

// Merge Both Objects into a New Final Object
let finalEmployee = Object.assign({}, employeeInfo,additionalInfo)
console.log(finalEmployee)

// Get All Keys from finalEmployee
let finalEmployeesKeys = Object.keys(finalEmployee)
console.log(finalEmployeesKeys);

// Get All Values from finalEmployee
let finalEmployeesValues = Object.values(finalEmployee)
console.log(finalEmployeesValues);

//Get Key-Value Pairs from finalEmployee
let finalEmployeesEntries = Object.entries(finalEmployee)
console.log(finalEmployeesEntries);

// Check if a Property Exists 
let searchProperty = finalEmployee.hasOwnProperty("name");
console.log(searchProperty);





