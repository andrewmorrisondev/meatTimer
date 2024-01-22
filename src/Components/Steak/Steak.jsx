import cookData from '../../assets/cookData'

// css
import styles from './Steak.module.css'



const Steak = ({ steak }) => {

  return (
    <div key={steak.id} className={styles.steak}>
      <h1>{steak.name}</h1>
      <h2>{steak.totalTime}</h2>
    </div>
  )
}

export default Steak