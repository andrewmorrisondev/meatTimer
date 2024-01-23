import { useNavigate } from 'react-router-dom'

// components
import SteakList from '../../Components/SteakList/SteakList'

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