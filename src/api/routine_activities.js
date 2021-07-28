import axios from 'axios';

// const BASE = 'https://calm-castle-35968.herokuapp.com/api'
const BASE = 'http://localhost:4000/api'

export async function getActivitiesFromRoutines(activityId) {
    try {
        const { data } = await axios.get(`${BASE}/activities/${activityId}/routines`);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function postCountAndDuration(count, duration, token, routineId) {
    try {
        const { data } = await axios.post(`${BASE}/routines/${routineId}/activities`, {
            count,
            duration,
        }, { headers: { 'Authorization': `Bearer ${token}` } });
        return data;
    } catch (error) {
        throw error;
    }
}