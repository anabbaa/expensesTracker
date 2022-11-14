import React from "react";
import "./Card.css";
const Card =(props)=>{
    {/* card is wrapper props.children to wrap another component but for styling 
and for classes we assuring that any classes add outside it added to the class string card*/}
    const classes = "card " + props.className;
    return(
<div className={classes}>{props.children}

</div>
    );

};
export default Card; 