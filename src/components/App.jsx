import React from "react"
import { Component } from 'react';
import { Statistics } from "./Statistics"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Section } from "./Section"

import { FeedbackContainer } from "./Feedback/Feedback.styled"
import { Error } from './ErrorMessage'

export class App extends Component {


  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (event) => {
    const feedbackType = event.target.dataset.type;
    this.setState(prevState => {
      return {
        
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };
 
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const feedbackValues = Object.values({ good, neutral, bad });
    const total = feedbackValues.reduce((acc, value) => acc + value, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const {good, neutral, bad} = this.state;
    let totalFeedback = good + neutral + bad;
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };
options = Object.keys(this.state);
render() {
  const totalFeedback = this.countTotalFeedback()
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >


        <FeedbackContainer>
<Section title="Please leave feedback">
  <FeedbackOptions
    options={this.options}
    onLeaveFeedback={this.onLeaveFeedback}
  />
</Section>
<Section title="Statistics">
{totalFeedback === 0 ? 
<Error></Error>
           : (
  <Statistics
    good={this.state.good}
    neutral={this.state.neutral}
    bad={this.state.bad}
    total={this.countTotalFeedback()}
    positivePercentage={this.countPositiveFeedbackPercentage()}
  />)}
</Section>
</FeedbackContainer>    

    </div>
  );}
};



