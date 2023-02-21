import React from "react";
import styles from "./Index.module.css";
import Img from "../../Assets/MYPHOTO.png";
const Index = () => {
  return (
    <>
      {" "}
      <div className={styles.mainDiv}>
        <div>
          <div className={styles.name}>
            <h1>SYED MUHAMMAD USMAN</h1>
            <h2>FRONT-END DEVELOPER</h2>
          </div>
        </div>
        <div className={styles.subDiv}>
          <div className={styles.About}>
            <div className={styles.text} >
              <h1>About Me</h1>
              <p className={styles.detail}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam vel optio, necessitatibus natus illo reprehenderit,
                eaque eos doloremque mollitia blanditiis a distinctio ex ipsam
                eveniet, quasi commodi dolorem animi inventore.
              </p>
            </div>
          </div>
          <div className={styles.image}>
            {" "}
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
