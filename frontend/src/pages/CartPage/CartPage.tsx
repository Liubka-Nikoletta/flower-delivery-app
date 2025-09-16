import React, {useEffect, useState} from "react";
import {CartItemType} from "../../entities/CartItem/model/types";
import styles from "./CartPage.module.scss";
import {getCartItems} from "../../shared/lib/localStorage/cart";
import CartItem from "../../entities/CartItem/ui/CartItem";
import OrderForm from "../../features/OrderForm/OrderForm";

const CartPage = () => {
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);
    const [orderSuccess, setOrderSuccess] = useState(false);

    useEffect(() => {
        const items = getCartItems();
        setCartItems(items);
    }, []);

    const handleQuantityChange = (id: number, quantity: number) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        );
        setCartItems(updatedCartItems);
        localStorage.setItem("cart_items", JSON.stringify(updatedCartItems));
    }

    const removeCartItem = (id: number) => {
        const updateItems = cartItems.filter(item => item.id !== id);
        setCartItems(updateItems);

        localStorage.setItem("cart_items", JSON.stringify(updateItems));
    }

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className={styles.container}>
            {orderSuccess ? (
                    <div className={styles.message}>
                        Замовлення успішно оформлено!
                    </div>
                ) : cartItems.length === 0 ? (
                <p className={styles.message}>Ваш кошик порожній</p>
            ) : (
                <>
                <h1 className={styles.pageTitle}>Кошик покупок</h1>
                <div className={styles.cartContainer}>
                    <OrderForm totalPrice={totalPrice} cartItems={cartItems} onOrderSuccess={() => setOrderSuccess(true)}/>
                    <div className={styles.cartList}>
                        {cartItems.map((item: CartItemType) => item.quantity > 0 && (
                            <CartItem key={item.id} item={item} onQuantityChange={handleQuantityChange}
                                      onRemove={removeCartItem}/>
                        ))}
                    </div>
                </div>
                </>
            )}
        </div>
    );
}

export default CartPage;