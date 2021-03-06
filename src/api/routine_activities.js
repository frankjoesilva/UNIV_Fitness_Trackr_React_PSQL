import axios from 'axios';

const BASE = 'https://glacial-crag-53908.herokuapp.com/api'

export async function getActivitiesFromRoutines(activityId, name, description, count, duration, token) {
    try {
        const { data } = await axios.get(`${BASE}/activities/${activityId}/routines`, {
            activityId,
            name,
            description,
            count,
            duration,
        }, { headers: { 'Authorization': `Bearer ${token}` } });
        return data;
    } catch (error) {
        throw error;
    }
}

export async function postActivityCountAndDuration(count, duration, token, activityId, routineId) {
    try {
        const { data } = await axios.post(`${BASE}/routines/${routineId}/activities`, {
            activityId,
            count,
            duration,
        }, { headers: { 'Authorization': `Bearer ${token}` } });
        return data;
    } catch (error) {
        throw error;
    }
}

// export async function addActivityNameAndDescriptionRoutine(name, description, token, routineId, activityId) {
//     try {
//         const { data } = await axios.post(`${BASE}/routines/${routineId}/activities`, {
//             name,
//             activityId,
//             description
//         }, { headers: { 'Authorization': `Bearer ${token}` } });
//         return data;
//     } catch (error) {
//         throw error;
//     }
// }