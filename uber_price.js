class calculatePrice{
    constructor(basefare, costPerKmph) {
        this.basefare = basefare
        this.costPerKmph = costPerKmph
        
        
    }
    uberfee(distanceKmph) {
        let distance = this.costPerKmph * distanceKmph
        let totalCost = distance + this.basefare
        return totalCost;
        
    }
}
let charge = new calculatePrice(30, 8);

let bill = charge.uberfee(10);
console.log(bill);

