const axios = require('axios')

const BASE = 'https://calm-castle-35968.herokuapp.com/api'

export async function getRoutines() {
    try {
        const { data } = await axios.get(`${BASE}/routines`);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getCurrentUserRoutines(token) {
    try {
        const { data } = await axios.get(`${BASE}/users/routines`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return data;
    } catch (error) {
        console.error(error)
    }
}

export async function getRoutinesByUsername(username, token) {
    try {
        const { data } = await axios.get(`${BASE}/users/${username}/routines`,

            { headers: { 'Authorization': `Bearer ${token}` } });
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function postRoutines(name, goal, isPublic, token) {
    try {
        const { data } = await axios.post(`${BASE}/routines`, {
            name,
            goal,
            isPublic
        }, { headers: { 'Authorization': `Bearer ${token}` } });
        return data;
    } catch (error) {
        throw error;
    }
}


