# Incident Matching System - Backend

This is the backend API for the Incident Matching System, built using **Flask** and **BERT** for text similarity. The API receives new incident reports, finds the most similar past incidents using BERT embeddings, and returns the associated solution and team involved.

## Features
- Accepts new incidents via POST requests
- Calculates similarity between new incidents and past incidents using BERT embeddings
- Returns the most similar past incident along with the associated solution and team
- Built with Flask for the API and PyTorch for BERT model execution

## Installation and Setup

### Prerequisites
- Python 3.8+
- pip (Python package installer)
- Flask
- PyTorch
- Hugging Face Transformers

### Steps to Run the Application

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/incident-matching-backend.git
    cd incident-matching-backend
    ```

2. Create a virtual environment:
    ```bash
    python3 -m venv venv
    source venv/bin/activate    # On Windows: venv\Scripts\activate
    ```

3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Run the Flask application:
    ```bash
    export FLASK_APP=app.py      # On Windows: set FLASK_APP=app.py
    flask run
    ```

5. The API will be available at:
    - `http://localhost:5000`

### API Endpoints

#### `POST /match-incident`

- **Description**: Matches a new incident with the most similar past incident and returns the solution and team.
- **Request Body**:
    ```json
    {
      "incident": "Description of the new incident"
    }
    ```
- **Response**:
    ```json
    {
      "solution": "Solution to the matched incident",
      "team": "Team responsible for the resolution"
    }
    ```

### Folder Structure
```bash
incident-matching-backend/
│
├── app.py                     # Flask application file
├── models/                    # Pre-trained BERT model or embeddings
├── data/                      # CSV file containing past incidents
├── requirements.txt           # Python dependencies
└── README.md                  # Project documentation
