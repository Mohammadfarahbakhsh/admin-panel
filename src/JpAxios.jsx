import axios from "axios";

export const jpAxios = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    // headers:{
    //     Authorization:"nothing",
    //     "Content-Type":"nothing/json"
    // },
    timeout:3000,
    timeoutErrorMessage:"More than 3 seconds have passed"
})