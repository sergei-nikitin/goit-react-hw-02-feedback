import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.divStatistics}>
      <p className={styles.textStatistics}>Good: {good}</p>
      <p className={styles.textStatistics}>Neutral: {neutral}</p>
      <p className={styles.textStatistics}>Bad: {bad}</p>
      <p className={styles.textStatistics}>Total: {total}</p>
      <p className={styles.textStatistics}>
        Positive feetback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};

export default Statistics;
