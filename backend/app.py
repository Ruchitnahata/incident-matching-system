from flask import Flask, request, jsonify
from flask_cors import CORS
from src.data_loader import load_data
from src.preprocess import preprocess
from models.bert_model import BERTModel
from src.incident_matcher import find_similar_incident
from src.config import DATA_FILE, SIMILARITY_THRESHOLD

app = Flask(__name__)
CORS(app)

# Load data and BERT model once
df = load_data(DATA_FILE)
bert_model = BERTModel()
df['incident_description'] = df['incident_description'].apply(preprocess)
df['embeddings'] = df['incident_description'].apply(bert_model.get_embedding)

@app.route('/match_incident', methods=['POST'])
def match_incident():
    new_incident = request.json.get('incident_description')
    new_incident_preprocessed = preprocess(new_incident)
    new_incident_embedding = bert_model.get_embedding(new_incident_preprocessed)

    index, similarity_score = find_similar_incident(new_incident_embedding, df['embeddings'].tolist(), SIMILARITY_THRESHOLD)
    
    if index is not None:
        response = {
            "solution": df.iloc[index]['solution'],
            "team_involved": df.iloc[index]['team_involved'],
            "similarity_score": float(similarity_score)
        }
        return jsonify(response)
    return jsonify({"message": "No similar incident found above the threshold"}), 404

if __name__ == '__main__':
    app.run(debug=True)
