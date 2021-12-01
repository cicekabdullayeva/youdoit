import Api from './index'

const logIn = (credentials) =>{
    return Api.post(`/users/authenticate`, credentials).then(res => res.data);
}

const signUp = (data) => {
    return Api.post("/users", data).then((res) => res.data);
}

export {
    logIn,
    signUp
}