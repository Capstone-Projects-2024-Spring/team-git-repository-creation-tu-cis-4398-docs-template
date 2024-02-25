from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from app import App
STR_MAX_SIZE = 65535
class Database:
    def __init__(self,app:App):
        self._app = app