import React from "react";
import styles from "./Index.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Index = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    if (message !== "" && email !== "" && name !== "") {
        setEmail("");
        setMessage("");
        setName("");
        e.preventDefault();
      toast("Your message has been send", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      emailjs
        .sendForm(
          "service_gjpr14t",
          "template_lu2t8ue",
          form.current,
          "ITrGtnUzooNBE_6VI"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
        
    } else if (message === "" && email === "" && name === "") {
      toast("please fill the fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      console.log(":)")
    }
  };
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.text}>
          <h1>SEND A MESSAGE TO ME</h1>
          <h2>FOR ANY KIND OF QUERY</h2>
        </div>
        <form className={styles.subDiv} ref={form} onSubmit={sendEmail}>
          <div>
            <div className={styles.form}>
              <h1>Enter Your Name</h1>
              <span className={styles.inp}>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  name="user_name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </span>
            </div>
            <div className={styles.form}>
              <h1>Enter Your Email</h1>
              <span className={styles.inp}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="user_email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </span>
            </div>
            <div className={styles.form2}>
              <h1>Enter Your Message</h1>
              <textarea
                type="text"
                placeholder="Enter your message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>
        </form>
        <div className={styles.btn}>
          <button onClick={sendEmail}>
            Submit
            <span className={styles.arrow}>
              <i class="ri-send-plane-line"></i>
            </span>
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Index;
