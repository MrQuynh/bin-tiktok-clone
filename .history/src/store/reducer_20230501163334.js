import {
    USER_LOG_IN,
    SET_SUGGEST_ACCOUNTS,
    COMMENTS_NOW,
    MESSAGE_AUTHOR_LIST,
    GET_LIST_CMT,
    CURRENT_USER_INFO,
    SET_LANGUAGE,
    SET_MODEL,
    SET_VOLUME,
    SET_FOLLOWING_ACCOUNTS,
    SET_TYPE_STATUS,
    SET_LIST_VIDEO_WATCHING,
    SET_CURRENT_USER_VIDEO,
} from './constants';
const user_log_in = localStorage.getItem('USER_LOG_IN');

const initState = {
    userLogIn: { userLogIn: user_log_in ?? null, status: user_log_in ? true : false },

    suggestAccount: [],
    followingAccounts: [],
    currentUser: [],
    messageAuthorList: ['hello quynh'],
    listComments: [],
    commentsNow: [],
    language: JSON.parse(localStorage.getItem('LANGUAGE')) || 'vi',
    modalRedux: JSON.parse(localStorage.getItem('MODAL')) || 'light',
    volumeRedux: JSON.parse(localStorage.getItem('VOLUME')) / 100 || 1,
    typeStatusRedux: 'HOME',
    listVideoWatchingRedux: [],
    currentUserVideoRedux: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case USER_LOG_IN:
            return {
                data: action.payload,
            };
        case SET_SUGGEST_ACCOUNTS:
            return {
                ...state,
                suggestAccount: [...state.suggestAccount, ...action.payload],
            };
        case SET_FOLLOWING_ACCOUNTS:
            return {
                ...state,
                followingAccounts: [...state.followingAccounts, ...action.payload],
            };
        case CURRENT_USER_INFO:
            return {
                ...state,
                currentUser: action.payload,
            };
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            };
        case GET_LIST_CMT:
            return {
                ...state,
                listCmt: action.payload,
            };
        case COMMENTS_NOW:
            return {
                ...state,
                commentsNow: [...state.commentsNow, action.payload],
            };
        case MESSAGE_AUTHOR_LIST:
            return { ...state, messageAuthorList: [...state.messageAuthorList, action.payload] };
        case SET_MODEL:
            return {
                ...state,
                modalRedux: action.payload,
            };
        case SET_VOLUME:
            const volume = action.payload;
            localStorage.setItem('VOLUME', volume);
            return {
                ...state,
                volumeRedux: volume / 100,
            };
        case SET_TYPE_STATUS:
            return {
                ...state,
                typeStatusRedux: action.payload,
            };
        case SET_LIST_VIDEO_WATCHING:
            // console.log('hello', action.payload);
            return {
                ...state,
                listVideoWatchingRedux: action.payload,
            };
        case SET_CURRENT_USER_VIDEO:
            return {
                ...state,
                currentUserVideoRedux: action.payload,
            };

        default:
            throw new Error('Invalid action...');
    }
}

export { initState };
export default reducer;
