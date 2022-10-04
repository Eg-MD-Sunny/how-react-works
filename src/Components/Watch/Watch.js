import React, { useEffect, useState } from 'react';

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
        <div>
            <h2>This is my smart watch</h2>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={stepCount}>De Dour............</button>
        </div>
    );
};

export default Watch;