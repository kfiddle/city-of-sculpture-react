import Modal from "../modal/Modal";
// import Card from "../Card";

import styles from "./SculptureDetails.module.css";

const SculptureDetails = (props) => {
  const { title, source, description, artist, address, } = props.sculpture;

  let imageSrc =
    props.type === "sculpture"
      ? "images/sculptures/" + source
      : "images/bikeRacks/" + source;

  const closeModal = () => {
    props.closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
     
      <div className={styles.modalcontainer}>
     <div className={styles.image}>
      <img
        src={imageSrc}
      />
      </div>

      <div className={styles.title}>{title}</div>
      <div className={styles.artist}>{artist}</div>
      <div className={styles.address}>{address}</div>
      <div className={styles.description}>{description}</div>
      </div>

    </Modal>
  );
};

export default SculptureDetails;
