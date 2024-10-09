from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

def find_similar_incident(new_incident_embedding, past_embeddings, threshold=0.8):
    similarities = [cosine_similarity([new_incident_embedding], [embedding])[0][0] for embedding in past_embeddings]
    most_similar_index = np.argmax(similarities)
    
    if similarities[most_similar_index] >= threshold:
        return most_similar_index, similarities[most_similar_index]
    return None, None
