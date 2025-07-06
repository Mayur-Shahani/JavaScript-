let customerName = "Muhammad Araf"
let numberOfItems = 3
let pricePerItem = 300
let totaldiscount = 100

console.log("Total Bill Before Discount ");

let totalBeforeDisc = numberOfItems * pricePerItem
console.log(totalBeforeDisc);

console.log("Total Bill After Discount ");

let totalAfterDisc = totalBeforeDisc - totaldiscount
console.log(totalAfterDisc);
