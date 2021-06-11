import "./App.css";
import { Fragment, useState } from "react";

import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import AboutUs from "./components/aboutUs/AboutUs";
import Sculptures from "./components/sculptures/Sculptures";
import BikeRacks from "./components/bikeRacks/BikeRacks";
import GettingAround from "./components/gettingAround/GettingAround";




function App() {
  const [chosenOption, setChosenOption] = useState("The Sculptures");

  const SCULPTURES = chosenOption === "The Sculptures";
  const ARTISTS = chosenOption === "Artists";
  const BIKE_RACKS = chosenOption === "Sculptural Bike Racks";
  const GETTING_AROUND = chosenOption === "Getting Around";
  const ABOUT_US = chosenOption === "About Us";

  const mainChoiceHandler = (choice) => {
    console.log(choice);
    setChosenOption(choice);
  };

  return (
    <Fragment>
      <Header />
      <SideBar clickedChoice={mainChoiceHandler} mapOpen={GETTING_AROUND} bikeRacksOpen={BIKE_RACKS} />
      {(chosenOption === 'The Sculptures' || ABOUT_US) && <Sculptures />}
      {ABOUT_US && <AboutUs />}
      {BIKE_RACKS && <BikeRacks />}
      {GETTING_AROUND && <GettingAround />}
    </Fragment>
  );
}

export default App;
