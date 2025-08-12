
const numbers = [3, 7, 12, 5, 20];

let sum = 0
numbers.forEach(function(item, index){
    if(item %2 == 0)
    {
        console.log(`${item} is Even`)
    }
    else{
        console.log(`${item} is Odd `);
    }
    sum += item

})
console.log(sum);

