import axios from 'axios';

const BASE = 'https://glacial-crag-53908.herokuapp.com/api'


export async function getUserRegister(username, password) {
    try {
        const { data } = await axios.post(`${BASE}/users/register`, {
            username,
            password
        });
        localStorage.setItem('data.token', data.token)
        return data;
    } catch (error) {
        console.error(error)
    }
}

export async function getUserLogin(username, password) {
    try {
        const { data } = await axios.post(`${BASE}/users/login`, {
            username,
            password
        });
        localStorage.setItem('data.token', data.token)
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getUsersMe(token) {
    try {
        const { data } = await axios.get(`${BASE}/users/me`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return data;
    } catch (error) {
        console.error(error);
    }
}

