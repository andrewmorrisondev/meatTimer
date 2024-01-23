import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Timer.module.css';

const Timer = ({ steak }) => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [waitTimeRemaining, setWaitTimeRemaining] = useState(0);
  const [waitTimerActive, setWaitTimerActive] = useState(true);

  const steakData = useSelector((state) => state.steak);

  const findLongestCookTime = () => {
    let longestCookTime = 0;

    steakData.forEach((s) => {
      if (s.totalTime > longestCookTime) {
        longestCookTime = s.totalTime;
      }
    });

    return longestCookTime;
  };

  const findCookTime = () => {
    const selectedSteak = steakData.find((s) => s.id === steak.id);
    return selectedSteak ? selectedSteak.totalTime : 0;
  };

  useEffect(() => {
    const selectedCookTime = findCookTime();
    const longestCookTime = findLongestCookTime();
    const totalSeconds = selectedCookTime * 60;

    setTimeRemaining(totalSeconds);

    if (selectedCookTime < longestCookTime) {
      const waitTimeSeconds = (longestCookTime - selectedCookTime) * 60;
      setWaitTimeRemaining(waitTimeSeconds);
    } else {
      setWaitTimerActive(false);
    }

    // Update the countdown every second for wait timer
    const waitTimerInterval = setInterval(() => {
      setWaitTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Clean up wait timer interval on component unmount or when wait timer is up
    return () => {
      clearInterval(waitTimerInterval);
      setWaitTimerActive(false);
    };
  }, [steak, steakData]);

  useEffect(() => {
    // Update the countdown every second for main timer when wait timer is finished
    if (waitTimeRemaining === 0 && !waitTimerActive) {
      const mainTimerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);

      // Clean up main timer interval on component unmount
      return () => clearInterval(mainTimerInterval);
    }
  }, [waitTimeRemaining, waitTimerActive]);

  // Format seconds into minutes:seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className={styles.timer}>
      {waitTimeRemaining > 0 ? (
        <div>
          Wait Timer: {formatTime(waitTimeRemaining)}
          <br />
        </div>
      ) : null}
      Main Timer: {formatTime(timeRemaining)}
    </div>
  );
};

export default Timer;
