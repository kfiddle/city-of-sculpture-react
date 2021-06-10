import "./App.css";
import { Fragment, useState } from "react";

import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import AboutUs from "./components/aboutUs/AboutUs";
import Sculptures from "./components/sculptures/Sculptures";
import BikeRacks from './components/bikeRacks/BikeRacks';

const SCULPTURES = "Sculptures";
const ABOUT_US = "About Us";
const ARTISTS = "Artists";
const BIKE_RACKS = 'Sculptural Bike Racks';

function App() {
  const [chosenOption, setChosenOption] = useState(SCULPTURES);

  const mainChoiceHandler = (choice) => {
    console.log(choice)
    setChosenOption(choice);
  };

  return (
    <Fragment>
      <Header />
      <SideBar clickedChoice={mainChoiceHandler} />
      <Sculptures />
      {chosenOption === ABOUT_US && <AboutUs />}
      {chosenOption === BIKE_RACKS && <BikeRacks />}
    </Fragment>
  );
}

export default App;
