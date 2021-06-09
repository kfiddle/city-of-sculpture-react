import { useState, useEffect } from 'react';

import styles from "./AboutUs.module.css";

const AboutUs = (props) => {
    const [aboutUsPosition, setAboutUsPosition] = useState("translateX(0)");

    useEffect(() => {
      const slideTimer = setTimeout(() => {
        setAboutUsPosition("translateX(17vw)");
      }, 5);
    }, []);

  const aboutUsStatement =
    "On August 16, 2000, Ohio’s governor declared and formally recognized Hamilton as “The City of Sculpture.” This sparked a vision for a group of community members who officially formed Hamilton, Ohio City of Sculpture, Inc. a 503c organization. Since that watershed event, a full Board of Trustees has been established and many new sculptures have been installed in public spaces around Hamilton. Other organizations and businesses are being energized through this vision and action.";

  return (
    <div className={styles.aboutUsDiv} style={{transform: aboutUsPosition}}>
      <div className={styles.aboutUsStatementDiv}>{aboutUsStatement}</div>
      <button className={styles.missionAndBoard}><p className={styles.missionAndBoardText}>Our Mission</p></button>
      <button className={styles.missionAndBoard}><p className={styles.missionAndBoardText}>Our Board</p></button>

    </div>
  );
};
export default AboutUs;
