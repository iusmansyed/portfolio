import React from "react";
import styles from "./Index.module.css";
import "remixicon/fonts/remixicon.css";
const Index = () => {
  return (
    <>
      <div className={styles.borderDiv}>
        <div className={styles.border}></div>
      </div>
      <div className={styles.mainDiv}>
        <div className={styles.text}>
          <h1>SOCIAL MEDIA ACCOUNT</h1>
          <h2>WHERE YOU CAN REACH ME</h2>
        </div>
        <div className={styles.links}>
          <div className={styles.icon}>
            <a href="https://github.com/">
              <i class="ri-github-fill"></i>
              <h2>GITHUB</h2>
            </a>
          </div>
          <div className={styles.icon}>
            <a href="https://www.instagram.com/">
              <i class="ri-instagram-fill"></i>
              <h2>INSTAGRAM</h2>
            </a>
          </div>
          <div className={styles.icon}>
            <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100073023027085">
              <i class="ri-facebook-circle-fill"></i>
              <h2>FACEBOOK</h2>
            </a>
          </div>
          <div className={styles.icon}>
            <a href="">
              <i class="ri-linkedin-box-fill"></i>
              <h2>LINKEDIN</h2>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.borderDiv}>
        <div className={styles.border}></div>
      </div>
    </>
  );
};

export default Index;
