import React from "react";
import Section from "./section/Section";
import FeetbackOptions from "./feetbackOptions/FeetbackOptions";
import Statistics from "./statistics/Statistics";
import Notification from "./notification/Notification";

class App extends React.Component {
  static defaultProps = {
    initialValueOfButtonGood: 0,
    initialValueOfButtonNeutral: 0,
    initialValueOfButtonBad: 0,
  };

  state = {
    good: this.props.initialValueOfButtonGood,
    neutral: this.props.initialValueOfButtonNeutral,
    bad: this.props.initialValueOfButtonBad,
  };

  handleFeedback = (e) => {
    this.setState((prevState) => {
      return { [e.target.name]: Number(prevState[e.target.name] + 1) };
    });
  };

  countTotal = () => {
    let options = Object.values(this.state);
    const total = options.reduce((acc, option) => (acc += option), 0);
    return total;
  };

  countPercentage = () => {
    const percent = Math.round((this.state.good / this.countTotal()) * 100);
    return percent > 0 ? percent : 0;
  };

  render() {
    let total = this.countTotal();
    // let percentage = this.countPercentage();
    return (
      <div>
        <Section title={"Please leave feedback"}>
          <FeetbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeetback={this.handleFeedback}
          ></FeetbackOptions>
        </Section>

        <Section>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={this.countPercentage()}
          ></Statistics>
        </Section>
        <Section>
          <Notification message={"No feedback given"}></Notification>
        </Section>

        {/* <h2>Statistics</h2>

        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {total}</p>
        <p>Positive feetback: {this.countPercentage()}%</p> */}
      </div>
    );
  }
}

export default App;
