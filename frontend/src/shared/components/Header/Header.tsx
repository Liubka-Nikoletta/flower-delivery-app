import React from 'react';
import CartIcon from "./assets/shopping-cart.png";
import styles  from "./Header.module.scss";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <div>
                    <Link to={`/`}>
                        <div className={styles.logo}>Flower power</div>
                        <div className={styles.logoSubtitle}>fresh flowers & smart gifts</div>
                    </Link>
                </div>
                <Link to={`/orders`}>
                    <div className={styles.navRight}>
                    <img className={styles.shoppingCart} src={CartIcon} alt="Cart"/>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;