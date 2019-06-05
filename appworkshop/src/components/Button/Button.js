import React from 'react';

function Button(props) {
    return (
        <button className={props.css} onClick={props.onActionHandler}>{props.text}</button>
    );
  }
  
  export default Button;