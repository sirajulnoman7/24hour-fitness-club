import React from 'react';
import './FitnessInfo.css'
const FitnessInfo = (props) => {
    const { title, id, age, body, picture, time } = props.fitnessData
    console.log(props)
    return (
        <div >

            <div className='border rounded containers'>
                <img className=' img ' src={picture} alt="" />
                <div className="fitness-info">
                    <h2 className='text-2xl text-semibold py-2 font-bold'>{title}</h2>
                    <p className='text-sm py-2 m-1'> {body}</p>
                    <p className='text-md font-serif font-semibold mb-2'>For Age: {age}</p>
                    <p className='text-md font-serif font-semibold'>Time required : {time} s</p>

                </div>
                <button className='btn px-12 rounded-md py-2 mt-5  bg-violet-500 hover:bg-blue-700'>
                    <p className=' text-white flex text-center font-semibold '>TRY US FREE</p>
                </button>
            </div>
        </div>
    );
};

export default FitnessInfo;