from flask import jsonify, Flask
from flask_cors import CORS
from quizlet_sets import sets

app = Flask(__name__)
CORS(app)

@app.route('/api/quizlet', methods=['GET'])

def get_quizlet():
    quizlet_data = [
      {
    'front': 'What is the capital of France?',
    'back': 'Paris'
  },
  {
    'front': 'What is the largest planet in our solar system?',
    'back': 'Jupiter'
  }
    ]

    

    URL = "https://quizlet.com/686459638/test-set-flash-cards/?new" # Sample study set
    set = sets.get_terms(URL) # Returns a TermList object
    print(set)

    return jsonify({'data': quizlet_data})

if __name__ == '__main__':
    app.run(debug=True, port=8080) #  # remove debug=True when deploy