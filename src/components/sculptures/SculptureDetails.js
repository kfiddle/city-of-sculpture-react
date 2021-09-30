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
     

      <img
        src={imageSrc}
        // className={`${styles.sculptureImage} ${
        //   imageHoverState ? styles.hover : ""
        // }`}
      />

      <div>{title}</div>
      <div>{artist}</div>
      <div>{address}</div>
      <div>{description}</div>
    </Modal>
  );
};

export default SculptureDetails;
