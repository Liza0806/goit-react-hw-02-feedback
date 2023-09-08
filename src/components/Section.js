import PropTypes from 'prop-types';


export const Section = ({title, children}) =>{
    const titleStyle = {
        color: '#333',
        fontSize: '20px',
        marginBottom: '10px',
      };
    return (
    <div>
    <h2  style={titleStyle}>{title}</h2>
    {children}
    </div>)
    
    }
    
    Section.propTypes = {
        title: PropTypes.string,
       
    };