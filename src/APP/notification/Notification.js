import React from "react";
import PropTypes from "prop-types";
import styles from "./Notification.module.css";

const Notification = ({ message }) => {
  return (
    <div className={styles.divNotification}>
      <h2 className={styles.messageNotification}>{message}</h2>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
