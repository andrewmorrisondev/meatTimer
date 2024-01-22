import { useNavigate } from 'react-router-dom'

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
        <h1>Countdown</h1>
      </div>
      <div 
        onClick={() => handleClick()}
      >
        Return
      </div>
    </>
  )
}

export default CookPage