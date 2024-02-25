from flask import Flask,render_template,redirect,url_for, request
from flask_sqlalchemy import SQLAlchemy
from database import Database

class App():
    """
    This will serve as the Flask backend of the application which will contain the logic for each of the routes.
    app : Flask application which creates and controls the url routes
    db : database connection which allows for interaction with the SQL database
    """
    app=Flask(__name__)
    db = Database()
