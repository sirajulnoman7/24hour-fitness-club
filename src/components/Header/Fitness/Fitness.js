import React, { useEffect, useState } from 'react';
import FitnessInfo from '../../fitnessInfo/FitnessInfo';
import './Fitness.css'
const Fitness = () => {
    const [fitness, setFitness] = useState([]);
    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setFitness(data))
    }, []);

    return (
        <div className='main-fitness-container pt-8'>

            <div className='fitness-container'>
                {
                    fitness.map(fitData => <FitnessInfo fitnessData={fitData} key={fitData.id}></FitnessInfo>)
                }

            </div>
            <div>
                <h3>Fitness exesorice :{fitness.length}</h3>
            </div>
        </div>
    );
};

export default Fitness;