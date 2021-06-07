import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = (props) => {
    const [headerPosition, setHeaderPosition] = useState("translateY(-20vh)");

    useEffect(() => {
      const slideTimer = setTimeout(() => {
        setHeaderPosition("translateY(0)");
      }, 150);
    }, []);

    return <header className={styles.header} style={{ transform: headerPosition }}></header>

};

export default Header;