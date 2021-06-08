import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

import styles from "./SideBar.module.css";

const menuItems = [
  {
    id: "1",
    title: "About Us",
  },
  {
    id: "2",
    title: "The Sculptures",
  },
  {
    id: "3",
    title: "The Artists",
  },
  {
    id: "4",
    title: "Getting Around",
  },
  {
    id: "5",
    title: "Sculptural Bike Racks",
  },
  {
    id: "6",
    title: "Hamilton",
  },
  {
    id: "7",
    title: "Contact Us",
  },
];

const SideBar = (props) => {
  const [sideBarPosition, setSideBarPosition] = useState("translateX(-30vw)");

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setSideBarPosition("translateX(15vw)");
    }, 150);
  }, []);

  const clicked = (choice) => {
    props.clickedChoice(choice);
  };

  const displayOptions = menuItems.map((option) => (
    <MenuItem key={option.id} title={option.title} clicked={clicked} />
  ));

  return (
    <div className={styles.sideBar} style={{ transform: sideBarPosition }}>
      <div className={styles.menuContainer}>{displayOptions}</div>;
    </div>
  );
};

export default SideBar;
