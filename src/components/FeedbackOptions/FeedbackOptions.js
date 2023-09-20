
import { OptionButton } from "./FeedbackOptions.styled.jsx"

export const FeedbackOptions = ({options, handleCounterIncrement }) =>{
    console.log(options)
    const optionKeys = Object.keys(options);
    return (
   
        optionKeys.map(option=>(<OptionButton type="button" onClick={() => handleCounterIncrement(option)} data-type={option} key={option}>
       {option}
          </OptionButton>))
       
    )
   
}
