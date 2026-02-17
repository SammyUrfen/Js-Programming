class Pizza{
    static totalPizzaMade = 0

    constructor(size, toppings, preference, crust) {
        this.size = size
        this.toppings = toppings
        this.preference = preference
        this.crust = crust
        Pizza.totalPizzaMade++
    }

    calculateTotalPizza() {
        console.log(Pizza.totalPizzaMade)
    }

    serve() {
        console.log(`Pizza served of size ${this.size}`)
    }
}

const order1 = new Pizza("Large", ["paneer", "Mozzarella", "Chilli sauce"], "Veg", "Thin")

console.log(order1)
order1.serve()

class StuffedPizza extends Pizza{
    constructor(size, toppings, preference, stuffing) {
        super(size, toppings, preference, stuffing)
        this.stuffing = stuffing
    }

    serve() {
        console.log(`Pizza of ${this.stuffing} stuffing has been served`)
    }

    describe(){
        super.serve()
    }
}

const order2 = new StuffedPizza("Large", ["paneer", "Mozzarella", "Chilli sauce"], "Veg", "Garlic")

console.log(order2)

order2.serve()
order2.describe()
order2.calculateTotalPizza()