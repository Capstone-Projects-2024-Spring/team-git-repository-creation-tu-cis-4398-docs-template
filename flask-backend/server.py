#imports
from flask import Flask
from flask_restful import Api
from resources.index import Index
from resources.process_input import ProcessInput

#init
app = Flask(__name__)
api = Api(app)
    
api.add_resource(Index, '/')
api.add_resource(ProcessInput, '/process_input')

if __name__ == "__main__":
    app.run(debug=True)
    #DEFAULT: http://localhost:5000/

