import axios from 'axios';

const BASE = 'http://localhost:4000/api'

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

export async function postActivities(name, description) {
    try {
        const { data } = await axios.post(`${BASE}/activities`, {
            name,
            description
        });
        return data;
    } catch (error) {
        throw error;
    }
}