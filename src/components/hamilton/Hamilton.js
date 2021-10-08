import SlidingBox from "../slidingBox/SlidingBox";

import styles from "./Hamilton.module.css";

const Hamilton = (props) => {
  return (
    <SlidingBox>
    <div className={styles.innerContentContainer}>
    <div className={styles.statementDiv}>
      <p>
      Located on the Great Miami River in the heart of the Cincinnati-Dayton metroplex, 
      Hamilton is an historically-significant city with approximately 63,000 residents. 
      Home to Miami University Hamilton and the County Seat of Butler County, Hamilton is the area 
      center for government, finance and industry. Known for its unparalleled art, cultural and 
      recreational activities, Hamilton is continually expanding its quality of life offerings. </p>

      <p>The City of Hamilton, the County Seat of Butler County, is an important regional center of business, 
industry, culture, and government. Located in Southwest Ohio, the City of Hamilton is centrally 
located between the Cincinnati and Dayton metropolitan areas. </p>

<p>With big city amenities and small town charm, Hamilton continues to retain the character of 
the city's past while sharpening its focus on a bright, happy future.
      </p>


    </div>

    </div>
  </SlidingBox>
  );
};

export default Hamilton;
