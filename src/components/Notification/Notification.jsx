import PropTypes from "prop-types";
import styles from "./Notification.module.scss";

const Notification = ({ message }) => {
  return (
    <>
      <p className={styles.desc}>{message}</p>
    </>
  );
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
