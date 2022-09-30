import {
    SET_USER_INFO,
    USER_LOG_IN,
    MESSAGE_AUTHOR_LIST,
    SET_SUGGEST_ACCOUNTS,
    GET_LIST_CMT,
    CURRENT_USER_INFO,
} from './constants';

export const setUserInfo = (payload) => ({
    type: SET_USER_INFO,
    payload,
});
export const userLogIn = (payload) => ({
    type: USER_LOG_IN,
    payload,
});
export const setSuggestAccount = (payload) => ({
    type: SET_SUGGEST_ACCOUNTS,
    payload,
});
export const setCurrentUserInfo = (payload) => ({
    type: CURRENT_USER_INFO,
    payload,
});
export const getListCmt = (payload) => ({
    type: GET_LIST_CMT,
    payload,
});
export const getMessageAuthorList = (payload) => ({
    type: MESSAGE_AUTHOR_LIST,
    payload,
});
export const setFollowingAccount = (payload) => ({
    type: SET_SUGGEST_ACCOUNTS,
    payload,
});
