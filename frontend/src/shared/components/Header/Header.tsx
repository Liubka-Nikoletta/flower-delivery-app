import React from 'react';
import CartIcon from "./assets/shopping-cart.png";
import styles  from "./Header.module.scss";

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <div>
                    <div className={styles.logo}>Flower power</div>
                    <div className={styles.logoSubtitle}>fresh flowers & smart gifts</div>
                </div>
                <div className={styles.navRight}>
                    <img className={styles.shoppingCart} src={CartIcon} alt="Cart"/>
                </div>
            </div>
        </header>
    );
};

export default Header;