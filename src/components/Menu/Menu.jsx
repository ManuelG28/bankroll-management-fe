import React from 'react';
import styles from './Menu.module.scss'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Menu() {
    const { t } = useTranslation();

    const options = [
        {
            title: t('menu.item_1'),
            icon: <FontAwesomeIcon icon={faUser} />
        },
        {
            title: t('menu.item_2'),
            icon: <FontAwesomeIcon icon={faDollarSign} />
        },
        {
            title: t('menu.item_3'),
            icon: <FontAwesomeIcon icon={faCog} />
        },
        {
            title: t('menu.item_4'),
            icon: <FontAwesomeIcon icon={faSignOutAlt} />
        },
    ]
    const items = options.map((item) =>
            <li id={item.title} className={styles.menu__items}> {item.icon}{' '}{item.title} </li>
        );

    return (
        <ul className={styles.menu}>
            {items}
        </ul>
    );
}

export default Menu;