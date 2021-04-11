import React, { Suspense } from 'react';
import styles from './Layout.module.scss'
import NavBar from 'components/NavBar/NavBar';

function Layout({ children }) {
    return (
        <Suspense fallback="loading">
            <div className={styles.layout}>
                <NavBar />
                <main>{children}</main>
            </div>
        </Suspense>
    );
}

export default Layout;