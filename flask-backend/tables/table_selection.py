import spacy
import json
from typing import List

nlp = spacy.load("en_core_web_sm")

def extract_keywords(text):
    doc = nlp(text.lower())
    return set(token.text for token in doc if token.is_alpha)

def find_most_relevant_table(user_input, tables):
    user_keywords = extract_keywords(user_input)
    max_overlap = 0
    most_relevant_table = None

    for table in tables["tables"]:
        description = table.get("description", "")
        if isinstance(description, str):  # Check if description is a string
            table_keywords = extract_keywords(description)
            overlap = len(user_keywords.intersection(table_keywords))

            if overlap > max_overlap:
                max_overlap = overlap
                most_relevant_table = table["name"]

    return most_relevant_table

def load_tables_from_json(file_path):
    with open(file_path, "r") as file:
        tables = json.load(file)
    return tables