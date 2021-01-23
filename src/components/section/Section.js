import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

// import FeetbackOptions from "./feetbackOptions/FeetbackOptions";

const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={styles.titleSection}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

Section.defaultProps = {
  title: "",
};

export default Section;
