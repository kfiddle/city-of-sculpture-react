import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

import styles from "./SideBar.module.css";


  const ABOUT_US = {
    id: "1",
    title: "About Us",
  }
  const SCULPTURES = 
  {
    id: "2",
    title: "The Sculptures",
  }
  const ARTISTS =
  {
    id: "3",
    title: "The Artists",
  }
  const GETTING_AROUND =
  {
    id: "4",
    title: "Getting Around",
  }
  const BIKE_RACKS =
  {
    id: "5",
    title: "Sculptural Bike Racks",
  }
  const HAMILTON =
  {
    id: "6",
    title: "Hamilton",
  }
  const CONTACT_US =
  {
    id: "7",
    title: "Contact Us",
  }
const menuItems = [ABOUT_US, SCULPTURES, ARTISTS, GETTING_AROUND, BIKE_RACKS, HAMILTON, CONTACT_US]



const SideBar = (props) => {
  const [sideBarPosition, setSideBarPosition] = useState("translateX(-30vw)");
  const [currentChoice, setCurrentChoice] = useState(SCULPTURES);
  const [sideBarLocked, setSideBarLock] = useState(false);

  



  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setSideBarPosition("translateX(15vw)");
    }, 150);
  }, []);

  const clicked = (choice) => {
    props.clickedChoice(choice);
  };

  const lock = () => {
    setSideBarLock(true)
  }

  const displayOptions = menuItems.map((option) => (
    <MenuItem key={option.id} title={option.title} clicked={clicked} locked={sideBarLocked} lock={lock} />
  ));

  return (
    <div className={styles.sideBar} style={{ transform: sideBarPosition }}>
      <div className={styles.menuContainer}>{displayOptions}</div>;
    </div>
  );
};

export default SideBar;
