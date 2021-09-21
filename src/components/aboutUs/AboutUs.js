
import SlidingBox from "../slidingBox/SlidingBox";
import styles from "./AboutUs.module.css";

const AboutUs = (props) => {
  // const aboutUsStatement =
    // "On August 16, 2000,fagsdfgdfgsecognized Hamilton as “The City of Sculpture.” This sparked a vision for a group of community members who officially formed Hamilton, Ohio City of Sculpture, Inc. a 503c organization. Since that watershed event, a full Board of Trustees has been established and many new sculptures have been installed in public spaces around Hamilton. Other organizations and businesses are being energized through this vision and action.";

  return (
    <SlidingBox>
      <div className={styles.aboutUsStatementDiv}>
     <p>On August 16, 2000, Ohio’s then governor, Bob Taft, declared and formally recognized 
      Hamilton as “The City of Sculpture.” This sparked a vision from a group of community 
      members who officially formed “Hamilton, Ohio, City of Sculpture” in September of 2000. 
      Since that watershed event, a full Board of Trustees has been established, and many new 
      sculptures have been installed in public spaces around Hamilton. </p> 

      <p>The mission of the City of Sculpture is to promote the recognition of Hamilton as a 
      cultural community by procuring and placing sculptures in public spaces for the enjoyment 
      of residents and visitors.</p> 

      <p>To fulfill our mission, we not only raise funds through donations for the 
purchase of sculptures, but we also conduct artist searches and assist other 
institutions in their purchase of sculpture. Many businesses and organizations 
are being energized through this vision as cultural tourism benefits the community 
both socially and economically.</p> 

<p>Among the legacies of Hamilton’s success is an accessible assortment 
of architectural and historical treasures. Hamiltonians, proud of their history, 
have preserved and nurtured structures that represent a cross section of the city’s 
cultural and economic past. Today, three compact historic districts, plus scenic downtown 
Hamilton, showcase a variety of homes and buildings.</p> 
</div>

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
