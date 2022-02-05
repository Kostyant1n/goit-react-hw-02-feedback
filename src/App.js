import { Component } from "react";
import "./App.css";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import styles from "./App.module.scss";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState((state) => ({
      [option]: state[option] + 1,
    }));
  };

  new = () => {
    this.setState(() => ({
      good: 0,
      neutral: 0,
      bad: 0,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    parseInt((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    return (
      <div className={styles.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
            onLeaveFeedbackNew={this.new}
          />

          <Statistics
            state={this.state}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
