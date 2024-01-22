import { useNavigate } from 'react-router-dom'
// css
import styles from './BeginButton.module.css'

const BeginButton = () => {
  const navigate = useNavigate()

  const beginTimer = () => {
    console.log('Timer has Started!')
  }

  const handleClick = () => {
    navigate('/countdown')
    beginTimer()
  }

  return (
    <>
      <div 
        className={styles.container}
        onClick={() => handleClick()}
      >
        <h1>Begin Button</h1>
      </div>
    </>
  )
}

export default BeginButton