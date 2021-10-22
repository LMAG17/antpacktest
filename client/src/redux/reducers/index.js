
const initialState = {
  users: [],
  post: [],
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    default:
      return { ...state }
  }
}

export default reducer;