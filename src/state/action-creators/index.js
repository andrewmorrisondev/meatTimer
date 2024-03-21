export const addSteak = (steak) => {
  return (dispatch) => {
    dispatch({
      type: 'add',
      payload: {
        id: steak.id,
        name: steak.name,
        doneness: steak.doneness,
        thickness: steak.thickness,
        totalTime: steak.totalTime,
        cookTimes: steak.cookTimes,
        phase: 'waiting',
      }
    })
  }
}

export const setPhase = (steak) => {
  // console.log(steak)
  return (dispatch) => {
    dispatch({
      type: 'setPhase',
      payload: {
        id: steak.id,
        phase: steak.phase,
      }
    })
  }
}

export const resetSteak = () => {
  return (dispatch) => {
    dispatch({
      type: 'reset',
    })
  }
}

export const setWaitTime = (steak) => {
  return (dispatch) => {
    dispatch({
      type: 'setWaitTime',
      payload: {
        id: steak.id,
        waitTimeRemaining: steak.waitTimeRemaining,
      }
    })
  }
}

export const setPreFlipTime = (steak) => {
  return (dispatch) => {
    dispatch({
      type: 'setPreFlipTime',
      payload: {
        id: steak.id,
        preFlipTimeRemaining: steak.preFlipTimeRemaining,
      }
    })
  }
}

export const setPostFlipTime = (steak) => {
  return (dispatch) => {
    dispatch({
      type: 'setPostFlipTime',
      payload: {
        id: steak.id,
        postFlipTimeRemaining: steak.postFlipTimeRemaining,
      }
    })
  }
}

// actions.js
// import * as actionTypes from './actionTypes';

// export const addSteak = (steak) => ({
//   type: actionTypes.ADD_STEAK,
//   payload: {
//     id: steak.id,
//     name: steak.name,
//     doneness: steak.doneness,
//     thickness: steak.thickness,
//     totalTime: steak.totalTime,
//     cookTimes: steak.cookTimes,
//     phase: 'waiting',
//   }
// });

// export const setPhase = (id, phase) => ({
//   type: actionTypes.SET_PHASE,
//   payload: { id, phase }
// });

// export const resetSteak = () => ({
//   type: actionTypes.RESET_STEAK
// });

// export const setWaitTime = (id, waitTimeRemaining) => ({
//   type: actionTypes.SET_WAIT_TIME,
//   payload: { id, waitTimeRemaining }
// });

// export const setPreFlipTime = (id, preFlipTimeRemaining) => ({
//   type: actionTypes.SET_PRE_FLIP_TIME,
//   payload: { id, preFlipTimeRemaining }
// });

// export const setPostFlipTime = (id, postFlipTimeRemaining) => ({
//   type: actionTypes.SET_POST_FLIP_TIME,
//   payload: { id, postFlipTimeRemaining }
// });