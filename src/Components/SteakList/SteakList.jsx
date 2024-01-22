import { useSelector } from 'react-redux'

// components
import Steak from '../Steak/Steak'

import styles from './SteakList.module.css'

const SteakList = () => {

  const steakData = useSelector((state) => state.steak)

  return (
    <>
    <div className={styles.steaks}>
      {steakData.map((steak) => (
        // <div key={steak.id} className={styles.steak}>
        //   <h1>{steak.name}</h1>
        // </div>
          <Steak key={steak.id} steak={steak}/>
      ))}
    </div>
    </>
  )
}

export default SteakList