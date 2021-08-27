const defaultState = 0;
//function reducer(state = defaultState, action)
function reducerUno(state = defaultState, { type, payload }) {
  switch (type) {
    case "findCurrentItem":
      return state + 1;
    default:
      return state;
  }
}

export default reducerUno;
