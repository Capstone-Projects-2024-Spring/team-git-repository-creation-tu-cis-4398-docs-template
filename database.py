from flask_sqlalchemy import SQLAlchemy
from flask import Flask
class Database():
    _db = None
    def __init__(self,db:SQLAlchemy):
        self.db = db