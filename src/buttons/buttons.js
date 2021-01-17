import React from "react";

class Buttons extends React.Component {
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

  handleGood = () => {
    this.countTotalFeedback();
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutral = () => {
    this.countTotalFeedback();
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };
  // с использованием return
  handleBad = () => {
    this.countTotalFeedback();
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
        // вместо использования метода countTotalFeedback()
        // total: prevState.total + 1,
      };
    });
  };

  countTotalFeedback = () => {
    console.log(this.state.good);
    this.countPositiveFeedbackPercentage();
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
        <button
          type="button"
          onClick={this.handleGood}
          //   onClick={this.countTotalFeedback}
        >
          Good
        </button>
        <button type="button" onClick={this.handleNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBad}>
          Bad
        </button>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.state.total}</p>
          <p>Positive feedback: {this.state.positiveFeedback}%</p>
        </div>
      </div>
    );
  }
}

export default Buttons;
