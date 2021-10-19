//First
function convertToCelcius(temp) {
    return ((5 * (temp - 32)) / 9).toFixed(2)
}

function convertToFah(temp) {
    return ((9 * temp) / 5 + 32).toFixed(2)
}
console.log(convertToCelcius(45))
console.log(convertToFah(60))


//Second
var cart = {
    items: [{
        name: 'apple',
        price: 400
    }, {
        name: 'banana',
        price: 500
    }],
    totalPrice: function () {
        var total = 0
        this.items.forEach((item, index) =>
            total = total + item.price
        )
        console.log(total)
    }
}
result = cart.totalPrice.bind(cart)
result()


//Third