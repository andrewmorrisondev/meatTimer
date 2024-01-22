import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'

// css
import styles from './SteakInput.module.css'

function SteakInput() {

    const steakList = useSelector((state) => state.steak)
    const dispatch = useDispatch()

    // const { addSteak } = bindActionCreators(actionCreators, dispatch)

    const addSteak = (steak) => {
        dispatch(actionCreators.addSteak(steak))
      }

    const [steakDetails, setSteakDetails] = useState({
        name: '',
        doneness: 'rare',
        thickness: 0.75,
      });
    
      const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setSteakDetails((prevDetails) => ({
          ...prevDetails,
          [name]: value,
        }))
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        // Create new Steak component
        addSteak(steakDetails)
        console.log('New Steak Component:', steakDetails)
    }
    
    useEffect(() => {
        console.log('Updated Steak List:', steakList)
      }, [steakList]);

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
            </div>
        </>
    )
}

export default SteakInput