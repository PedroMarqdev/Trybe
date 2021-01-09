const defaultState = {
  login: false
};
const newState = {
  login: true
}

const reducer = (state = defaultState, action) => {
  // Change code below this line
    switch(action.type) {
      case 'LOGIN':
      return newState
      default:
      return state
    }
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};