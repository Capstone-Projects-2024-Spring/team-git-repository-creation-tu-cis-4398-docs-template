from flask import request, jsonify
from flask_restful import Resource
from openai import OpenAI
import os
from dotenv import load_dotenv
from tables.table_selection import find_most_relevant_table, load_tables_from_json


#load .env file
load_dotenv()

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

class ProcessInput(Resource):
    """
    ProcessInput(Resource)
    This resouce handles user input and generates a SQL query using OpenAI
    """
    def post(self):
        """
        Handles POST HTTP requests to the '/process_input/ endpoint.
        Returns:
            JSON of user input and OpenAI response.
        """
        
        #get user input
        user_input = request.form.get("user_input")

        # Call the table classification functions
        tables_data = load_tables_from_json("data/tables.json")
        most_relevant_table = find_most_relevant_table(user_input, tables_data)

        response = self.openai_request(user_input)
    
        return jsonify({"USER_INPUT" : user_input, 
                "OPENAI_RESPONSE" : response,
                "MOST_RELEVANT_TABLE": most_relevant_table
                })
    

    def openai_request(self, user_input):
        """
        Sends a request to OpenAI to generate a SQL Query based on the user input.
        Args:
        user_input (string): User's prompt for generating SQL query.
        Returns: Generated SQL query as a String.
        """

        response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Generate a SQL Query for a database based on the user input. Only give the SQL Statement and nothing more."}, #THIS WILL NEED TO BE MODIFIED.
            {"role": "user", "content": user_input},
        ],
        temperature=1
    )
        return response.choices[0].message.content 