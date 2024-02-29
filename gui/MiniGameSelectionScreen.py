import pygame
import pydoc
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

    def handleSelection(self, selection: str):
        """
        Processes the user's selection of a mini-game.
        
        Args:
            selection (str): The name of the selected mini-game.
            
        This method should determine what happens when a user selects a game, such as updating the UI or setting up game-specific data.
        """
        pass

    def startSelectedGame(self, game: str):
        """
        Starts the selected mini-game.
        
        Args:
            game (str): The name of the game to start.
            
        This method should initialize and launch the selected mini-game.
        """
        pass

    def exitGame(self):
        """
        Exits the currently running mini-game and cleans up resources.
        
        This method should ensure a clean exit from a game, including stopping any game loops and deallocating resources.
        """
        pygame.quit()

pydoc.writedoc("MiniGameSelectionScreen")
