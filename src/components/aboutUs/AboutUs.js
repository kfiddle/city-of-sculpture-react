import { useState } from "react";
import SlidingBox from "../slidingBox/SlidingBox";

import styles from "./AboutUs.module.css";

const AboutUs = (props) => {
  const [partnersWasClicked, setPartnersWasClicked] = useState(false);
  const [missionWasClicked, setMissionWasClicked] = useState(false);

  const partnersClicker = () => {
    setPartnersWasClicked(previous => !previous);
  };

  const missionClicker = () => {
    setMissionWasClicked(previous => !previous);
  }

  return (
    <SlidingBox>
      <div className={styles.innerContentContainer}>
      <div className={styles.statementDiv}>
        <p>
          On August 16, 2000, Ohio’s then governor, Bob Taft, declared and
          formally recognized Hamilton as “The City of Sculpture.” This sparked
          a vision from a group of community members who officially formed
          “Hamilton, Ohio, City of Sculpture” in September of 2000. Since that
          watershed event, a full Board of Trustees has been established, and
          many new sculptures have been installed in public spaces around
          Hamilton.
        </p>

        <p>
          The mission of the City of Sculpture is to promote the recognition of
          Hamilton as a cultural community by procuring and placing sculptures
          in public spaces for the enjoyment of residents and visitors.
        </p>

        <p>
          To fulfill our mission, we not only raise funds through donations for
          the purchase of sculptures, but we also conduct artist searches and
          assist other institutions in their purchase of sculpture. Many
          businesses and organizations are being energized through this vision
          as cultural tourism benefits the community both socially and
          economically.
        </p>

        <p>
          Among the legacies of Hamilton’s success is an accessible assortment
          of architectural and historical treasures. Hamiltonians, proud of
          their history, have preserved and nurtured structures that represent a
          cross section of the city’s cultural and economic past. Today, three
          compact historic districts, plus scenic downtown Hamilton, showcase a
          variety of homes and buildings.
        </p>
      </div>

      <div className={styles.accordion}  onClick={partnersClicker}>
        <p className={styles.accordionTitle}>
Our Partners in the Arts
        </p>
      </div>

      {partnersWasClicked && <div className={styles.accordionContent}>
        <p>
          A multi-arts facility given as a gift to the city by the community in
          honor of Hamilton’s bicentennial, the Fitton Center features rotating
          galleries year-round that are free to view as well as a plethora of
          special programming ranging from art classes to nationally touring
          theater productions.
        </p>
        <hr className={styles.aboutUsHr}/>
        <p>
          A 265 acre sculpture park and outdoor museum nestled on the edge of
          town that combines the lure of nature with the dynamic presence of
          more than 60 pieces of monumental sculpture. One of the few such
          facilities of its scale in the United States, Pyramid Hill is a
          setting where landscape and art come together in natural galleries.
        </p>
      </div>}

      <div className={styles.accordion} onClick={missionClicker}>
        <p className={styles.accordionTitle}>Our Board</p>
      </div>

      {missionWasClicked && <div className={styles.accordionContent}>
<div className={styles.boardContent}>
<div> 
OFFICERS:
<br/>
President: Jacob Stone<br/>
Vice President: Taylor Welch<br/>
Secretary: Dianne Fitton<br/>
Treasurer: Marie Brown
</div>
<div> 
BOARD:<br/>
Nick Bauer<br/>
Rhonda Brown<br/>
Don Garrett<br/>
Nick Garuckas<br/>
Marcia Koenig<br/>
Nancy O’Neill<br/>
Steve Timmer<br/>
Karen Wittmer
</div>
<div> 
ADVISORY BOARD:<br/>
Sherry Armstead<br/>
Neil Cohen<br/>
Mike Dingeldein  <br/>     
Patti Froelke<br/>
Gerry Hammond<br/>
Tim Naab<br/>
Sue Samoviski
</div>
</div>
      </div>}
      </div>
    </SlidingBox>
  );
};
export default AboutUs;
