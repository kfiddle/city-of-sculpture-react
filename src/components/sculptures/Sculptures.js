import { useState, useEffect } from "react";
import { listOfSculptures } from "./ListOfSculptures";

import TileGallery from "../tileGallery/TileGallery";
import SingleSculpture from "./SingleSculpture";
import styles from "./Sculptures.module.css";

const Sculptures = (props) => {
  const [sculpturesPosition, setSculpturesPosition] =
    useState("translateX(100vw)");

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setSculpturesPosition("translateX(0)");
    }, 500);
  }, []);

  const displayedSculptures = listOfSculptures.map((sculpture) => (
    <SingleSculpture
      key={sculpture.id}
      source={sculpture.source}
      size={sculpture.size}
    ></SingleSculpture>
  ));

  return (
    <TileGallery className={'sculptureGalleryDiv'}position={sculpturesPosition}>
      {displayedSculptures}
    </TileGallery>
  );
};

export default Sculptures;
