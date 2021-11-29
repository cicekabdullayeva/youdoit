import axios from "axios";
// import apiConfig from '../../config/apiConfig'
// import * as Auth from 'utils/authentication';

const axiosInstance = axios.create({
    baseURL: `https://user.youdoit.app/api/v0/users`,
    responseType: "json",
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


export default axiosInstance;