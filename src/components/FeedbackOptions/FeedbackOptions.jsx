import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.scss";
import sprite from "../../images/sprites.svg";

const FeedbackOption = ({ onLeaveFeedback, options, onLeaveFeedbackNew }) => {
  return (
    <>
      {options.map((option) => (
        <button
          key={option}
          className={styles.btn}
          onClick={() => onLeaveFeedback(option)}
          type="button"
        >
          {option}
        </button>
      ))}
      <button
        className={styles.btnRef}
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
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default FeedbackOption;
