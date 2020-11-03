import axios from 'axios';

const BASE = 'https://calm-castle-35968.herokuapp.com/'

export async function getRoutines() {
    try {
        const { data } = await axios.get(`${BASE}/routines`);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getRoutinesByUsername(username) {
    try {
        const { data } = await axios.get(`${BASE}/users/${username}/routines`);
        return data;
    } catch (error) {
        throw error;
    }
}