import { useRef, useState } from "react";

import SlidingBox from "../slidingBox/SlidingBox";

// import emailjs from "emailjs-com";

import styles from "./Contact.module.css";

// const userId = "user_ziX5oSLNJRahUxs9dz2xC";
// const serviceId = "service_whc7i1l";
// const templateId = "template_xhux42i";


const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    //   emailjs.send(serviceId, templateId, details, userId);

    

    // setStatus("Sending...");
    // const { name, email, message } = e.target.elements;
    // let details = {
    //   name: name.value,
    //   email: email.value,
    //   message: message.value,
    // };
    // let response = await fetch("http://localhost:5000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(details),
    // });
    // setStatus("Submit");
    // let result = await response.json();
    // alert(result.status);
  };

  return (
    <SlidingBox>
      <div className={styles.innerContentContainer}>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="name">Name:</label> */}
            <input ref={nameRef} type="text" id="name" placeholder="Name" className={styles.inputFields} required />
          </div>
          <div>
            {/* <label htmlFor="email">Email:</label> */}
            <input ref={emailRef} type="email" id="email"  placeholder="Email" className={styles.inputFields} required />
          </div>
          <div>
            {/* <label htmlFor="message">Message:</label> */}
            <textarea ref={messageRef} id="message" placeholder="Message" className={styles.inputFields} required />
          </div>
          <div type="submit" className={styles.submitButton}>{status}</div>
        </form>
      </div>
    </SlidingBox>
  );
};

export default ContactForm;

// 1. credentials from emailJS-

// const userId = "user_ziX5oSLNJRahUxs9dz2xC";
// const serviceId = "service_whc7i1l";
// const templateId = "template_xhux42i";

// 2. submit function which goes with Submit Button.Button
// const submitInfo = () => {

//   let contactInfo = {
//     fullName: inputs.name,
//     emailAddress: inputs.email,
//     message: inputs.message
//   };

//   emailjs.send(serviceId, templateId, contactInfo, userId);
