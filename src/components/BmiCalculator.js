import React, { useEffect, useState } from 'react'
import BmiForm from './BmiForm';

const BmiCalculator = (props) => {

    const {getBmiValue} = props

    const [count, setcount] = useState({
        heightCount : '0',
        weightCount : '0',
    });

    const onChangeInput = (e) => {
        // if(e.target.name == 'heightCount'){
        //     setcount{
        //         heightCount = e.target.value;
        //     }
        // }

        const  {name, value} = e.target
        setcount(prevState => ({
            ...prevState, [name] : value
        }))   
    }

    const resetForm = (e) => {
        e.preventDefault()

        setcount({
            heightCount : '0',
            weightCount : '0',
        });

        getBmiValue(0)
    }
    
    const {heightCount, weightCount} = count

    const metrics = (height, weight) => {
        if(height > 0 && weight > 0){
            const bmi = (weight/height/height) * 10000
            console.log(bmi)
            
            getBmiValue(Math.round(bmi))
        }
    } 

    useEffect(() => {
        console.log('state active')
        // metrics(255,100)
        metrics(heightCount, weightCount)
    }, [heightCount,weightCount]);

    return (
        <div className="card-body">
            <BmiForm
                title={`Height (cm)`}
                type='number'
                name='heightCount'
                value={heightCount}
                onChange={onChangeInput} />

            <BmiForm
                title={`Weight (kg)`}
                type='number'
                name='weightCount'
                value={weightCount}
                onChange={onChangeInput} />
            <button className="btn btn-primary btn- ml-auto" onClick={resetForm}>Reset</button>
        </div>
    )
}

export default BmiCalculator