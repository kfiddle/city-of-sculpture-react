import { Fragment, useState, useEffect } from "react";

import TileGallery from "../tileGallery/TileGallery";
import PennyFarthing from "./PennyFarthing";
import SingleSculpture from "../sculptures/SingleSculpture";

import styles from "./BikeRacks.module.css";

const BikeRacks = (props) => {
  const [bikeRiding, setBikeRiding] = useState(true);

  const [bikesDivPosition, setBikesDivPosition] = useState("translateX(-100vw)");

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setBikesDivPosition("translateX(10vw)");
    }, 500);

    // setTimeout(() => {
    //   setBikeRiding(false);
    // }, 30000);
  }, []);

  const BIG = "big",
    H = "horizontal",
    V = "vertical",
    HUGE = "huge";

  const listOfBikeRacks = {
    barclays: H,
    butlerTech: V,
    communityFirst: BIG,
    developmentDisabilities: H,
    fortHamHospital: V,
    hamClass: BIG,
    hamClass25: BIG,
    hamClass25Owl: BIG,
    hamiltonParksConservancy: HUGE,
    hamOrthopaedics: BIG,
    miamiURegionals: H,
    pikeFamily: V,
    primaryHealth: H,
    thyssenkruppBilsten: V,
  };

  const displayedBikeRacks = [];

  for (let bikeRack in listOfBikeRacks) {
    displayedBikeRacks.push(
      <SingleSculpture
        key={Math.random()}
        source={bikeRack + ".jpeg"}
        size={listOfBikeRacks[bikeRack]}
      ></SingleSculpture>
    );
  }
  console.log(displayedBikeRacks);

  return (
    <div className={styles.bikeAndTiles} style={{transform : bikesDivPosition}}>
      <TileGallery className={"bikeGalleryDiv"}>
        {displayedBikeRacks}
      </TileGallery>
      {bikeRiding && <PennyFarthing />}
    </div>
  );
};

export default BikeRacks;
