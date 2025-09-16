import {CartItemType} from "../../../entities/CartItem/model/types";
import {Flower} from "../../../entities/Flower/model/types";

const CART_KEY = "cart_items";

export const getCartItems =  (): CartItemType[] => {
    const items = localStorage.getItem(CART_KEY);
    return items ? JSON.parse(items) : [];
}

export const addToCart = (flower: Flower) => {
    const items = getCartItems();
    const existingItem = items.find(item => item.id === flower.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else{
        items.push({ ...flower, quantity: 1 });
    }

    localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export const removeFromCart = (flower: CartItemType) => {
    const items = getCartItems().filter(item => item.id !== flower.id);
    localStorage.setItem(CART_KEY, JSON.stringify(items));
}