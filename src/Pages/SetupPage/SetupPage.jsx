import SteakInput from '../../Components/SteakInput/SteakInput'
import ConfirmButton from '../../Components/ConfirmButton/ConfirmButton'

// css
import styles from  './SetupPage.module.css'

const SetupPage = () => {
  return (
    <>
    <div className={styles.container}>
      <h1>Setup Timer Form</h1>
      <SteakInput />
      <ConfirmButton />
    </div>
    </>
  )
}

export default SetupPage