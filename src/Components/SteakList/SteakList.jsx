// imports
import { useSelector } from 'react-redux'

// components
import Steak from '../Steak/Steak'

// css
import styles from './SteakList.module.css'

const SteakList = ({ page }) => {

  const steakData = useSelector((state) => state.steak)

  let totalCook = 0

  const findTotalCook = () => {
    steakData.forEach((steak) => {
      if (steak.totalTime > totalCook) totalCook = steak.totalTime
    })
  }

  findTotalCook()

  return (
    <>
      <div className={styles.steaks}>
        {steakData.map((steak) => (
          <Steak key={steak.id} steak={steak} totalCook={totalCook} page={page}/>
        ))}
      </div>
    </>
  )
}

export default SteakList