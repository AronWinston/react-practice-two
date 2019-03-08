import React from 'react';
import'./UserOutput.css'
const userOutput = (props) => {
    return(
        <div className="Useroutput">
           <p>Username: {props.username} | Hobby: {props.hobby}</p>
           
        </div> 

    )
};

export default userOutput;