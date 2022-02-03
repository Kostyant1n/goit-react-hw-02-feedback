import PropTypes from "prop-types";
import styles from "./Section.module.scss";

const Section = ({ title, children }) => {
  return (
    <section>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Section;
