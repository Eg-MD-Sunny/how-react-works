import React from 'react';

const Dispaly = (props) => {
    return (
        <div style={{border:'2px solid green', margin:'5px', borderRadius:'5px'}}>
           <h2>Name: {props.name}</h2> 
           <p>So far steps today: {props.steps}</p>
        </div>
    );
};

export default Dispaly;