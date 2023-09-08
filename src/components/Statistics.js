import PropTypes from 'prop-types';


export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    const itemStyle = {
        color: 'black',
        fontSize: '20px',
        marginBottom: '10px',
      };
      const contStyle ={
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }
    return (
        <div style={contStyle}>
         <span style={itemStyle}>Good: {good} </span>
<span style={itemStyle}>Neutral: {neutral} </span>
<span style={itemStyle}>Bad: {bad} </span>
<span style={itemStyle}>Total Feedback: {total}</span>
<span style={itemStyle}>Positive Feedback: {positivePercentage} %</span>
</div>)  
   
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};