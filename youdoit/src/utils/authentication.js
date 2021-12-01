const setData = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
}

const getData = () => {
    let data = localStorage.getItem("userData");
    if(data){
        return JSON.parse(data);
    }

    return null;
}

const clearData = () => {
    localStorage.clear("userData")
}
export {
    setData,
    getData,
    clearData,
}