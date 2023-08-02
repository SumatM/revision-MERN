// you're building a simple ordering system for a coffee shop. Create a TypeScript enum called CoffeeSize to represent different sizes of coffee: Small, Medium, and Large. Each size should have an associated price.

// Write a function called calculatePrice that takes a CoffeeSize value and returns the corresponding price. Use a switch statement inside the function to determine the price based on the size.

// Create instances of different sizes and use the calculatePrice function to display their prices.

enum CoffeeSize {
  Small = 1,
  Medium,
  Large,
}

function calculatePrice(coffee: CoffeeSize) {
  switch (coffee) {
    case CoffeeSize.Small:
      return 125;

    case CoffeeSize.Medium:
      return 239;

    case CoffeeSize.Large:
      return 449;
  }
}

console.log(calculatePrice(CoffeeSize.Small));
