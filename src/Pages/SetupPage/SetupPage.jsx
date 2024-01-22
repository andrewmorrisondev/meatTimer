import SteakInput from '../../Components/SteakInput/SteakInput'
import BeginButton from './../../Components/BeginButton/BeginButton'

// css
import styles from  './SetupPage.module.css'

const SetupPage = () => {
  return (
    <>
    <div className={styles.container}>
      <h1>Setup Timer Form</h1>
      <SteakInput />
    </div>
    <BeginButton />
    </>
  )
}

export default SetupPage