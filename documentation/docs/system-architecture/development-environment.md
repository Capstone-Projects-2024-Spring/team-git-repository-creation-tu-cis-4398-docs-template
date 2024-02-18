---
sidebar_position: 4
---

# Development Environment

For PhillyGPT we will utilize a mixture of JavaScript and Python. Developers should have Node.js and Python on their local machines. We also recommend using Visual Studio Code as a primary code editor due to its extensive support for both languages used in the project.

The backend will be built on Node.js, which will leverage the Express framework for handling API requests. The frontend will primarily use static HTML for pages and Tailwin CSS for styling, while also utilizing minimal JavaScript for handling API requests and dynamic functions.

For local development, we use a .env file to manage environment variables, including API keys for OpenAI and Carto's SQL API, and database connection details. This ensures sensitive information is kept out of the codebase.
