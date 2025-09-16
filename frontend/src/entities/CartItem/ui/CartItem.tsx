import React from "react";
import {CartItemType} from "../model/types";
import styles from "./CartItem.module.scss";

interface CartItemProps {
    item: CartItemType;
    onQuantityChange: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
}

const CartItem = ({ item, onQuantityChange, onRemove }: CartItemProps) => {
    const {id, name, price, image_url, quantity} = item;
    return(
        <div className={styles.cartItem}>
            <div className={styles.itemImage} style={{backgroundImage: `url(${image_url})`}}></div>
            <div className={styles.itemDetails}>
                <h3 className={styles.itemName}>{name}</h3>
                <p className={styles.itemPrice}>{price}</p>
            </div>
            <div className={styles.quantityControls}>
                <button className={styles.quantityBtn}
                        onClick={() => {
                            if(quantity < 0 || quantity === 0) {
                                onRemove(id)
                            }else{
                                onQuantityChange(id, quantity - 1)}
                        }}>
                    -
                </button>
                <span className={styles.quantityInput}>{item.quantity}</span>
                <button className={styles.quantityBtn}
                        onClick={() => {onQuantityChange(id, quantity + 1)}}>+
                </button>
            </div>
            <button className={styles.removeBtn} onClick={() => {onRemove(id)}}>x</button>
        </div>
    );
}

export default CartItem;