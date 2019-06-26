import {createStore} from "redux";

const initState = {
    foo: '',
    user: {}
}

// create a simple reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'FOO':
            return { ...state, foo: action.payload };
        case 'CREATE_USER':
            return { ...state, user: action.payload };
        case 'SUBTRACT_MY_POINTS':
            return {
                ...state,
                user: {
                    ...state.user,
                    points: state.user.points - action.points
                }
            }
        default:
            return state
    }
};

export const subtractMyPoints = ({ points }) => {
    return { type: 'SUBTRACT_MY_POINTS', points }
}

// create a store creator
const makeStore = (initialState) => {
    return createStore(reducer, initialState);
};

export default makeStore;