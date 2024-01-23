// components
import Timer from '../Timer/Timer'

// css
import styles from './Steak.module.css'

const Steak = ({ steak, page }) => {

  return (
    <>
      {page === 'cook' ? (
        // CookPage
        <div key={steak.id} className={styles.steak}>
          <h1>{steak.name}</h1>
          <h2>{steak.totalTime}</h2>
          <Timer steak={steak}/>
        </div>
      ) : (
        // Input Page
        <div key={steak.id} className={styles.steak}>
          <h1>{steak.name}</h1>
          <h2>{steak.totalTime}</h2>
        </div>
      )}
    </>
  );
};

export default Steak;
