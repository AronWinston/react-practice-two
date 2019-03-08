import React from 'react';

const userInput = (props) => {
    const style = {
        border:"2px dotted green",
        margin: "10px",
        height: "2em",
        backgroundColor: "orange",
        color: "purple",
        textAlign: "center",
        fontSize: "24px"
    };

    return(
        <div>
        <input type="text" 
        onChange={props.changed} 
        value={props.currentName}
        style= {style} />
        <input type="text"
        value={props.currentHobby}
        onChange={props.hobbychanged}
        style={style} />
        </div>
    )
};

export default userInput;