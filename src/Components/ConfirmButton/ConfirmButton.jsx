import { useNavigate } from 'react-router-dom'
// css
import styles from './ConfirmButton.module.css'

const ConfirmButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/countdown')
  }

  return (
    <>
      <div 
        className={styles.container}
        onClick={() => handleClick()}
      >
        <h1>Confirm Setup</h1>
      </div>
    </>
  )
}

export default ConfirmButton