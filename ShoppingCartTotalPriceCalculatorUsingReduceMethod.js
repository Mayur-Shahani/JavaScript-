const shoppingCart = [
    {   
        itemName: "JS Course",
        price: 2999
    },
        {   
        itemName: "Py Course",
        price: 1599
    },
    {   
        itemName: "C Course",
        price: 999
    },
    {   
        itemName: "C++ Course",
        price: 1999
    }
    
]

let addPrices = shoppingCart.reduce((accumulator, item) => (accumulator + item.price), 0)
console.log(addPrices);
