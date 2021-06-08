import { listOfSculptures } from "./ListOfSculptures";
import SingleSculpture  from './SingleSculpture';
import styles from "./Sculptures.module.css";

const Sculptures = (props) => {
  const displayedSculptures = listOfSculptures.map((sculpture) => (
    <SingleSculpture key={sculpture.id} source={sculpture.source} size={sculpture.size}></SingleSculpture>
    
  ));

  return <div className={styles.sculptureDivPanel}>{displayedSculptures}</div>;
};

export default Sculptures;
