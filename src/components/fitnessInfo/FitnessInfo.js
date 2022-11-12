import React from 'react';
import './FitnessInfo.css'
const FitnessInfo = (props) => {
    const { name, id, age, gender, picture, time } = props.fitnessData
    console.log(props)
    return (
        <div className='border'>
            <img className='w-100 img ' src={picture} alt="" />
            <div className="fitness-info">
                <h2 className='text-2xl text-semibold'>Name:{name}</h2>
                <p className='text-xl'>Age: {age}</p>
                <p className='text-xl'>Gender: {gender}</p>
                <p className='text-xl'>Time: {time} second</p>
                <p></p>
            </div>
        </div>
    );
};

export default FitnessInfo;