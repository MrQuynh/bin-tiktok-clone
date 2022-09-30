import {
    USER_LOG_IN,
    SET_SUGGEST_ACCOUNTS,
    COMMENTS_NOW,
    MESSAGE_AUTHOR_LIST,
    GET_LIST_CMT,
    CURRENT_USER_INFO,
} from './constants';
const user_log_in = localStorage.getItem('USER_LOG_IN');

const initState = {
    userLogIn: { userLogIn: user_log_in ?? null, status: user_log_in ? true : false },

    suggestAccount: [],
    currentUser: [],
    messageAuthorList: ['hello quynh'],
    listComments: [],
    commentsNow: [],
};

// const initState = [
//     { userLogIn: user_log_in ?? null, status: user_log_in ? true : false },
//     { suggestAccount: [] },
//     { currentUser: [] },
//     { messageAuthorList: ['hello quynh'] },
// ];

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
        case GET_LIST_CMT:
            return {
                ...state,
                listCmt: action.payload,
            };
        case COMMENTS_NOW:
            return {
                ...state,
                commentsNow: [action.payload, ...state.commentsNow],
            };
        case MESSAGE_AUTHOR_LIST:
            return { ...state, messageAuthorList: [...state.messageAuthorList, action.payload] };

        default:
            throw new Error('Invalid action...');
    }
}

export { initState };
export default reducer;
