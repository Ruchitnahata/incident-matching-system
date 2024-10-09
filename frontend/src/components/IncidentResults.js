const IncidentResults = ({ results }) => {
    if (!results) return <div>No results yet.</div>;

    return (
        <div className="result-container">
            <h2>Solution:</h2>
          <p className="result-text">{results.solution}</p>
          <h3>Team Involved:</h3>
          <p className="result-text">{results.team_involved}</p>
          <h3>Similarity Score:</h3>
          <p className="result-text">{results.similarity_score}</p>
            {/* <h3>Solution: {results.solution}</h3>
            <p>Team Involved: {results.team_involved}</p>
            <p>Similarity Score: {results.similarity_score}</p> */}
        </div>
    );
};

export default IncidentResults;
