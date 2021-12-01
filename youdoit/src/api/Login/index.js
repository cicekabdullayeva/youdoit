import axios from "axios";
// import apiConfig from '../../config/apiConfig'
// import * as Auth from 'utils/authentication';

const axiosInstance = axios.create({
    baseURL: `https://common.youdoit.app/api/v0`,
    // responseType: "json",
    // headers: {
    //     'Content-type': 'application/json',
    //     "Accept-Language": "Az"
    // }
})
// axiosInstance.interceptors.request.use(
//     (request) => {
//         let data = Auth.getData();
//         if (data) {
//             request.headers.Authorization = `Bearer ${data?.token}`;
//         }
//         return request;
//     },
//     error => {
//         console.log(error)
//     }
// )
axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {

    console.log(error.response.status)
    // if (error.response.status === 406) {
    //     localStorage.clear();
    //     window.location.reload();
    // }
    // return Promise.reject(error);
});

export default axiosInstance;