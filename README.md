<div align="center">

# PhillyGPT
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)


</div>


## Keywords

Section 02, Natural Language Processing, Databases, SQL, Node.js, Web Application, Python, Javascript, React, Philadelphia Public Data, OpenAI, SQL Query Generation

## Project Abstract

This project aims to create a web application that users can input questions about Philadelphia and with OpenAI's API’s, translate the question into an SQL query. These queries will retrieve data from a number of distinct databases available through OpenDataPhilly, each accessible via Carto's SQL API. The question to the user’s answer will then be displayed in an easy to read format, whether a simple sentence or table with a detailed map. The application's core functionality includes an interface for question input, a backend for query generation, execution, and displaying database responses. By integrating NLP with database management, this project seeks to provide data-driven answers to a wide array of queries about the city, ranging from demographic statistics to public service information.

## High Level Requirement

The product will allow users to input questions in natural language about various aspects of Philadelphia. The application will then translate these queries into SQL, fetch data from the relevant OpenDataPhilly databases, and present the results in a readable and engaging format. It will handle a broad range of query types, ensuring accuracy and relevance in the data presented.

## Conceptual Design

This project will have a web-based application architecture with respective frontend and backend technologies. The frontend will be developed with JavaScript, React, HTML, and Tailwind CSS to create a responsive interface. On the backend we will need to use Python to connect to one of OpenAI’s API’s to integrate natural language processing. The backend will also need Node.js. Cloud services will be needed. We can use an AWS EC2 instance to host the backend. The backend will construct an HTTP request with the SQL query and send it to Carto’s SQL API. The response from Carto will be parsed and formatted by the backend through one of OpenAI’s API’s again, and then presented to the user on the frontend. Error handling will also need to be considered for any queries that do not produce valid results.

## Background

There is a project called San Francisco GPT. They also have another demo called Census GPT. Both of these projects utilize the respective datasets for their specific domains. Philly GPT will be a specialized adaptation of these projects using public datasets that pertain to Philadelphia. Philly GPT will not be a fork of the project, but will be simpler and light weight. As it is, San Francisco GPT and Census GPT do not run any user generated requests as the project may be abandoned. They only output pre-recorded responses.

## Required Resources
- Python
- JavaScript
- Node.js
- SQL
- AWS EC2
- React
- OpenAI’s GPT-3.5 or GPT-4 API
- HTML
- CSS Tailwind
- Carto’s SQL API

## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/andrewto30">
            <img src="https://avatars.githubusercontent.com/u/28883218?v=4" width="100;" alt="andrewto30"/>
            <br />
            <sub><b>Andrew To</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/princegeutler">
            <img src="https://avatars.githubusercontent.com/u/46353482?v=4" width="100;" alt="princegeutler"/>
            <br />
            <sub><b>Prince Geutler</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/alishahidd">
            <img src="https://avatars.githubusercontent.com/u/76089708?v=4" width="100;" alt="alishahidd"/>
            <br />
            <sub><b>Ali Shahid</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/zyij99">
            <img src="https://avatars.githubusercontent.com/u/91389500?v=4" width="100;" alt="zyij99"/>
            <br />
            <sub><b>Brandon Zheng</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/tul58767">
            <img src="https://avatars.githubusercontent.com/u/111989897?v=4" width="100;" alt="tul58767"/>
            <br />
            <sub><b>Quynh Cao</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/AidanScharnikow">
            <img src="https://avatars.githubusercontent.com/u/111991905?v=4" width="100;" alt="AidanScharnikow"/>
            <br />
            <sub><b>Aidan Scharnikow</b></sub>
        </a>
    </td>
   </tr>
</table>

[//]: # ( readme: collaborators -end )

