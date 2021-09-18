
import SlidingBox from "../slidingBox/SlidingBox";
import styles from "./AboutUs.module.css";

const AboutUs = (props) => {
  const aboutUsStatement =
    "On August 16, 2000, Ohio’s governor declared and formally recognized Hamilton as “The City of Sculpture.” This sparked a vision for a group of community members who officially formed Hamilton, Ohio City of Sculpture, Inc. a 503c organization. Since that watershed event, a full Board of Trustees has been established and many new sculptures have been installed in public spaces around Hamilton. Other organizations and businesses are being energized through this vision and action.";

  return (
    <SlidingBox>
      <div className={styles.aboutUsStatementDiv}>{aboutUsStatement}</div>
      <button className={styles.missionAndBoard}>
        <p className={styles.missionAndBoardText}>Our Mission</p>
      </button>
      <button className={styles.missionAndBoard}>
        <p className={styles.missionAndBoardText}>Our Board</p>
      </button>
    </SlidingBox>
  );
};
export default AboutUs;
