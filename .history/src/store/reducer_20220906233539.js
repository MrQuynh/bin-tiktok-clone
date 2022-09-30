import { USER_LOG_IN, SET_SUGGEST_ACCOUNTS, SET_FOLLOWING_ACCOUNTS, CURRENT_USER_INFO } from './constants';
const user_log_in = localStorage.getItem('USER_LOG_IN');

const initState = [
    { userLogIn: user_log_in ?? null, status: user_log_in ? true : false },
    { suggestAccount: [] },
    { currentUser: [] },
];

function reducer(state, action) {
    switch (action.type) {
        case USER_LOG_IN:
            return {
                data: action.payload,
            };
        case SET_SUGGEST_ACCOUNTS:
            return {
                data: action.payload,
            };
        case CURRENT_USER_INFO:
            return {
                ...state,
                currentUser: action.payload,
            };

        default:
            throw new Error('Invalid action...');
    }
}

export { initState };
export default reducer;
