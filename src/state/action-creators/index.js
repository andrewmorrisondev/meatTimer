export const addSteak = (steak) => {
  return (dispatch) => {
    dispatch({
      type: 'add',
      payload: {
        name: steak.name,
        doneness: steak.doneness,
        thickness: steak.thickness,
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