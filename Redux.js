import { createStore } from "redux";

const counterRededux = (state = 0, action) => {
  switch (action.type) {
    case "@counter/incremented":
      return state + 1;
    case "@counter/decremented":
      return state - 1;
    default:
      return state;
  }
};
const store = createStore(counterRededux);
store.dispatch({ type: "@counter/incremented" });
store.getState();
store.subscribe(() => {
  console.log(store.getStore);
});
