import axios from 'axios';

const BASE = 'https://calm-castle-35968.herokuapp.com/'

export async function getActivities() {
    try {
        const { data } = await axios.get(`${BASE}/activities`);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function postRoutinesActivities(routineId) {
    try {
        const { data } = await axios.post(`${BASE}/routines/${routineId}/activities`);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function postActivities() {
    try {
        const { data } = await axios.post(`${BASE}/activities`);
        return data;
    } catch (error) {
        throw error;
    }
}