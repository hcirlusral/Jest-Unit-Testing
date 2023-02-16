
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

function fromDollarToYen (dollars) {
    return (dollars / 1.2) * 127.9;
}

function fromYenToPounds (yen) {
    return (yen / 127.9) * 0.8;
}

console.log(fromDollarToYen(1000))
console.log(fromDollarToYen(50000))

module.exports = { sum, fromEuroToDollar, fromDollarToYen , fromYenToPounds }