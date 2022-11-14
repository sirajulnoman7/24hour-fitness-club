import React from 'react';
import './FitnessInfo.css'
const FitnessInfo = (props) => {
    const { tryUsHandler } = props
    const { title, age, body, picture, time } = props.fitnessData
    // console.log(props)
    return (
        <div >

            <div className='border rounded containers'>
                <img className=' img ' src={picture} alt="" />
                <div className="fitness-info ">
                    <h2 className='lg-text-2xl text-semibold py-2 sm-py-1 font-bold'>{title}</h2>
                    <p className='text-sm py-2 m-1 sm-py-0 sm-m-0'> {body}</p>
                    <p className='lg-text-md font-serif font-semibold mb-2'>For Age: {age}</p>
                    <p className='lg-text-md font-serif font-semibold'>Time required : {time} s</p>

                </div>
                <button onClick={() => tryUsHandler(props.fitnessData)} className='btn sm-px-4 px-12 rounded-md py-2 mt-5 sm-mt-0 bg-violet-500 hover:bg-blue-700'>
                    <p className=' text-white text-sm flex text-center font-semibold '>TRY US FREE</p>
                </button>
            </div>
        </div>
    );
};

export default FitnessInfo;