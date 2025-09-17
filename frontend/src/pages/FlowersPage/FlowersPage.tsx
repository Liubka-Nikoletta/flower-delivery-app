import React, {useEffect, useState} from "react";
import {Flower} from "../../entities/Flower/model/types";
import FlowerCard from "../../entities/Flower/ui/FlowerCard";
import { useParams } from 'react-router-dom';
import styles from "./FlowersPage.module.scss";
import {addToCart} from "../../shared/lib/localStorage/cart";

const FlowersPage = () => {
    const {shopId} = useParams();
    const [flowers, setFlowers] = useState<Flower[]>([]);

    useEffect(() => {
        const fetchFlowers = async () => {
            try{
                const response = await fetch(`http://localhost:5000/api/shops/${shopId}/flowers`);
                const data = await response.json();
                setFlowers(data);
            }catch(error){
                console.error("Error fetching flowers:", error);
            }
        }

        if(shopId){
            fetchFlowers();
        }
    }, [shopId]);

    const handleClick = (flowerId: number) => {
       const flower = flowers.find((flower) => flower.id === flowerId);
       if(flower){
           addToCart(flower);
       }
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.shopTitle}>Усі квіти</h1>
            <div className={styles.flowerGrid}>
                {flowers.map((flower: Flower) => (<FlowerCard key={flower.id} flower={flower} onSelect={handleClick}/>))}
            </div>
        </div>
    );
}

export default FlowersPage;