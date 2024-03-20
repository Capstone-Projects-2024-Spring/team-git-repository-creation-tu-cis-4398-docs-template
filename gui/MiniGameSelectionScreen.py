import pygame
import pydoc
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
class MiniGameSelectionScreen:
    """
    Represents a screen for selecting mini-games.
    
    This class provides a graphical interface for the user to select one of the available mini-games to play.
    """

    def __init__(self, menuOptions: list[str]):
        """
        Initializes the MiniGameSelectionScreen with a list of mini-game options.
        
        Args:
            menuOptions (list[str]): A list of strings representing the names of the mini-games available for selection.
        """
        self.menuOptions = menuOptions

    def displayGames(self):
        """
        Displays the available mini-games for the user to select.
        
        This method should be implemented to update the screen with the game options.
        """
        pass

<<<<<<< Updated upstream
    def handleSelection(self, selection: str):
        """
        Purpose: Processes the user's selection of a mini-game.
        Parameters:
            - selection (str): The name of the selected mini-game.
        """
        pass

    def startSelectedGame(self, game: str):
        """
        Purpose: Starts the selected mini-game.
        Pre-conditions: The game must be selected by the user.
        Post-conditions: The selected mini-game is initialized and launched.
        Parameters:
            - game (str): The name of the game to start.
        """
        pass

    def exitGame(self):
        """
        Purpose: Exits the currently running mini-game and cleans up resources.
        Pre-conditions: A mini-game must be running.
        Post-conditions: Resources are cleaned up and the mini-game is exited.
        """
        pygame.quit()

pydoc.writedoc("MiniGameSelectionScreen")
=======
    def handleSelection(selection:str):        
        return 
    
    def startSelectedGame(game:str):
        return 
    
    def exitGame():
        pygame.quit()

        
>>>>>>> Stashed changes
