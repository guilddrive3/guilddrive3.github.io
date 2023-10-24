//This closure exercise involves a common real-world scenario.  
export function createShoppingCart() {
    const cart = [];
    function addItem(item, price) {
        cart.push({ item, price });
        console.log(`Added ${item} to the cart.`);
    }
    function removeItem(item) {
        const index = cart.findIndex((cartItem) => cartItem.item === item);
        if (index !== -1) {
            cart.splice(index, 1);
            console.log(`Removed ${item} from the cart.`);
        }
        else {
            console.log(`${item} not found in the cart.`);
        }
    }
    function getTotal() {
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
