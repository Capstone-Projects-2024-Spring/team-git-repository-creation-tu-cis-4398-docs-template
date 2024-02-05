<div align="center">

# PhillyGPT
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)


</div>


## Keywords

Section #, as well as any words that quickly give your peers insights into the application like programming language, development platform, type of application, etc.

## Project Abstract

This project aims to create a web application where users can input questions about Philadelphia and with OpenAI's API’s, translate the question into an SQL query. These queries will retrieve data from a number of distinct databases available through OpenDataPhilly, each accessible via Carto's SQL API. Databases include and are not limited to information on public safety, education, and real estate. The question to the user’s answer will then be displayed in an easy to read format, whether a simple sentence or table with a detailed map. The application's core functionality includes an interface for question input, a backend for query generation, execution, and displaying database responses for the user to understand. By integrating NLP with database management, this project seeks to provide data-driven answers to a wide array of queries about the city, ranging from demographic statistics to public service information

## High Level Requirement

Describe the requirements – i.e., what the product does and how it does it from a user point of view – at a high level.

## Conceptual Design

This project will have a web-based application architecture with respective frontend and a serverless backend. The frontend will be developed with Python Flask to create a responsive interface. On the serverless backend (AWS Lambda) we will need to use Python to connect to one of OpenAI’s API’s to generate SQL queries based on user prompts. We can use an AWS EC2 instance to host the frontend. The serverless backend will construct an HTTP request with the SQL query and send it to Carto’s SQL API. Carto's will then retrieve the requested information from the database that contains the requested information and return it in JSON format. The EC2 instance will then use the data to display the results in the front-end. Error handling will also need to be considered for any queries that do not produce valid results. 

## Background

The background will contain a more detailed description of the product and a comparison to existing similar projects/products. A literature search should be conducted and the results listed. Proper citation of sources is required. If there are similar open-source products, you should state whether existing source will be used and to what extent. If there are similar closed-source/proprietary products, you should state how the proposed product will be similar and different.

## Required Resources

Discuss what you need to develop this project. This includes background information you will need to acquire, hardware resources, and software resources. If these are not part of the standard Computer Science Department lab resources, these must be identified early and discussed with the instructor.

## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/ApplebaumIan">
            <img src="https://avatars.githubusercontent.com/u/9451941?v=4" width="100;" alt="ApplebaumIan"/>
            <br />
            <sub><b>Ian Tyler Applebaum</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/leekd99">
            <img src="https://avatars.githubusercontent.com/u/32583417?v=4" width="100;" alt="leekd99"/>
            <br />
            <sub><b>Kyle Dragon Lee</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/thanhnguyen46">
            <img src="https://avatars.githubusercontent.com/u/60533187?v=4" width="100;" alt="thanhnguyen46"/>
            <br />
            <sub><b>Thanh Nguyen</b></sub>
        </a>
    </td>
   </tr>
</table>

[//]: # ( readme: collaborators -end )

