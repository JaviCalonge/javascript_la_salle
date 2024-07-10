class FruitStand {
  constructor() {
      this.fruits = {};
  }

  addFruit(name, quantity, price) {
      if (this.fruits[name]) {
          console.log(`Fruit '${name}' already exists. Use updateQuantity to change the quantity.`);
      } else {
          this.fruits[name] = { quantity: quantity, price: price };
      }
  }

  updateQuantity(name, quantity) {
      if (this.fruits[name]) {
          this.fruits[name].quantity += quantity;
      } else {
          console.log(`Fruit '${name}' does not exist. Use addFruit to add the fruit first.`);
      }
  }

  totalValue() {
      let total = 0;
      for (let fruit in this.fruits) {
          total += this.fruits[fruit].quantity * this.fruits[fruit].price;
      }
      return total;
  }
}

// Example usage:
let stand = new FruitStand();
stand.addFruit("apple", 10, 0.5);
stand.addFruit("banana", 10, 0.5);
stand.addFruit("sherry", 10, 0.5);
stand.updateQuantity("banana", 10);

stand.updateQuantity("apple", 1)

console.log(stand);
console.log(stand.totalValue()); // Output: 20



function canPlantFlowers(flowerbed, k) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
      if (flowerbed[i] === 0 &&
          (i === 0 || flowerbed[i - 1] === 0) &&
          (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
          flowerbed[i] = 1;
          count++;
          if (count >= k) {
              return true;
          }
      }
  }
  return count >= k;
}

// Example usage:
console.log(canPlantFlowers([1, 0, 0, 0, 1], 1)); // Output: true
console.log(canPlantFlowers([1, 0, 0, 0, 1], 2)); // Output: false
console.log(canPlantFlowers([0, 0, 0, 0, 0], 3)); // Output: true
console.log(canPlantFlowers([1, 0, 0, 0, 1], 1)); // Output: false
