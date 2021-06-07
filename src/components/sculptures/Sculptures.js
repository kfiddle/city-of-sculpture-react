import { listOfSculptures } from "./ListOfSculptures";
import styles from "./Sculptures.module.css";

const Sculptures = (props) => {
  const displayedSculptures = listOfSculptures.map((sculpture) => (
    <p key={sculpture.id}>{sculpture.size}</p>
  ));

  return <div className={styles.sculptureDivPanel}>{displayedSculptures}</div>;
};

export default Sculptures;
