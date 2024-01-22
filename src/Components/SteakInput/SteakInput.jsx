import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../../state'

import cookData from '../../assets/cookData'

// components
import SteakList from '../SteakList/SteakList'

// css
import styles from './SteakInput.module.css'

function SteakInput() {

    const generateRandomKey = () => {
        return `${Date.now()}-${Math.floor(Math.random() * 1000)}`
    }

    const steakList = useSelector((state) => state.steak)
    const dispatch = useDispatch()

    const addSteak = (steak) => {
        dispatch(actionCreators.addSteak(steak))
    }

    const removeSteaks = () => {
        dispatch(actionCreators.resetSteak())
    }

    const [steakDetails, setSteakDetails] = useState({
        id: generateRandomKey(),
        name: '',
        doneness: 'rare',
        thickness: 0.75,
    })
    
    const handleInputChange = (evt) => {
        const { name, value } = evt.target
        setSteakDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }))
    }

    let cookTimes

    const totalCookTime = (steak) => {
        let d = steak.doneness
        let t = steak.thickness
        cookTimes = cookData[d][t]
        let totalTime = cookTimes.reduce((a, c) => a + c)
        return totalTime
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const computedCookTime = totalCookTime(steakDetails)

        const updatedSteak = {
            ...steakDetails,
            totalTime: computedCookTime,
            cookTimes: cookTimes,
        }
        
        console.log(updatedSteak)
        addSteak(updatedSteak)
        
        setSteakDetails({
            id: generateRandomKey(),
            name: '',
            doneness: 'rare',
            thickness: 0.75,
            totalTime: computedCookTime,
            cookTimes: cookTimes
        })
    }

    const handleRemove = () => {
        removeSteaks()
        console.log('Steaks Deleted')
    }
    
    useEffect(() => {
        console.log('Updated Steak List:', steakList)
    }, [steakList])

    return (
        <>
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Who's Steak?"
                        name="name"
                        value={steakDetails.name}
                        onChange={handleInputChange}
                    />
                    <select
                        name="doneness"
                        value={steakDetails.thickness}
                        onChange={handleInputChange}
                    >
                        <option defaultValue="rare">Rare</option>
                        <option value="mediumRare">Medium Rare</option>
                        <option value="medium">Medium</option>
                        <option value="mediumWell">Medium Well</option>
                        <option value="well">Well</option>
                    </select>

                    <select
                        name="thickness"
                        value={steakDetails.thickness}
                        onChange={handleInputChange}
                    >
                        <option defaultValue={0.75}>0.75in</option>
                        <option value={1}>1in</option>
                        <option value={1.25}>1.25in</option>
                        <option value={1.5}>1.5in</option>
                        <option value={1.75}>1.75in</option>
                    </select>
                    <input type="submit" />
                </form>
                <button onClick={() => handleRemove()}>Start Over</button>
            </div>
            <SteakList />
        </>
    )
}

export default SteakInput