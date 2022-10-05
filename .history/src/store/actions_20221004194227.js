import {
    SET_USER_INFO,
    USER_LOG_IN,
    MESSAGE_AUTHOR_LIST,
    SET_SUGGEST_ACCOUNTS,
    GET_LIST_CMT,
    CURRENT_USER_INFO,
    COMMENTS_NOW,
    SET_FOLLOWING_ACCOUNTS,
    SET_LANGUAGE,
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
export const setSFollowingAccount = (payload) => ({
    type: SET_FOLLOWING_ACCOUNTS,
    payload,
});
export const setLanguage = (payload) => ({
    type: SET_LANGUAGE,
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
export const setCommentsNow = (payload) => ({
    type: COMMENTS_NOW,
    payload,
});
