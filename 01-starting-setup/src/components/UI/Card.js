import "./Card.css";

/**
 * Card is being used as a customer wrapper component
 * In order to not mess up the nested components style
 * we must use the props.children. and 
 */
const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;