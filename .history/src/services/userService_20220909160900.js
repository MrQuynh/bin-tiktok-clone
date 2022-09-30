import * as request from '~/utils/httpRequest';

export const getSuggested = async ({ page, perPage }) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getFollowing = async ({ page }) => {
    try {
        const res = await request.get('me/followings', {
            params: {
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const getAnUser = async (nicknameValue) => {
    try {
        const res = await request.get(`users${nicknameValue}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const getAVideo = async (id) => {
    try {
        const res = await request.get(`users/${id}/videos`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const postLogin = async (dataSend, errorMess) => {
    try {
        const res = await request.post('auth/login', dataSend);
        return res;
    } catch (error) {
        return (errorMess = error.response);
    }
};
export const postUpdateUser = async (dataSend, errorMess) => {
    try {
        const res = await request.patch('auth/me', dataSend);
        return res;
    } catch (error) {
        return (errorMess = error.response);
    }
};
export const postRegister = async (dataSend, errorMess) => {
    try {
        const res = await request.post('auth/register', dataSend);
        return res.data;
    } catch (error) {
        return (errorMess = error.response);
    }
};
// like post
export const postLikedPost = async ({ idUser }) => {
    try {
        const res = await request.post(`videos/${idUser}/like`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const postUnLikedPost = async ({ idUser }) => {
    try {
        const res = await request.post(`videos/${idUser}/unlike`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
// follow
export const postFollow = async (idUser, errorMess) => {
    try {
        const res = await request.post(`users/${idUser}/follow`);
        return res.data;
    } catch (error) {
        return (errorMess = error.response);
    }
};
export const postUnFollow = async (idUser, errorMess) => {
    try {
        const res = await request.post(`users/${idUser}/unfollow`);
        return res.data;
    } catch (error) {
        return (errorMess = error.response);
    }
};
// upload
export const postCreateVideo = async (dataSend, errorMess) => {
    try {
        const res = await request.post('videos', dataSend);
        return res;
    } catch (error) {
        return (errorMess = error.response);
    }
};
// delete
export const deleteVideo = async (idVideo, errorMess) => {
    try {
        const res = await request.DELETE(`videos/${idVideo}`);
        return res;
    } catch (error) {
        return (errorMess = error.response);
    }
};
