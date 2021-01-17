import React from "react";
import styles from "./FeetbackOptions.module.css";

const FeetbackOptions = ({ options, onLeaveFeetback }) => {
  return (
    <div className={styles.divBtn}>
      {options.map((option) => (
        <button id={option} className={styles.button} onClick={onLeaveFeetback}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeetbackOptions;
