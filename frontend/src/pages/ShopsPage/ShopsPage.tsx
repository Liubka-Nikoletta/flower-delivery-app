import React, {useState, useEffect} from "react";
import {Shop} from "../../entities/Shop/model/types";
import ShopCard from "../../entities/Shop/ui/ShopCard";
import { api } from "../../shared/api/api";
import styles from "./ShopsPage.module.scss";

const ShopPage = () => {
    const [shops, setShops] = useState<Shop[]>([]);

    useEffect(() => {
        api.get<Shop[]>("/api/shops").then((res) => {setShops(res.data)});
    }, []);

    const handleSelect = (shopId: number) => {
        console.log("Selected shop:", shopId);
    }

    return(
        <div className={styles.container}>
            <h1>Оберіть квітковий магазин</h1>
            <div className={styles.shopsGrid}>
                {shops.map((shop: Shop) => (<ShopCard key={shop.id} shop={shop} onSelect={handleSelect} />))}
            </div>
        </div>
    );
}

export default ShopPage;