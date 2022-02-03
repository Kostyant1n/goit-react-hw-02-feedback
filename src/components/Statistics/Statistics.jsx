import PropTypes from "prop-types";
import Notification from "../Notification/Notification";
import styles from "./Statistics.module.scss";

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <>
      <h2 className={styles.title}>Statistics</h2>
      {(good || neutral || bad) === 0 ? (
        <Notification message={"There is no feedback"} />
      ) : (
        <div className={styles.feedbackStatistics}>
          <p className={styles.good}>
            Good: <strong>{good}</strong>
          </p>
          <p className={styles.neutral}>
            Neutral:<strong>{neutral}</strong>
          </p>
          <p className={styles.bad}>
            Bad:<strong> {bad}</strong>
          </p>
          <p className={styles.total}>
            Total: <strong>{total()}</strong>
          </p>
          <p className={styles.feedback}>
            Positive feedback: <strong>{positivePercentage()}%</strong>
          </p>
        </div>
      )}
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
export default Statistics;
