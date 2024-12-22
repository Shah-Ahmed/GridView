import React from "react";
import styles from "./GridLayout.module.css";

const GridLayout: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={`${styles.item} ${styles.ag1}`}>AG1<br />2 of 10</div>
        <div className={`${styles.item} ${styles.ag2}`}>AG2<br />6 of 10</div>
        <div className={`${styles.item} ${styles.ag3}`}>AG3<br />2 of 10 (omega)</div>
        <div className={`${styles.item} ${styles.ag4}`}>AG4<br />3 of 6</div>
        <div className={`${styles.item} ${styles.ag5}`}>AG5<br />3 of 6 (omega)</div>
        <div className={`${styles.item} ${styles.ag6}`}>AG6<br />2 of 6</div>
        <div className={`${styles.item} ${styles.ag7}`}>AG7<br />4 of 6 (omega)</div>
        <div className={`${styles.item} ${styles.ag8}`}>AG8<br />2 of 4</div>
        <div className={`${styles.item} ${styles.ag9}`}>AG9<br />2 of 4 (omega)</div>
        <div className={`${styles.item} ${styles.ag10}`}>AG10<br />auto</div>
      </div>
    </div>
  );
};

export default GridLayout;
