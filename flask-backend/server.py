#imports
from flask import Flask, request
from openai import OpenAI
import os
from dotenv import load_dotenv
from flask_restful import Api, Resource

#load .env file
load_dotenv()

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)
#init
app = Flask(__name__)
api = Api(app)


class Index(Resource):
    def get(self):
        return {"message" : "Welcome to the API.", 
                "endpoints" : {
                    "process_input" : "/process_input"
                }}
        
class ProcessInput(Resource):
    def post(self):
        #get user input
        user_input = request.form.get("user_input")

        response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Generate a SQL Query for a database based on the user input. Only give the SQL Statement and nothing more."}, #THIS WILL NEED TO BE MODIFIED.
            {"role": "user", "content": user_input},
        ],
        temperature=1
    )
        response = response.choices[0].message.content
        
        return {"USER_INPUT" : user_input, 
                "OPENAI_RESPONSE" : response}
    
api.add_resource(Index, '/')
api.add_resource(ProcessInput, '/process_input')

if __name__ == "__main__":
    app.run(debug=True)
    #DEFAULT: http://localhost:5000/

