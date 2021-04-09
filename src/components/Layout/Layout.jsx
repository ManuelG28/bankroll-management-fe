import React from 'react';
import styles from './Layout.module.scss'
import NavBar from 'components/NavBar/NavBar';

function Layout(children) {
    return (
        <div className={styles.layout}>
            <NavBar />
        </div>
    );
}

export default Layout;