const steakData = []

const reducer = (state = steakData, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload]
    case "setPhase":
      return state.map(steak => {
        if (steak.id === action.payload.id) {
          return {
            ...steak,
            phase: action.payload.phase,
          }
        }
        return steak
      })

      case "setWaitTime":
        return state.map(steak => {
          if (steak.id === action.payload.id) {
            return {
              ...steak,
              waitTimeRemaining: action.payload.waitTimeRemaining,
            }
          }
          return steak
        })

      case "setPreFlipTime":
        return state.map(steak => {
          if (steak.id === action.payload.id) {
            return {
              ...steak,
              preFlipTimeRemaining: action.payload.preFlipTimeRemaining,
            }
          }
          return steak
        })
      case "setPostFlipTime":
        return state.map(steak => {
          if (steak.id === action.payload.id) {
            return {
              ...steak,
              postFlipTimeRemaining: action.payload.postFlipTimeRemaining,
            }
          }
          return steak
        })
    case "reset":
      return []
    default:
      return state
  }
}

export default reducer

// reducer.js
// import * as actionTypes from './actionTypes';

// const initialState = [];

// const steakReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.ADD_STEAK:
//       return [...state, action.payload];

//     case actionTypes.SET_PHASE:
//       return state.map(steak =>
//         steak.id === action.payload.id ? { ...steak, phase: action.payload.phase } : steak
//       );

//     case actionTypes.SET_WAIT_TIME:
//       return updateSteakProperty(state, action.payload.id, 'waitTimeRemaining', action.payload.waitTimeRemaining);

//     case actionTypes.SET_PRE_FLIP_TIME:
//       return updateSteakProperty(state, action.payload.id, 'preFlipTimeRemaining', action.payload.preFlipTimeRemaining);

//     case actionTypes.SET_POST_FLIP_TIME:
//       return updateSteakProperty(state, action.payload.id, 'postFlipTimeRemaining', action.payload.postFlipTimeRemaining);

//     case actionTypes.RESET_STEAK:
//       return initialState;

//     default:
//       return state;
//   }
// };

// const updateSteakProperty = (state, id, property, value) => {
//   return state.map(steak =>
//     steak.id === id ? { ...steak, [property]: value } : steak
//   );
// };

// export default steakReducer;