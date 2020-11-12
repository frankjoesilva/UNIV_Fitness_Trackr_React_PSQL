import axios from 'axios';

const BASE = 'http://localhost:4000/api'

export async function getActivitiesFromRoutines(activityId) {
    try {
        const { data } = await axios.get(`${BASE}/activities/${activityId}/routines`);
        return data;
    } catch (error) {
        throw error;
    }
}