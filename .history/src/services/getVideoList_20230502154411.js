import * as request from '~/utils/httpRequest';

export const getVideoList = async ({ type, page }) => {
    try {
        const res = await request.get('videos', {
            params: {
                type,
                page: page,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
