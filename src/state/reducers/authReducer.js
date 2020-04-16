const ActionTypes = {
    SAVE_TOKEN: 'SAVE_TOKEN',
};

// Action Creators
export const saveToken = (token) => {
    return {
        type: ActionTypes.SAVE_TOKEN,
        payload: token,
    };
};

// Reducer
export default function reducer(state = {}, action = {}) {
    switch (action.type) {
        case ActionTypes.SAVE_TOKEN: {
            return {...state, token: action.payload};
        }

        default: {
            return state;
        }
    }
}
