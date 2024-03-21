// imports
import { useState } from 'react'
import { useSelector } from 'react-redux'

// components
import Steak from '../Steak/Steak'

// css
import styles from './SteakList.module.css'

const SteakList = ({ page }) => {
  const [timersActive, setTimersActive] = useState(false)
  const steakData = useSelector((state) => state.steak)

  let totalCook

  const findTotalCook = () => {
    steakData.forEach((steak) => {
      if (steak.totalTime > totalCook) totalCook = steak.totalTime
    })
  }

  const handleBegin = () => {
    setTimersActive(true)
  }

  findTotalCook()

  return (
    <>
      <div className={styles.steaks}>
        {steakData.map((steak) => (
          <Steak 
            key={steak.id} 
            steak={steak} 
            totalCook={totalCook} 
            page={page}
            timersActive={timersActive}
          />
        ))}
      </div>
      {page === 'cook' && !timersActive &&
        <div className={styles.begin} onClick={ () => handleBegin() }>
            <h1>Begin</h1>
        </div>
      }
    </>
  )
}

export default SteakList