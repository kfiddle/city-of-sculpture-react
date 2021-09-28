import Modal from "../modal/Modal";
import Card from "../Card";

import styles from "./SculptureDetails.module.css";

const SculptureDetails = (props) => {
  const { title, source, description } = props.sculpture;

  let imageSrc =
    props.type === "sculpture"
      ? "images/sculptures/" + source
      : "images/bikeRacks/" + source;

  const closeModal = () => {
    props.closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div>{title}</div>

      <img
        src={imageSrc}
        // className={`${styles.sculptureImage} ${
        //   imageHoverState ? styles.hover : ""
        // }`}
      />
      <div>{description}</div>
    </Modal>
  );
};

export default SculptureDetails;
