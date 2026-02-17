function Pizza(size, toppings, preference, crust) {
    // console.log(this)
    this.size = size
    this.toppings = toppings
    this.preference = preference
    this.crust = crust

}

Pizza.prototype.serve = function() {
    console.log("Your " +this.size+ " inch "+ this.crust + " crust " +this.preference+ " pizza with " + this.toppings + " toppings is served")
}

let order = new Pizza("Medium", ["Tomato", "Cheese"], "Veg", "Thin")

console.log(order)

order.serve()

// function create(size, toppings) {
//     let obj = {}

//     obj.size = size
//     obj.toppings = toppings

//     obj.serve = function() {
//         console.log("Your " +obj.size+ " pizza with " + obj.toppings + " toppings is served")
//     }

//     return obj;
// }

// const pizza1 = create("Medium", ["Tomato", "Cheese"])

// console.log(pizza1)

// pizza1.serve()