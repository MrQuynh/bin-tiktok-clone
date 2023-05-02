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
    SET_MODEL,
    SET_VOLUME,
    SET_TYPE_STATUS,
    SET_LIST_VIDEO_WATCHING,
    SET_CURRENT_USER_VIDEO,
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
export const setFollowingAccounts = (payload) => ({
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

export const setCommentsNow = (payload) => ({
    type: COMMENTS_NOW,
    payload,
});
export const setModalRedux = (payload) => ({
    type: SET_MODEL,
    payload,
});
export const setVolumeRedux = (payload) => ({
    type: SET_VOLUME,
    payload,
});
export const setTypeStatusRedux = (payload) => ({
    type: SET_TYPE_STATUS,
    payload,
});
export const setListVideoWatchingRedux = (payload) => ({
    type: SET_LIST_VIDEO_WATCHING,
    payload,
});
export const setCurrentUserRedux = (payload) => ({
    type: SET_CURRENT_USER_VIDEO,
    payload,
});
