import * as request from '~/utils/httpRequest';

export const getVideoList = async ({ type, page }) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                type,
                page: page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
