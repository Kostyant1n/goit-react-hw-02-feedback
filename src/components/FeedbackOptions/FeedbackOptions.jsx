import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.scss";
import sprite from "../../images/sprites.svg";

const FeedbackOption = ({
  onLeaveFeedbackGood,
  onLeaveFeedbackNeutral,
  onLeaveFeedbackBad,
  onLeaveFeedbackNew,
  options,
}) => {
  return (
    <>
      <button
        className={styles.btn}
        onClick={() => onLeaveFeedbackGood(options.good)}
        type="button"
      >
        <svg className={styles.good}>
          <use href={sprite + "#icon-sentiment_very_satisfied"}></use>
        </svg>
      </button>
      <button
        className={styles.btn}
        onClick={() => onLeaveFeedbackNeutral(options.neutral)}
        type="button"
      >
        <svg className={styles.neutral}>
          <use href={sprite + "#icon-sentiment_neutral"}></use>
        </svg>
      </button>
      <button
        className={styles.btn}
        onClick={() => onLeaveFeedbackBad(options.bad)}
        type="button"
      >
        <svg className={styles.bad}>
          <use href={sprite + "#icon-sentiment_very_dissatisfied"}></use>
        </svg>
      </button>
      <button
        className={styles.btn}
        onClick={() => onLeaveFeedbackNew(options.new)}
        type="button"
      >
        <svg className={styles.new}>
          <use href={sprite + "#icon-cached"}></use>
        </svg>
      </button>
    </>
  );
};
FeedbackOption.propTypes = {
  onLeaveFeedbackGood: PropTypes.func.isRequired,
  onLeaveFeedbackNeutral: PropTypes.func.isRequired,
  onLeaveFeedbackBad: PropTypes.func.isRequired,
  onLeaveFeedbackNew: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};
export default FeedbackOption;
