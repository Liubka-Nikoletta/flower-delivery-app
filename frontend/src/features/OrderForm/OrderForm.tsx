import React, {useState} from 'react';
import {CartItemType} from "../../entities/CartItem/model/types";
import styles from "./OrderForm.module.scss";
import {useNavigate} from "react-router-dom";
import {api} from "../../shared/api/api";

interface OrderFormProps {
    totalPrice: number;
    cartItems: CartItemType[];
    onOrderSuccess: () => void;
}

const OrderForm = ({totalPrice, cartItems, onOrderSuccess}: OrderFormProps) => {
    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const itemsToSend = cartItems
            .filter(item => item.quantity > 0)
            .map(item => ({
                flower_id: item.id,
                quantity: item.quantity
            }));

        if (itemsToSend.length === 0) {
            alert("Кошик порожній!");
            return;
        }

        console.log(cartItems);

        try {
            const response = await api.post("/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    delivery_address: deliveryAddress,
                    items: itemsToSend
                })
            });

            const data = await response.data;

            if (response.status === 200) {
                localStorage.removeItem("cart_items");
                onOrderSuccess();

            } else {
                alert("Помилка створення замовлення: " + data.error);
            }
        } catch (error) {
            console.error(error);
            alert("Помилка з’єднання з сервером");
        }

    };

    return (
        <div className={styles.orderForm}>
            <h2 className={styles.formTitle}>Оформлення замовлення</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="name">Ім'я</label>
                    <input type="text" id="name" className={styles.formInput} placeholder="Введіть ваше ім'я" value={customerName}
                           onChange={e => setCustomerName(e.target.value)}
                           required/>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="email">Email</label>
                    <input type="email" id="email" className={styles.formInput} placeholder="Введіть email" value={customerEmail}
                           onChange={e => setCustomerEmail(e.target.value)}
                           required/>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="phone">Телефон</label>
                    <input type="tel" id="phone" className={styles.formInput} placeholder="Введіть номер телефону" value={customerPhone}
                           onChange={e => setCustomerPhone(e.target.value)}
                           required/>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="address">Адреса доставки</label>
                    <input type="text" id="address" className={styles.formInput} value={deliveryAddress}
                           onChange={e => setDeliveryAddress(e.target.value)}
                           placeholder="Введіть адресу доставки" required/>
                </div>

                <div className={styles.formGroup}>
                    <div className={styles.totalPrice} id="totalPrice">Загальна сума: {totalPrice} </div>
                    <button type="submit" className={styles.submitBtn}>Оформити замовлення</button>
                </div>
            </form>
        </div>
    )
}

export default OrderForm;