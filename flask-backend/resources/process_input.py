from flask import request, jsonify
from flask_restful import Resource
from openai import OpenAI
import os
from dotenv import load_dotenv

#load .env file
load_dotenv()

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

"""
ProcessInput(Resource)
This resouce handles user input and generates a SQL query using OpenAI
"""
class ProcessInput(Resource):
    def post(self):
        """
        Handles POST http request method to the '/process_input/ endpoint.
        Returns:
            JSON of user input and OpenAI response.
        """
        
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
        
        return jsonify({"USER_INPUT" : user_input, 
                "OPENAI_RESPONSE" : response})