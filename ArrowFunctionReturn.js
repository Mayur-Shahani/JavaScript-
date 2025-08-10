
console.log("ExpliciT Return ")
const user = (num) => {
    
    return (num * num * num)
}

console.log(user(3));


console.log("Implicit Return ")
const user2 = (num) => (num * num * num)

console.log(user2(3))