/*
 * Работаем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        return (item.quantity += 1);
      }
    }
    product.quantity = 1;
    this.items.push(product);
  },

  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].name === productName) {
        this.items.splice(i, 1);
      }
    }
  },

  clear() {
    this.items.splice(0);
  },

  countTotalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  },

  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        return (item.quantity += 1);
      }
    }
  },

  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        if (item.quantity - 1 === 0) {
          return this.remove(productName);
        }
        return (item.quantity -= 1);
      }
    }
  },
};

// console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

cart.remove('🍎');
console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('🍓');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());
