import React from "react";
// import Statistics from "./statistics/Statistics";
import FeetbackOptions from "./feetbackOptions/FeetbackOptions";

class App extends React.Component {
  static defaultProps = {
    initialValueOfButtonGood: 0,
    initialValueOfButtonNeutral: 0,
    initialValueOfButtonBad: 0,
    initialValueTotal: 0,
    initialValuePositiveFeedback: 0,
  };

  state = {
    good: this.props.initialValueOfButtonGood,
    neutral: this.props.initialValueOfButtonNeutral,
    bad: this.props.initialValueOfButtonBad,
    total: this.props.initialValueTotal,
    positiveFeedback: this.props.initialValuePositiveFeedback,
  };

  handleFeedback = (evt) => {
    if (evt.target.id === "good") {
      this.setState((prevState) => ({ good: prevState.good + 1 }));
    } else if (evt.target.id === "neutral") {
      this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
    } else if (evt.target.id === "bad") {
      this.setState((prevState) => ({ bad: prevState.bad + 1 }));
    }
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState((prevState) => ({
      total: prevState.total + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(() => ({
      positiveFeedback: Math.round((100 * this.state.good) / this.state.total),
    }));
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>

        <FeetbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeetback={this.handleFeedback}
        ></FeetbackOptions>

        <h2>Statistics</h2>

        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.state.total}</p>
        <p>Positive feetback: {this.state.positiveFeedback}%</p>
      </div>
    );
  }
}

export default App;
