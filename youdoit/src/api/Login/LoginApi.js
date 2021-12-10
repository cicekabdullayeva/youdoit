import Api from './index'

const logIn = (credentials) =>{
    return Api.post(`/users/authenticate`, credentials).then(res => res.data);
}

export {
    logIn,
    signUp
}