import axios from 'axios';
// const linkApi = 'https://tiktok.fullstack.edu.vn/api/';
let token = localStorage.getItem('TOKEN');
if (token) {
    token = token?.slice(1, token.length - 1);
}
const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type':
        //     'multipart/form-data; boundary=AaB03x' +
        //     '--AaB03x' +
        //     'Content-Disposition: file' +
        //     'Content-Type: png' +
        //     'Content-Transfer-Encoding: binary' +
        //     '...data... ' +
        //     '--AaB03x--',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        type: 'formData',
    },
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export const post = async (path, options = {}) => {
    const response = await request.post(path, options);
    return response.data;
};
export const patch = async (path, options = {}) => {
    const response = await request.patch(path, options);
    return response.data;
};
export const DELETE = async (path, options = {}) => {
    const response = await request.delete(path, options);
    return response.data;
};

export default request;
