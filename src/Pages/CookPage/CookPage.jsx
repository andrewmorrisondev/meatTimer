import { useNavigate } from 'react-router-dom'

// components
import SteakList from '../../Components/SteakList/SteakList'
import NextSteps from '../../Components/NextSteps/NextSteps'

// css
import styles from './CookPage.module.css'

const CookPage = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.steakList}>
          <SteakList page={'cook'}/>
        </div>
        <NextSteps />
        <div
          className={styles.return} 
          onClick={() => handleClick()}
        >
          <h1>End Session</h1>
        </div>
      </div>
    </>
  )
}

export default CookPage