import React  from "react";
import {Flower} from "../model/types";
import styles from "./FlowerCard.module.scss";

interface FlowerCardProps {
    flower: Flower;
    onSelect: (flowerId: number) => void;
}

const FlowerCard = ({ flower, onSelect }: FlowerCardProps) => {
    const {id, name, price, image_url} = flower;
    return (
        <div className={styles.flowerCard}>
            <div className={styles.flowerImage} style={{backgroundImage: `url(${image_url})`}}></div>
            <div className={styles.flowerCardContent}>
                <h3 className={styles.flowerName}>{name}</h3>
                <div className={styles.flowerInfo}>
                    <div className={styles.flowerPrice}>Price: {price}</div>
                    <button className={styles.selectFlowerBtn} onClick={() => onSelect(id)}>Обрати</button>
                </div>
            </div>
        </div>
    );
}

export default FlowerCard;