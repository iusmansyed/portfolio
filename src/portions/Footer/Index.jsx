import React from "react";
import styles from "./Index.module.css";
import "remixicon/fonts/remixicon.css";
const Index = () => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div
          className={styles.text}
         
        >
          <div>

          <h1>THE LANGUAGES</h1>
          <h2>ON WHICH I WORKED</h2>
          </div>
        </div>
        <div className={styles.iconsDiv}>
          <div className={styles.icos}>
            <i class="ri-reactjs-fill"></i>
            <h2>REACT JS</h2>
          </div>
          <div className={styles.icos}>
            <i class="ri-reactjs-fill"></i>

            <h2>REACT-NATIVE</h2>
          </div>
          <div className={styles.icos}>
            <div className={styles.js}>
              <h1 className={styles.java}>JS</h1>
            </div>
            <h2>JAVA-SCRIPT</h2>
          </div>
          <div className={styles.icos}>
            <i class="ri-html5-line"></i>
            <h2>HTML</h2>
          </div>
          <div className={styles.icos}>
            <i class="ri-css3-fill"></i>
            <h2>CSS</h2>
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
