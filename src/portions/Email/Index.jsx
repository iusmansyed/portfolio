import React from "react";
import styles from "./Index.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msgError, setMsgError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [txtError, setTxtError] = useState(false);
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
      console.log(message, email, name);
    } else {
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
      setMsgError(true);
      setMailError(true);
      setTxtError(true);
      console.log("hello world");
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
                  style={{
                    borderColor: msgError ? "red" : "",
                    boxShadow: msgError ? "1px 0 20px red" : "",
                  }}
                />
              </span>

              <div
                style={{
                  opacity: msgError ? 1 : 0,
                  transition: "2s",
                  marginTop: "10px",
                  marginLeft: msgError ? "150px" : "",
                }}
                className={styles.alert}
              >
                <h5 style={{ color: "red", textShadow: "1px 0 10px" }}>
                  PLEASE FILL THE FIELD{" "}
                  <i
                    class="ri-error-warning-line"
                    style={{
                      fontSize: "20px",
                      position: "relative",
                      top: "5px",
                    }}
                  ></i>
                </h5>
              </div>
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
                  style={{
                    borderColor: mailError ? "red" : "",
                    boxShadow: mailError ? "1px 0 20px red" : "",
                  }}
                />
              </span>
              <div
                style={{
                  opacity: msgError ? 1 : 0,
                  transition: "2s",
                  marginTop: "10px",
                  marginLeft: mailError ? "150px" : "",
                }}
                className={styles.alert}
              >
                <h5 style={{ color: "red", textShadow: "1px 0 10px" }}>
                  PLEASE FILL THE FIELD{" "}
                  <i
                    class="ri-error-warning-line"
                    style={{
                      fontSize: "20px",
                      position: "relative",
                      top: "5px",
                    }}
                  ></i>
                </h5>
              </div>
            </div>
            <div className={styles.form2}>
              <h1>Enter Your Message</h1>
              <textarea
                type="text"
                placeholder="Enter your message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{
                  borderColor: txtError ? "red" : "",
                  boxShadow: txtError ? "1px 0 20px red" : "",
                }}
              />
              <div
                style={{
                  opacity: msgError ? 1 : 0,
                  transition: "2s",
                  marginTop: "10px",
                  marginLeft: mailError ? "250px" : "",
                }}
                className={styles.alert}
              >
                <h5 style={{ color: "red", textShadow: "1px 0 10px" }}>
                  PLEASE FILL THE FIELD{" "}
                  <i
                    class="ri-error-warning-line"
                    style={{
                      fontSize: "20px",
                      position: "relative",
                      top: "5px",
                    }}
                  ></i>
                </h5>
              </div>
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
