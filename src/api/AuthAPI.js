import { BaseURL } from "../constants/Common";

export const login = (email, password) => {
    axios.post(`${BaseURL}/login`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': `multipart/form-data`,
        },
        data: {
            email: email,
            password: password,
        }
    })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log('error: ', error.message);
        });
}

export const signUp = (email, password) => {
    axios.post(`${BaseURL}/signup`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': `multipart/form-data`,
        },
        data: {

        }
    })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log('error: ', error.message);
        });
}