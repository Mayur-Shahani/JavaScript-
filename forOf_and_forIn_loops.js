const arr = ["apple", "banana", "cherry"];
const person = { name: "Mayur", age: 25, city: "Karachi" };

for (const fruits of arr) {
    console.log(fruits)
}

for(const key in person)
{
    console.log(key, person[key])
}