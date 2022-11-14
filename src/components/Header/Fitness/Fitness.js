import React, { useEffect, useState } from 'react';
import { addToDb, storeLocalStorage } from '../../../utilities/fakedb';
import Cart from '../../cart/Cart';
import FitnessInfo from '../../fitnessInfo/FitnessInfo';
import './Fitness.css'
const Fitness = () => {
    const [fitness, setFitness] = useState([]);
    const [exercise, setExercise] = useState([]);
    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setFitness(data))
    }, []);



    useEffect(() => {
        const storeCart = storeLocalStorage();
        const saveCart = [];
        for (const id in storeCart) {
            const addedProduct = fitness.find(addedProductId => addedProductId.id === id)
            console.log(addedProduct)

            if (addedProduct) {
                const quantity = storeCart[id]
                addedProduct.quantity = quantity
                saveCart.push(addedProduct);
            }
        }
        setExercise(saveCart)
    }, [fitness]);

    const tryUsHandler = (tryExercise) => {
        // console.log(tryExercise.id)


        let newFitnessService = [];
        const exist = exercise.find(exerciseItems => exerciseItems.id === tryExercise.id);
        // console.log(exist)
        if (!exist) {
            tryExercise.quantity = 1;
            newFitnessService = [...exercise, tryExercise];
        }
        else {
            const rest = exercise.filter(exerciseId => exerciseId.id !== tryExercise.id);
            exist.quantity = exist.quantity + 1;
            newFitnessService = [...rest, exist];
        }
        setExercise(newFitnessService)
        addToDb(tryExercise.id)
        // console.log('click', exercise)
    }
    return (
        <div className='main-fitness-container pt-8'>

            <div className='fitness-container '>
                {
                    fitness.map(fitData => <FitnessInfo fitnessData={fitData} key={fitData.id} tryUsHandler={tryUsHandler}></FitnessInfo>)
                }

            </div>
            <div >
                <Cart exercise={exercise}></Cart>

            </div>
        </div>
    );
};

export default Fitness;