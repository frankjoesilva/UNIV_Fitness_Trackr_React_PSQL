const axios = require('axios')

// const BASE = 'https://calm-castle-35968.herokuapp.com/api'
const BASE = 'http://localhost:4000/api'


export async function getRoutines() {
    try {
        const { data } = await axios.get(`${BASE}/routines`);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getCurrentUserRoutines({ username, name, description }, token) {
    try {
        const { data } = await axios.get(`${BASE}/users/${username}/routines`, {
            name,
            description,
        },
            {
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

export async function deleteRoutinesByUsername({ username, name, description }, token) {
    try {
        const { data } = await axios.delete(`${BASE}/users/${username}/routines`, {
            name,
            description
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function postRoutines(name, goal, isPublic, token, creatorId) {
    // console.log(creatorId, "p")
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


