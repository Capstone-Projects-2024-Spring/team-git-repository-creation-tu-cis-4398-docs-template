#test.py
from flask import FlaskClient

class Test_App():
    """
    Class for testing the App class
    """
    #Client that sends requests to endpoints of the application
    client = FlaskClient()
    
    def test_registration():
        """
        Test: That the user can register a username and password and can log in with the new credentials successfully
        Result: True if the username and password have been successfully stored
        """
        pass

    def test_invalid_login():
        """
        Test: When users enter invalid credentials and click log in, a message saying that either username or password was invalid should appear
        Result: True if the invalid credentials cause a str message to be returned saying the username or password was invalid
        """
        pass

    def test_continue_as_guest():
        """
        Test: When users click continue as guest, the user should be redirected to the game page
        Result: True if the returned response indicates a redirection to the menu page
        """
        pass

    def test_google_login():
        """
        Test: When users tries to log in through Google and is successful, the user should be redirected to the google callback page 
        Result: True if the returned response indicates a redirection to the google callback page
        """
        pass

    def test_google_callback():
        """
        Test: That returned redirect requests are handled successfully, and ultimately a response that indicates redirection to the menu page is returned
        Result: True if the returned response indicates a redirection to the menu page
        """
        pass

    def test_menu_selection():
        """
        Test: That the user is redirected to the page with the selected game mode
        Result: True if the number corresponding to the selected game mode appears in the returned redirect response
        """
        pass

    def test_game_results():
        """
        Test: That text for the game results appears on the screen
        Result: True if a string with game results is returned
        """
        pass

class Test_User_Data():
    def test_repr():
        """
        Test: That a string representation of a row's data is returned
        Result: True if a string with a row's data is returned
        """
        pass

class Test_Game():
    '''
    Class for testing the game_session class
    '''
    # Client that sends requests to endpoints of the application
    client = FlaskClient()

    def test_initialization():
        """
        Test: A new session is initialized with players. It contains relevant information of a game
        Result: True if the returned session is not None and have unique ID 
        """
        pass

    def test_start():
        """
        Test: Ensure that the race starts successfully
        Result: True if the race is initialized and components are set up properly
        """
        pass

    def test_tie():
        """
        Test: Ensure that no winner is returned when no player has won the race
        Result: True if the returned list is empty
        """
        pass

    def test_winner():
        """
        Test: Ensure that the correct winner is returned when a single player wins the race
        Result: True if the returned list contains the ID of the winning player only
        """
        pass

    def test_race_end():
        """
        Test: Ensure that the race is ended and necessary cleanup actions are performed
        Result: True if all cleanup actions are successfully executed
        """
        pass
    
    def test_add_player():
        """
        Test: Ensure that a player is added to the game session successfully
        Result: True if the player is added and can be retrieved from the game session
        """
        pass

    def test_remove_player():
        """
        Test: Ensure that a player is removed from the game session successfully
        Result: True if the player is removed and cannot be retrieved from the game session
        """
    
