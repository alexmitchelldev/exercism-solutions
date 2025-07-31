/// <reference path="./global.d.ts" />
//
// @ts-check

const PizzaMenu = new Map([
  ['Margherita', 7],
  ['Caprese', 9],
  ['Formaggio', 10],
  ['ExtraSauce', 1],
  ['ExtraToppings', 2]
])

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const orderSize = extras.length + 1;

  const calculatePizzaPrice = (itemNumber, total) => {
    if (itemNumber === orderSize) {
      return total;
    }

    if (itemNumber === 0) {
      total += PizzaMenu.get(pizza);

      return calculatePizzaPrice(itemNumber + 1, total);
    } else {
      if (extras) {
        total += PizzaMenu.get(extras[itemNumber - 1]);
      }

      return calculatePizzaPrice(itemNumber + 1, total);
    }
  }

  return calculatePizzaPrice(0, 0);
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  // const orderSize = pizzaOrders.length;


  // const calculateOrderPrice = (pizzaNumber, total) => {
  //   if (pizzaNumber === orderSize) {
  //     return total;
  //   }

  //   const currentPizza = pizzaOrders[pizzaNumber];

  //   if (currentPizza.extras.length > 0) {
  //     total += pizzaPrice(currentPizza.pizza, ...currentPizza.extras);
  //   } else {
  //     total += pizzaPrice(currentPizza.pizza);
  //   }

  //   return calculateOrderPrice(pizzaNumber + 1, total);
  // }

  // return calculateOrderPrice(0, 0);

  return pizzaOrders.reduce((totalValue, currentPizza) => {
    const currentPizzaPrice = pizzaPrice(currentPizza.pizza, ...currentPizza.extras);

    return totalValue + currentPizzaPrice;
  }, 0)
}
