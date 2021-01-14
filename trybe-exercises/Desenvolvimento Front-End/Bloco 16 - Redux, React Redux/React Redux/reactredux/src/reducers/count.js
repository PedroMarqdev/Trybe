const INITIAL_STATE = 0;

const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TASK_COUNT':
      return action.value === 0 ? 1 : action.value
    default:
      return state
  }
};

export default countReducer
