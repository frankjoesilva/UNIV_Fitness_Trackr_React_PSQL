import axios from 'axios';

const BASE = 'https://calm-castle-35968.herokuapp.com/'

export async function getUserRegister() {
    try {
        const { data } = await axios.post(`${BASE}/users/register`, {
            userName: '',
            passWord: ''
        });
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getUserLogin() {
    try {
        const { data } = await axios.post(`${BASE}/users/login`, {
        });
        return data;
    } catch (error) {
        throw error;
    }
}

// export async function getUsers() {
//     try {
//         const { data } = await axios.get(`${BASE}/users/`);
//         return data;
//     } catch (error) {
//         throw error;
//     }
// }

export async function getUsersMe() {
    try {
        const { data } = await axios.get(`${BASE}/users/me`);
        return data;
    } catch (error) {
        throw error;
    }
}