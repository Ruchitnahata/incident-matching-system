import React, { useState } from 'react';
import IncidentForm from './components/IncidentForm';
import IncidentResults from './components/IncidentResults';
import './index.css';

function App() {
    const [results, setResults] = useState(null);

    return (
        <div className="app-container">
            <h1 className="app-title"> Incident Matching System</h1>
            <IncidentForm setResults={setResults} />
            <IncidentResults results={results} />
        </div>
    );
}

export default App;
