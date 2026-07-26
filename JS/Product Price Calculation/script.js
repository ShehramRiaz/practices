const prices = [250, 645, 300, 900, 50];
// Each item have 10% Off

console.log("Before Offer");
for (let price of prices) {
    console.log(price);
}

for (let key in prices) {
    const price = prices[key];
    const finalPrice = price - 10 / 100 * price;
    prices[key] = finalPrice;
}

console.log("After Offer")
for (let price of prices) {
    console.log(price);
}