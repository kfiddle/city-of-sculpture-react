
import SlidingBox from "../slidingBox/SlidingBox";
import { accordion } from "./Accordion";

import styles from "./AboutUs.module.css";

const AboutUs = (props) => {
  // const aboutUsStatement =
    // "On August 16, 2000,fagsdfgdfgsecognized Hamilton as “The City of Sculpture.” This sparked a vision for a group of community members who officially formed Hamilton, Ohio City of Sculpture, Inc. a 503c organization. Since that watershed event, a full Board of Trustees has been established and many new sculptures have been installed in public spaces around Hamilton. Other organizations and businesses are being energized through this vision and action.";

  return (
    <SlidingBox>
      <div className={styles.statementDiv}>
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

<div className={styles.accordion}>
        <p className={styles.missionAndBoardText}>Our Partners in the Arts</p>
      </div>

      <div className={styles.accordionContent}>
            <p>A multi-arts facility given as a gift to the city by
the community in honor of Hamilton’s bicentennial,
the Fitton Center features rotating galleries year-round
that are free to view as well as a plethora of special
programming ranging from art classes to nationally
touring theater productions. 
            </p>
            <hr/>
            <p>A 265 acre sculpture park and outdoor museum nestled on the edge of town that combines the lure of nature with the dynamic presence of more than 60 pieces of monumental sculpture. One of the few such facilities
of its scale in the United States, Pyramid Hill is a
setting where landscape and art come together
in natural galleries.</p>

        </div>

      <div className={styles.accordion}>
        <p className={styles.missionAndBoardText}>Our Board</p>
      </div>

      <div className={styles.accordionContent}>
            <p>Jason Elvers,Vorys, Sater, Seymour & Pease, LLP, Columbus, Ohio </p>
            <p>  Julie Carpenter,Cardinal Heatlh, Dublin, Ohio </p>
            <p>  Kayleigh Hunnicutt,Dublin City Schools, School Psychologist </p>
            <p>  Lisa Chapman,Elevated Marketing Services, Columbus, Ohio </p>
            <p>  Cody Yarletts,Parker Hannifin,Columbus, Ohio </p>
            <p>  Ryan J. Vonderbrink,Seegrid, New Albany, Ohio </p>
            <p>  Joshua Yakunich, Ohio State University Wexner Medical Center, Columbus, Ohio </p>

            <p>  Interested in serving on our Board of Directors or volunteering for Edheads?
                Please check out our listings on VolunteerMatch or contact us at info@edheads.org.
                For all questions, comments, and concerns, please send an email to info@edheads.org.

            </p>
        </div>


      
    </SlidingBox>
  );
};
export default AboutUs;
