const steakData = []

const reducer = (state = steakData, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload]
    default:
      return state
  }
}

export default reducer