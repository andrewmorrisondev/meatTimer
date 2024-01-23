import React, { useState, useEffect } from 'react'
import styles from './Timer.module.css'
import { useSelector } from 'react-redux'

const Timer = ({ steak }) => {
  const [preFlipTimeRemaining, setPreFlipTimeRemaining] = useState(0)
  const [postFlipTimeRemaining, setPostFlipTimeRemaining] = useState(0)
  const [waitTimeRemaining, setWaitTimeRemaining] = useState(0)

  const steakData = useSelector((state) => state.steak)

  const findLongestCookTime = () => {
    let longestCookTime = 0

    steakData.forEach((s) => {
      if (s.totalTime > longestCookTime) {
        longestCookTime = s.totalTime
      }
    })

    return longestCookTime
  }

  // useEffect for Longest Cook Time Calculation:
  useEffect(() => {
    const longestCookTime = findLongestCookTime()

    // Set wait time if the steak doesn't have the longest cook time
    if (steak.totalTime < longestCookTime) {
      const waitTimeSeconds = (longestCookTime - steak.totalTime) * 60
      setWaitTimeRemaining(waitTimeSeconds)
    }
  }, [steak, steakData])

  // useEffect for Wait Timer Countdown:
  useEffect(() => {
    // Update the countdown every second for wait timer
    const waitTimerInterval = setInterval(() => {
      setWaitTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    // Clean up wait timer interval on component unmount or when wait timer is up
    return () => clearInterval(waitTimerInterval)
  }, [])

  // useEffect for Pre-Flip Timer Initialization:
  useEffect(() => {
    // If there is no wait timer, start the pre-flip timer immediately
    if (waitTimeRemaining === 0) {
      setPreFlipTimeRemaining(steak.cookTimes[0] * 60)
    }
  }, [waitTimeRemaining, steak])

  // useEffect for Post-Flip Timer Initialization:
  useEffect(() => {
    // Start the post-flip timer when pre-flip timer is finished
    if (preFlipTimeRemaining === 0) {
      setPostFlipTimeRemaining(steak.cookTimes[1] * 60)
      const postFlipTimerInterval = setInterval(() => {
        setPostFlipTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
      }, 1000)

      // Clean up post-flip timer interval on component unmount
      return () => clearInterval(postFlipTimerInterval)
    }
  }, [preFlipTimeRemaining, steak])

  // useEffect for Pre-Flip Timer Countdown:
  useEffect(() => {
    // Start the pre-flip timer when wait timer is finished
    if (waitTimeRemaining === 0) {
      const preFlipTimerInterval = setInterval(() => {
        setPreFlipTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
      }, 1000)

      // Clean up pre-flip timer interval on component unmount
      return () => clearInterval(preFlipTimerInterval)
    }
  }, [waitTimeRemaining])


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
  }

  // render
  return (
    <div className={styles.timer}>
      {waitTimeRemaining > 0 && (
        <div>
          Wait Timer: {formatTime(waitTimeRemaining)}
          <br />
        </div>
      )}
      Pre-Flip Timer: {formatTime(preFlipTimeRemaining)}
      <br />
      Post-Flip Timer: {formatTime(postFlipTimeRemaining)}
    </div>
  );
};

export default Timer
