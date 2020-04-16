const ActionTypes = {
    SAVE_TOKEN: 'SAVE_TOKEN',
};

// Action Creators
export const SAVE_TOKEN = (token) => ({
    type: ActionTypes.LOGIN,
    payload: token,
});

// Reducer
export default function reducer(state = {}, action = {}) {
    switch (action.type) {
        case ActionTypes.SAVE_TOKEN: {
            return {...state, token: action.token};
        }

        default: {
            return state;
        }
    }
}
