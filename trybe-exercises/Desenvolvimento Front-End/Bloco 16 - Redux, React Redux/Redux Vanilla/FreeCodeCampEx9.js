const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {
    switch(action.type){
        case INCREMENT:
        return state += action.value;
        case DECREMENT:
        return state -= action.value;
        default:
        return state;
    }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
    return {
        type: INCREMENT,
        value: 1
    }
}; // Define an action creator for incrementing

const decAction = () => {
    return {
        type: DECREMENT,
        value: 1
    }
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers