const groceriesList = [
    {
        productName: "milk",
        quantity: 12,
        isBought: false,
    },
    {
        productName: "biscuit box",
        quantity: 4,
        isBought: true,
    },
    {
        productName: "bread",
        quantity: 1,
        isBought: false,
    },
];

function displayGroceries(){
    groceriesList.sort((a, b) => (a.isBought - b.isBought));
    return groceriesList.map(item => item.productName);
}
console.log(displayGroceries());




function addItem(name, amount) {
    
    const existingItem = groceriesList.find(item => item.productName === name);

    if (existingItem) {
       
        existingItem.quantity += amount;
    } else {
      
        groceriesList.push({
            productName: name,
            quantity: amount,
            isBought: false 
        });
    }

    
    return groceriesList;
}



function purchaseItem(name) {
   
    const item = groceriesList.find(item => item.productName === name);

    if (item) {
        item.isBought = true;
    } else {
        console.log(`Item with name "${name}" not found.`);
    }


    return groceriesList;
}
const shoppingReceipt = [
    {
        productName: "milk",
        quantity: 12,
        price: 5
    },
    {
        productName: "biscuit box",
        quantity: 4,
        price: 3
    },
    {
        productName: "bread",
        quantity: 1,
        price: 2
    },
];




function printReceipt() {
    console.log("------ Grocery Receipt ------\n");

    let totalCost = 0;

   
    shoppingReceipt.forEach(item => {
       
        const itemTotal = item.quantity * item.price;
        
        
        totalCost += itemTotal;

        
        console.log(`Product: ${item.productName}`);
        console.log(`Quantity: ${item.quantity}`);
        console.log(`Price per unit: $${item.price}`);
        console.log(`Total: $${itemTotal}\n`);
    });

    
    console.log(`------ Total Cost: $${totalCost.toFixed(2)} ------`);
    console.log("------ Thank you for shopping! ------");
}


printReceipt();


function findMostExpensiveItem() {
  
    let mostExpensive = shoppingReceipt[0];


    for (let i = 1; i < shoppingReceipt.length; i++) {
        const currentItem = shoppingReceipt[i];

        
        if (currentItem.price > mostExpensive.price) {
            mostExpensive = currentItem;
        }
    }

    return mostExpensive;
}


function calculateAveragePrice() {
    let totalCost = 0;
    let totalItems = 0;

 
    for (let i = 0; i < shoppingReceipt.length; i++) {
        const item = shoppingReceipt[i];
        
        
        totalCost += item.price * item.quantity;
        
    
        totalItems += item.quantity;
    }

    
    const averagePrice = totalCost / totalItems;

 
    return averagePrice.toFixed(2);
}