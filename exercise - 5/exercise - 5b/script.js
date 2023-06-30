function getRandomstockprice() { 
    return Math.floor(Math.random() * 3) - 1; 
} 

function displayPrice(price) { 
    console.log("Current price: $" + price.toFixed(2)); 
}

function PriceChanges() { 
    let price = 100;  
    const interval = setInterval(() => { 
        const priceChange = getRandomstockprice(); 
        price += priceChange;
        displayPrice(price); 
    }, 3000); 

    setTimeout(() => { 
        clearInterval(interval); 
        console.log("Changes stopped"); 
    }, 30000); 
} 

PriceChanges();
