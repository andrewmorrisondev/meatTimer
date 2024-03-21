// components
import Timer from '../Timer/Timer'

// css
import styles from './Steak.module.css'

const Steak = ({ steak, page, timersActive }) => {

  return (
    <>
      {page === 'cook' ? (
        // CookPage
        <div key={steak.id} className={styles.steak}>
          <h1>{steak.name}</h1>
          <Timer 
            steak={steak}
            timersActive={timersActive}
          />
        </div>
      ) : (
        // Input Page
        <div key={steak.id} className={styles.steak}>
          <h1>{steak.name}</h1>
        </div>
      )}
    </>
  );
};

export default Steak;
