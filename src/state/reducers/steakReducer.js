const steakData = []

const reducer = (state = steakData, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload]
    case "reset":
      return []
    default:
      return state
  }
}

export default reducer