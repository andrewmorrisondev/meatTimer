// imports
import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// store
import { actionCreators } from '../../state'

// css
import styles from './Timer.module.css'

const Timer = ({ steak, timersActive }) => {
  const steakData = useSelector((state) => state.steak)
  const dispatch = useDispatch()

  const findLongestCookTime = () => {
    let longestCookTime = 0
    steakData.forEach((s) => {
      if (s.totalTime > longestCookTime) {
        longestCookTime = s.totalTime
      }
    })
    return longestCookTime
  }

  const longestCookTime = useMemo(findLongestCookTime, [steakData])

  useEffect(() => {
    dispatch(actionCreators.setWaitTime({id: 0, waitTime: 0}))
    // This effect is meant to run only once when the component mounts
  }, [dispatch])

  // UseEffect hooks for different timer phases
  // Adjust these according to your logic for starting different timers
  useEffect(() => {
    // Initialization logic for wait, pre-flip, post-flip timers
    // For example:
    if (!timersActive) {
      // Initialize or reset timers here
    }
  }, [timersActive, dispatch, steak.id, longestCookTime])

  useEffect(() => {
    if (steak.totalTime === longestCookTime) dispatch(actionCreators.setPhase({id: steak.id, phase: 'side-a'}))
    if (timersActive) {
      if (steakData.waitTimeRemaining === 0) dispatch(actionCreators.setPhase({id: steak.id, phase: 'side-a'}))
      if (steakData.preFlipTimeRemaining === 0) dispatch(actionCreators.setPhase({id: steak.id, phase: 'side-b'}))
      if (steakData.postFlipTimeRemaining === 0) dispatch(actionCreators.setPhase({id: steak.id, phase: 'complete'}))
    }
  }, [dispatch, steak.id, steak.totalTime, steakData, timersActive, longestCookTime])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
  }

  // render
  return (
    <div className={styles.timer}>
      {steak.phase === 'waiting' && (
        <div>
          Wait: {formatTime(steakData.waitTimeRemaining)}
        </div>
      )}
      {steak.phase === 'side-a' && (
        <div>
          Cook First Side: {formatTime(steakData.preFlipTimeRemaining)}
        </div>
      )}
      {steak.phase === 'side-b' && (
        <div>
          Cook Second Side: {formatTime(steakData.postFlipTimeRemaining)}
        </div>
      )}
    </div>
  )
}

export default Timer
