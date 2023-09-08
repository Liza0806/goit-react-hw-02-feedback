import React from "react"
import { Statistics } from "../Statistics" 
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions"
import { Section } from "../Section" 
import { NotificationManager} from "react-notifications"
import { FeedbackContainer } from "./FeedbackStyled.js"
import PropTypes from 'prop-types';

export class Feedback extends React.Component {
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
       const {good, neutral, bad} = this.state;
        return good + neutral + bad;
      };
    
      countPositiveFeedbackPercentage = () => {
        const {good, neutral, bad} = this.state;
        let totalFeedback = good + neutral + bad;
        return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
      };
  options = Object.keys(this.state);

    render () {
    return (
        <FeedbackContainer>
<Section title="Please leave feedback">
  <FeedbackOptions
    options={this.options}
    onLeaveFeedback={this.onLeaveFeedback}
  />
</Section>
<Section title="Statistics">
{this.countTotalFeedback() === 0 ? (
          NotificationManager.info('Info message')
          ) : (
  <Statistics
    good={this.state.good}
    neutral={this.state.neutral}
    bad={this.state.bad}
    total={this.countTotalFeedback()}
    positivePercentage={this.countPositiveFeedbackPercentage()}
  />)}
</Section>
</FeedbackContainer>
    )}
}
Feedback.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number
};