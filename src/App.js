import "./App.css";
import { Fragment, useState } from "react";

import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import AboutUs from "./components/aboutUs/AboutUs";
import Artists from "./components/artists/Artists";
import Sculptures from "./components/sculptures/Sculptures";
import BikeRacks from "./components/bikeRacks/BikeRacks";
import GettingAround from "./components/gettingAround/GettingAround";
import Contact from "./components/contact/Contact";
import Hamilton from "./components/hamilton/Hamilton";


function App() {
  const [chosenOption, setChosenOption] = useState("The Sculptures");

  const SCULPTURES = chosenOption === "The Sculptures";
  const ARTISTS = chosenOption === "The Artists";
  const BIKE_RACKS = chosenOption === "Sculptural Bike Racks";
  const GETTING_AROUND = chosenOption === "Getting Around";
  const ABOUT_US = chosenOption === "About Us";
  const CONTACT_US = chosenOption === "Contact Us";
  const HAMILTON = chosenOption === "Hamilton";

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
      {CONTACT_US && <Contact />}
      {ARTISTS && <Artists />}
      {HAMILTON && <Hamilton />}

    </Fragment>
  );
}

export default App;
