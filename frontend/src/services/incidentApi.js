import axios from 'axios';

const API_URL = 'http://localhost:5000/match_incident';

export const getIncidentMatch = async (incidentDescription) => {
    try {
        const response = await axios.post(API_URL, { incident_description: incidentDescription });
        return response.data;
    } catch (error) {
        console.error("Error finding incident match:", error);
        return null;
    }
};
