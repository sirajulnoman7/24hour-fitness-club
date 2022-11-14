import React, { useState } from 'react';
import image from '../../images/teacher.webp'

import './Cart.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { locationDot } from '@fortawesome/locationDot';
const Cart = (props) => {
    const { exercise } = props;
    let quantity = 0
    let time = 0;
    for (const singleExercise of exercise) {
        console.log(singleExercise)
        quantity = singleExercise.quantity + quantity

        time = time + (singleExercise.quantity * singleExercise.time);

    }
    // break time open
    const [breakTime, setBreakTime] = useState([]);
    let breakTimeTen = 0;
    const breakTen = (id) => {
        breakTimeTen = id
        setBreakTime(breakTimeTen);
        console.log(breakTimeTen, 'click')
        return breakTimeTen

    }


    // break time end 

    return (
        <div className='px-4 cart '>
            <div className="cart-header flex ">
                <img className='w-14 h-14 rounded-full' src={image} alt="" />
                <div className='ml-4'>
                    <h3 className='font-bold text-lg'>Zahid Hossain</h3>
                    <p><span>Sydney, Australia</span></p>
                    {/* <FontAwesomeIcon icon={location}></FontAwesomeIcon> */}
                </div>
            </div>
            <div className="width-container flex mt-8 border bg-neutral-300 rounded-lg py-2">
                <div className='px-4 '>
                    <p><span className='font-bold text-lg'>76</span> kg</p>
                    <p>Weight</p>
                </div>
                <div className='px-4 '>
                    <p> <span className='font-bold text-lg'>6.3</span></p>
                    <p>Heigth </p>
                </div>
                <div>
                    <p ><span className='font-bold text-lg'>27</span>yer</p>
                    <p>Age</p>

                </div>
            </div>
            <h2 className='font-bold  py-5 flex justify-start'>Add A break</h2>
            <div>
                <div className='bg-neutral-300 py-3 rounded'>

                    <button onClick={() => breakTen(10)} className='rounded-full hover:bg-blue-700  bg-white px-2 py-2  sm-mr-0'>10 <span >s</span></button>
                    <button onClick={() => breakTen(20)} className='rounded-full hover:bg-blue-700  bg-white px-2 py-2 ml-1 sm-mr-0'>20 <span >s</span></button>
                    <button onClick={() => breakTen(30)} className='rounded-full hover:bg-blue-700  bg-white px-2 py-2 ml-1 sm-mr-0'>30 <span >s</span></button>
                    <button onClick={() => breakTen(40)} className='rounded-full hover:bg-blue-700  bg-white px-2 py-2 ml-1 sm-mr-0'>40 <span >s</span></button>


                </div>
            </div>
            <h1 className='flex justify-start mt-5 text-md font-bold '>Exercise Details</h1>



            <div className='flex justify-between mt-5 bg-slate-300 py-3 px-1 rounded'>
                <h2>Exercise time</h2>
                <h2>{time}<span>second</span></h2>
            </div>
            <div className='flex justify-between mt-5 bg-slate-300 py-3 px-1 rounded'>
                <h2>Break time</h2>
                <h2>{breakTime} <span>second</span></h2>
            </div>
            <button className='bg-blue-700  font-bold px-8 mt-10 rounded py-2'>Activity Completed</button>
        </div>
    );
};

export default Cart;