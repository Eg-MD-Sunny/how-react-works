import React, { useEffect, useState } from 'react';
import Dispaly from '../Display/Dispaly';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const stepCount = ()=>{
        let increaseStepCount = steps + 1;
        setSteps(increaseStepCount);
    }
    useEffect(()=>{
        console.log(steps)    
    },[steps])
    return (
        <div style={{border:"2px solid purple", margin:"20px"}}>
            <h2>This is my smart watch</h2>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={stepCount}>De Dour..........</button>
            <Dispaly name="iPhone13" steps={steps}></Dispaly>
        </div>
    );
};
export default Watch;