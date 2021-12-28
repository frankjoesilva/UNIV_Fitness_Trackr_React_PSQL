import axios from 'axios';

const BASE = 'https://glacial-crag-53908.herokuapp.com/api'


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

export async function postActivities(name, description, token) {
    try {
        const { data } = await axios.post(`${BASE}/activities`, {
            name,
            description,
        }, { headers: { 'Authorization': `Bearer ${token}` } });
        return data;
    } catch (error) {
        throw error;
    }
}

