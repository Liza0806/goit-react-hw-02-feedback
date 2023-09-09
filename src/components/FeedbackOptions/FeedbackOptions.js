import PropTypes from 'prop-types';
import { OptionButton } from "./FeedbackOptions.styled.jsx"

export const FeedbackOptions = ({options, onLeaveFeedback }) =>{
    return (
        options.map(option=>(<OptionButton type="button" onClick={onLeaveFeedback}  data-type={option} key={option}>
       {option}
          </OptionButton>))
       
    )
   
}
FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func.isRequired,
};