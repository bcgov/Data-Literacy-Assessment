import React from 'react';
import DataLiteracyBCPS from '../content/images/data_literacy_bcps.png';
import DataLiteracyLogo from '../content/images/DataLiteracyLogo.png';
import styles from './Header.module.css';

export default function Header(props) {

    return (
        <div className={styles.header}>
            <img src={DataLiteracyBCPS} alt=""/>
            <img src={DataLiteracyLogo} alt=""/>
        </div>
    );
}
