//This closure exercise involves a common real-world scenario.  

// This exercise uses closures to create a shopping cart. It encapsulates the cart array, allowing you to
//  add items, remove items, and calculate the total cost. The items and their prices are private and can only be 
//  accessed or modified through the provided methods, demonstrating the concept of closures in a different context.
// Exercise: Closure and a Shopping Cart

// Create a function that simulates a shopping cart. The cart should allow you to add items,
// remove items, and calculate the total cost. Items and their prices should be private
// and not directly accessible.

type Item = {
    item: string;
    price: number;
}

type Cart = {
    addItem: (item: string, price: number) => void;
    removeItem: (item: string) => void;
    getTotal: () => number;
}

export function createShoppingCart():  Cart {
  const cart: Item[] = [];

  function addItem(item: string, price: number): void {
    cart.push({ item, price });
    console.log(`Added ${item} to the cart.`);
  }

  function removeItem(item: string): void {
    const index = cart.findIndex((cartItem) => cartItem.item === item);
    if (index !== -1) {
      cart.splice(index, 1);
      console.log(`Removed ${item} from the cart.`);
    } else {
      console.log(`${item} not found in the cart.`);
    }
  }

  function getTotal(): number {
    let total = 0;
    total = cart.reduce((acc, cartItem) => acc + cartItem.price, 0);
    console.log(`Total cost: $${total}`);
    return total;
  }

  return {
    addItem,
    removeItem,
    getTotal,
  };
}



