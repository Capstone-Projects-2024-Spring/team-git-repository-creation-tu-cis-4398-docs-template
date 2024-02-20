from flask import jsonify
from flask_restful import Resource

"""
Index(Resource)
This resource provides information about the available endpoints accessible to the user
"""
class Index(Resource):
    """
    This resource handles GET HTTP requests to the '/' endpoint
    Return:
        JSON on available endpoints.
    """
    def get(self):
        return jsonify({"message" : "Welcome to the API.", 
                "endpoints" : {
                    "process_input" : "/process_input"
                }})
        