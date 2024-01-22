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