import React from 'react';
import Dail from '../Dial/Dail';

const Dispaly = (props) => {
    return (
        <div style={{border:'2px solid green', margin:'5px', borderRadius:'5px'}}>
           <h2>Name: {props.name}</h2> 
           <p>So far steps today: {props.steps}</p>
           <Dail steps={props.steps}></Dail>
        </div>
    );
};
export default Dispaly;