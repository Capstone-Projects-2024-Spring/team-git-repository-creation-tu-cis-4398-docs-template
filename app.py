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
    app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///test.db'
    db = Database(SQLAlchemy(app))

    def run(self,host: str | None = None,port: int | None = None, debug: bool | None = None, load_dotenv: bool = True,**options):
        """
        Calls Flask's run function with the specified parameters to run the backend for the web application.\n
        Preconditions: host is a valid IP address and port is a valid and open port\n
        Flask's descriptions of the parameters:
        :param host: the hostname to listen on. Set this to ``'0.0.0.0'`` to
            have the server available externally as well. Defaults to
            ``'127.0.0.1'`` or the host in the ``SERVER_NAME`` config variable
            if present.
        :param port: the port of the webserver. Defaults to ``5000`` or the
            port defined in the ``SERVER_NAME`` config variable if present.
        :param debug: if given, enable or disable debug mode. See
            :attr:`debug`.
        :param load_dotenv: Load the nearest :file:`.env` and :file:`.flaskenv`
            files to set environment variables. Will also change the working
            directory to the directory containing the first file found.
        :param options: the options to be forwarded to the underlying Werkzeug
            server. See :func:`werkzeug.serving.run_simple` for more
            information.
        """
        pass


    @app.route('/')
    def log_in(self):
        """
        Handles the requests made to the welcome page where users can log in, register, or continue as guests
        """
        pass

    @app.route('/menu')
    def menu(self):
        """
        Handles the requests made to the menu page with the game mode selection and options/preferences button
        """
        pass
    
    @app.route('/game/<int:mode>')
    def game(self,mode:int):
        """
        Handles the requests made to the game based on the mode selected by the user on the menu page
        :param mode : number representing the game mode selected by the user
        """
        pass
