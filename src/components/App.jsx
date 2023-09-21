import React from "react"
import { useState } from 'react';
import { Statistics } from "./Statistics"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Section } from "./Section"
import { Error } from './ErrorMessage'

export const App = () => {
 
  
   const [counterGood, setCounterGood] = useState(0);
   const [counterBad, setCounterBad] = useState(0);
   const [counterNeutral, setCounterNeutral] = useState(0);
  
  const handleCounterIncrement = (counterName) => {
     if (counterName === 'counterGood') {
       console.log(1)
       setCounterGood((prevState) => prevState + 1);
     } else if (counterName === 'counterBad') {
       console.log(2)
       setCounterBad((prevState) => prevState + 1);
     } else if (counterName === 'counterNeutral') {
       console.log(3)
       setCounterNeutral((prevState) => prevState + 1);
     }
   };
  const countTotalFeedback = counterGood + counterBad + counterNeutral;
  const countPositiveFeedbackPercentage =
    countTotalFeedback > 0 ? Math.round((counterGood / countTotalFeedback) * 100) : 0;
    const options = {
      counterGood: counterGood,
      counterBad: counterBad,
      counterNeutral: counterNeutral,
    };

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


        <div>
<Section title="Please leave feedback">
  <FeedbackOptions
    options={options}
    handleCounterIncrement={handleCounterIncrement}
  />
</Section>
<Section title="Statistics">

<Error></Error>
 {countTotalFeedback !==0 &&   <Statistics
    good={counterGood}
    neutral={counterNeutral}
    bad={counterBad}
    total={countTotalFeedback}
    positivePercentage={countPositiveFeedbackPercentage}
  />}         
 
</Section>
</div>    

    </div>
  );
};



