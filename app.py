from flask import Flask
from flask_sqlalchemy import SQLAlchemy
STR_MAX_SIZE = 65535

class App:
    """
    This will serve as the Flask backend of the application which will contain the logic for each of the routes.
    _app : Flask application which creates and controls the url routes
    _db : database connection which allows for interaction with the SQL database
    """
    _app = Flask(__name__)
    _app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
    db = SQLAlchemy(_app)

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
        self._app.run()


    @_app.route('/')
    def log_in():
        """
        Handles the requests made to the welcome page where users can log in, register, or continue as guests
        Postcondition: a new user will be registered with a message saying "Successfully registered" and the database will update with the new user
        info, a message with "Incorrect username or password", or the user will be redirected to /menu
        :return : a Response object that redirects the user to the menu page on success, otherwise a str message appears saying either the username or password was incorrect
        """
        pass

    @_app.route('/menu')
    def menu():
        """
        Handles the requests made to the menu page with the game mode selection and options/preferences button
        Postcondition: an integer from the range 0 to the number of game modes minus 1 will be selected and sent as part of the /game/<int:mode> request
        :return : a Response object that redirects the user to a game session of the game mode they selected
        """
        pass
    
    @_app.route('/game/<int:mode>')
    def game(mode:int):
        """
        Handles the requests made to the game based on the mode selected by the user on the menu page
        Precondition: mode shall be an int from the range 0 to the number of game modes minus 1
        :param mode : number representing the game mode selected by the user
        :return : string indicating the end of the game and the user's wpm and percent of words typed correct
        """
        pass

class Database:
    def __init__(self,app:App):
        self._app = app

class UserData(App.db.Model):
    """
    Representation of user data stored in the database under the UserData table
    _username : unique identifier of a user
    _pswd : user's password
    _wpm : words per minute
    _accuracy : percent of words typed correctly
    _wins : number of multiplayer matches won
    _losses : number of multiplayer matches lost
    _freq_mistyped_words : string of words/phrases frequently mistyped separated by the '|' character
    """
    _username = App.db.Column(App.db.String(15),nullable=False,primary_key=True)
    _pswd = App.db.Column(App.db.String(20),nullable=False)
    _wpm = App.db.Column(App.db.SmallInteger)
    _accuracy = App.db.Column(App.db.Numeric)
    _wins = App.db.Column(App.db.Integer)
    _losses = App.db.Column(App.db.Integer)
    _freq_mistyped_words = App.db.Column(App.db.String(STR_MAX_SIZE))

    def repr():
        """
        Returns a string representation of the user
        :return :
        """
        pass


if __name__=='__main__':
    app = App()
    app.run(debug=True)