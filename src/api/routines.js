const axios = require('axios')

const BASE = 'http://localhost:4000/api'

export async function getRoutines() {
    try {
        const { data } = await axios.get(`${BASE}/routines`);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getRoutinesByUsername(username) {
    try {
        const { data } = await axios.get(`${BASE}/users/${username}/routines`);
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


