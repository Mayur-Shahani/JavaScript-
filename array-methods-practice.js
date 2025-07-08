let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

numbers.push(4);
console.log("After push(4):", numbers);

numbers.pop();
console.log("After pop():", numbers);

numbers.unshift(8);
console.log("After unshift(8):", numbers);

numbers.shift();
console.log("After shift():", numbers);

let joinArray = [1, 2, 3, 4, 5, 6];
let joinedString = joinArray.join("-");
console.log("Joined with hyphen:", joinedString);

let fullArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let slicedArray = fullArray.slice(1, 4);
console.log("Sliced from index 1 to 3:", slicedArray);

let splicedArray = fullArray.splice(1, 4);
console.log("Spliced elements (1 to 4):", splicedArray);
