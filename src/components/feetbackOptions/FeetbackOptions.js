import React from "react";
import PropTypes from "prop-types";
import styles from "./FeetbackOptions.module.css";

const FeetbackOptions = ({ options, onLeaveFeetback }) => {
  return (
    <div className={styles.divBtn}>
      {options.map((option) => (
        <button
          name={option}
          key={option}
          id={option}
          className={styles.button}
          onClick={onLeaveFeetback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeetbackOptions.propTypes = {
  option: PropTypes.string,
  onLeaveFeetback: PropTypes.func,
};

export default FeetbackOptions;
