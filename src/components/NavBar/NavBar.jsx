import React, { useState } from 'react';
import styles from './NavBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logoImg from 'assests/logo.png'

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className={styles.nav}>
            <img
                src={logoImg}
                className={styles.nav__logo}
                alt="Bankroll management"
            />
            <FontAwesomeIcon
                icon={faBars}
                onClick={() => { setShowMenu(!showMenu);}}
                className={styles.nav__icon}
                size={"2x"}
            />
        </div>
    );
}

export default Navigation;