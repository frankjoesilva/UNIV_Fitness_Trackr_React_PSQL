import axios from 'axios';

const BASE = 'https://calm-castle-35968.herokuapp.com/api'

export async function getUserRegister(username, password) {
    try {
        const { data } = await axios.post(`${BASE}/users/register`, {
            username,
            password
        });
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getUserLogin(username, password) {
    try {
        const { data } = await axios.post(`${BASE}/users/login`, {
            username,
            password
        });
        console.log('data', data)
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getUsersMe() {
    try {
        const { data } = await axios.get(`${BASE}/users/me`);
        return data;
    } catch (error) {
        throw error;
    }
}