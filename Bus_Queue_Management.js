// 🚌 Bus Queue Management System

let myArray = ["Ali", "Sara", "Ahmed", "Zara", "Hassan"]
console.log("Initial queue:", myArray);

myArray.push("Tariq")
console.log("After Tariq joined ", myArray);

myArray.pop()
console.log("After last passenger left ", myArray);

myArray.unshift("Rehan")
console.log("After Rehan joined at front", myArray);

myArray.shift()
console.log("After first passenger boarded ", myArray);

myStr = myArray.join()
console.log("Current queue (joined string):", myStr)

let slicedArray = myArray.slice(1,4)
console.log("Passengers waiting in the middle", slicedArray);

let splicedArray = myArray.splice(2,3)
console.log("Passengers who left the queue", splicedArray)


