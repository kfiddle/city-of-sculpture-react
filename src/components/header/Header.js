import { useState, useEffect, } from 'react';
import styles from './Header.module.css';

const Header = (props) => {
    const [headerPosition, setHeaderPosition] = useState("translateY(-20vh)");
    const image = 'images/logo.png';

    useEffect(() => {
      const slideTimer = setTimeout(() => {
        setHeaderPosition("translateY(0)");
      }, 150);
    }, []);

    return <header className={styles.header} style={{ transform: headerPosition }}>
        {/* <img src={headerLogo}></img> */}
        <img src={image}></img>
        

    </header>

};

export default Header;