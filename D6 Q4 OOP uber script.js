//Q4.write a class to calculate the uber price.

class Uber {
    constructor(basePrice, pricePerKm, pricePerMinute) {
      this.basePrice = basePrice;
      this.pricePerKm = pricePerKm;
      this.pricePerMinute = pricePerMinute;
    }
  
    calculatePrice(distance, duration) {
      const distanceAboveBase = distance - 1; // Uber charges extra for distance over 1 km
      const durationInMinutes = duration / 60; // Convert duration to minutes
      const distancePrice = distanceAboveBase > 0 ? distanceAboveBase * this.pricePerKm : 0;
      const timePrice = durationInMinutes * this.pricePerMinute;
      const totalPrice = this.basePrice + distancePrice + timePrice;
      return totalPrice;
    }
  }
  var myUber = new Uber(5, 1.5, 0.25);
  var distance = 5; // km
  var duration = 20; // minutes
  var totalPrice = myUber.calculatePrice(distance, duration);
  console.log(totalPrice); // Output: 15.25
    