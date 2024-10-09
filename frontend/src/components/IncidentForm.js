import React, { useState } from 'react';
import { getIncidentMatch } from '../services/incidentApi';

const IncidentForm = ({ setResults }) => {
    const [incidentDescription, setIncidentDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await getIncidentMatch(incidentDescription);
        setResults(data);
    };

    return (
        <form onSubmit={handleSubmit} className="incident-form">
            <textarea
                value={incidentDescription}
                onChange={(e) => setIncidentDescription(e.target.value)}
                placeholder="Describe the incident..."
                className="incident-input"
            />
            <button type="submit" className="submit-button">Find Match</button>
        </form>
    );
};

export default IncidentForm;
