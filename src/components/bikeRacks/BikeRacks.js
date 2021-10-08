import { Fragment, useState, useEffect } from "react";

import TileGallery from "../tileGallery/TileGallery";
// import PennyFarthing from "./PennyFarthing";
import SingleSculpture from "../sculptures/SingleSculpture";

import styles from "./BikeRacks.module.css";

const BikeRacks = (props) => {
  // const [bikeRiding, setBikeRiding] = useState(true);

  const [bikesDivPosition, setBikesDivPosition] = useState("translateX(100vw)");

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      // setBikesDivPosition("translateX(23vw)");
      setBikesDivPosition("translateX(0)");
    }, 500);

    // setTimeout(() => {
    //   setBikeRiding(false);
    // }, 30000);
  }, []);

  const BIG = "big",
    H = "horizontal",
    V = "vertical",
    HUGE = "huge";

  // const listOfBikeRacks = {
  //   barclays: H,
  //   butlerTech: V,
  //   communityFirst: BIG,
  //   developmentDisabilities: H,
  //   fortHamHospital: V,
  //   hamClass: BIG,
  //   hamClass25: BIG,
  //   hamClass25Owl: BIG,
  //   hamiltonParksConservancy: HUGE,
  //   hamOrthopaedics: BIG,
  //   miamiURegionals: H,
  //   pikeFamily: V,
  //   primaryHealth: H,
  //   thyssenkruppBilsten: V,
  // };

  const listOfBikeRacks = [
    { id: 1, title: "Barclays", source: 'barclays.jpeg' },
    { id: 2, title: "Butler Tech", source: 'butlerTech.jpeg' },
    { id: 3, title: "Community First Solutions", source: 'communityFirst.jpeg' },
    { id: 4, title: "Butler County Board forDdevelopmental Disabilities", source: 'developmentDisabilities.jpeg' },
    { id: 5, title: "Fort Hamilton Hospital", source: 'fortHamHospital.jpeg' },
    { id: 6, title: "Leadership Hamilton Class 26", source: 'hamClass.jpeg' },
    { id: 7, title: "Leadership Hamilton Class 25", source: 'hamClass25.jpeg' },
    { id: 8, title: "Leadership Hamilton Class 25", source: 'hamClass25Owl.jpeg' },
    { id: 9, title: "Hamilton Parks Conservancy", source: 'hamiltonParksConservancy.jpeg' },
    { id: 10, title: "Miami University Regionals", source: 'miamiURegionals.jpeg' },
    { id: 11, title: "Pike Family", source: 'pikeFamily.jpeg' },
    { id: 11, title: "Primary Health Solutions", source: 'primaryHealth.jpeg' },
    { id: 11, title: "thyssenkrupp Bilsten", source: 'thyssenkruppBilsten.jpeg' },
  ];

  const displayedBikeRacks = [];

  for (let bikeRack of listOfBikeRacks) {
    displayedBikeRacks.push(
      <SingleSculpture
        key={bikeRack.id}
        source={bikeRack.source}
        // size={listOfBikeRacks[bikeRack]}
       title={bikeRack.title}
      ></SingleSculpture>
    );
  }
  console.log(displayedBikeRacks);

  return (
    <div
      className={styles.bikeAndTiles}
      style={{ transform: bikesDivPosition }}
    >
      <TileGallery className={"bikeGalleryDiv"}>
        {displayedBikeRacks}
      </TileGallery>
      {/* {bikeRiding && <PennyFarthing />} */}
    </div>
  );
};

export default BikeRacks;
