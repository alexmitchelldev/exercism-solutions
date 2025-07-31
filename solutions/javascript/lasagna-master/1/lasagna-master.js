/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus (remainingTime) {
    if (remainingTime !== undefined) {
        return remainingTime === 0 ? 'Lasagna is done.' : 'Not done, please wait.';
    } else {
        return `You forgot to set the timer.`
    }
};

export function preparationTime (layers, averageTimeInMinutes) {
    return averageTimeInMinutes !== undefined ? layers.length * averageTimeInMinutes : layers.length * 2;
};

export function quantities (layers) {
    let quantitiesRequired = {
        noodles: 0,
        sauce: 0
    }
    for (const layer of layers) {
        if (layer === 'noodles') {
            quantitiesRequired.noodles += 50;
        }
        if (layer === 'sauce') {
            quantitiesRequired.sauce += 0.2;
        }
    }
    return quantitiesRequired;
};

export function addSecretIngredient (friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
};

export function scaleRecipe (recipe, numberOfPortions) {
    const multiplier = numberOfPortions / 2;
    let scaledRecipe = {
    }
    for (const layer in recipe) {
        scaledRecipe[layer] = recipe[layer] * multiplier;
    }
    return scaledRecipe;
};