import axios from 'axios';

const BASE = 'https://calm-castle-35968.herokuapp.com/api'

export async function getActivitiesFromRoutines(activityId) {
    try {
        const { data } = await axios.get(`${BASE}/activities/${activityId}/routines`);
        return data;
    } catch (error) {
        throw error;
    }
}