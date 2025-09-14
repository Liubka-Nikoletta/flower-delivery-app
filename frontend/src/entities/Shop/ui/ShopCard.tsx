import React from "react";
import {Shop} from "../model/types";
import styles from "./ShopCard.module.scss";

interface ShopCardProps {
    shop: Shop;
    onSelect: (shopId: number) => void;
}

const ShopCard = ({ shop, onSelect }: ShopCardProps) => {
    const {id, name, description, image_url, rating} = shop;
    return (
        <div className={styles.shopCard}>
            <div className={styles.shopImage} style={{ backgroundImage: `url(${image_url})` }}></div>
            <div className={styles.shopCardContent}>
                <h3 className={styles.shopName}>{name}</h3>
                <p className={styles.shopDescription}>{description}</p>
                <div className={styles.shopInfo}>
                    <div className={styles.shopRating}>Rating: {rating}</div>
                    <button className={styles.selectShopBtn} onClick={() => onSelect(id)}>Обрати</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;