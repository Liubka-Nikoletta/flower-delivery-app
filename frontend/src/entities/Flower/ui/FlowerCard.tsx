import React  from "react";
import {Flower} from "../model/types";
import styles from "./FlowerCard.module.scss";
import { toast } from "react-toastify";

interface FlowerCardProps {
    flower: Flower;
    onSelect: (flowerId: number) => void;
}

const FlowerCard = ({ flower, onSelect }: FlowerCardProps) => {
    const {id, name, price, image_url} = flower;

    const handleSelect = () => {
        try {
            onSelect(id);
            toast.success(`"${name}" додано в кошик!`);
        } catch (error) {
            toast.error("Сталася помилка, спробуйте ще раз");
        }
    };

    return (
        <div className={styles.flowerCard}>
            <div className={styles.flowerImage} style={{backgroundImage: `url(${image_url})`}}></div>
            <div className={styles.flowerCardContent}>
                <h3 className={styles.flowerName}>{name}</h3>
                <div className={styles.flowerInfo}>
                    <div className={styles.flowerPrice}>Ціна: {price}</div>
                    <button className={styles.selectFlowerBtn} onClick={handleSelect}>Обрати</button>
                </div>
            </div>
        </div>
    );
}

export default FlowerCard;