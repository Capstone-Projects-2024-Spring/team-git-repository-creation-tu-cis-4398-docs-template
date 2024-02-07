---
sidebar_position: 4
---

# Features and Requirements

## Functional Requirements
- User Input
    - Users must be able to input questions related to the city of Philadelphia and receive an accurate response.
    - Must utilize NLP via OpenAI GPT-3.5 or GPT-4 API

- SQL Query Generation
    - Create database schemas
    - SQL queries generated based on user input
    - The generated SQL query must be valid and relavant to the user's question
    - Suggest user queries on the home page

- Error Handling
    - When the user response is not clear the user must be given a correction prompt.
    - When there are no results for the user's question, it must be reprompted.

- User Interface
    - Develop a user-friendly interface using Flask and Python
    - Ensure that user interface remains consistent regardless of the screen size.
    - User must be notified when the data is loading during fetching operations.
    - Result area must display the answers to the user's question and other data used to fetch from the API such as SQL queries and the tables queried.
- Mapping
    - When a user asks a question, a map should appear and display the geographical data about their question.
- API Rate Limits
    - Must have an API rate limits to prevent API abuse.

## Nonfunctional Requirements
- Ease of Navigation
    - The core functionality of the program must be easily accessible without extensive navigation.
- Logging System
    - The Logging system helps to debug any issues encountered for backend processes.
- Hosting
    - Utilize AWS EC2 instance for hosting the frontend of the project.
    - Establish seamless communication between the front and serverless back end of the project
- API Integration
    - Ensure smooth integration between OpenAI API, Carto SQL API, and application backend
- Performance
    - Quick response times for query generation and data retrieval
