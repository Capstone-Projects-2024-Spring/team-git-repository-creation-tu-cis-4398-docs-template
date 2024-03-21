<div align="center">

# Path Pilot
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)


</div>


## Keywords

Section #, as well as any words that quickly give your peers insights into the application like programming language, development platform, type of application, etc.

## Project Abstract

This document proposes a novel application of a text message (SMS or Email) read-out and hands-free call interacted between an Android Smartphone and an infotainment platform (headunit) in a car environment. When a phone receives an SMS or Email, the text message is transferred from the phone to the headunit through a Bluetooth connection. On the headunit, user can control which and when the received SMS or E-mail to be read out through the in-vehicle audio system. The user may press one button on the headunit to activate the hands-free feature to call back the SMS sender.

## High Level Requirement

Describe the requirements – i.e., what the product does and how it does it from a user point of view – at a high level.

## Conceptual Design

Describe the initial design concept: Hardware/software architecture, programming language, operating system, etc.

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


## How To Run Path Pilot


### Install Python and Node.js if you haven't
Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. It's commonly used for building server-side JavaScript applications and also for front-end development, especially when working with tools like ReactJS, which rely on Node.js for development tasks such as package management and build processes.

### 1. Install pip if don't have it
pip is pythons package manager and allows you to download packages easily from the command line.

### 2. set up your virtual environment *VERY IMPORTANT* 
In Python, a virtual environment is a self-contained directory tree that contains a Python installation for a particular version of Python, plus a number of additional packages. This allows you to work on multiple projects with different dependencies without them interfering with each other.

command line:
 pip install virtualenv
go to path pilot project directory and create your virtual environment. In command line type: 

#### virtualenv pathPilot
(pathPilot is the name I used for my env, you can name it whatever)

activate your virtual environment by typing 

Windows:
pathPilot\Scripts\activate

Mac:
source pathPilot/bin/activate

You will now notice your directory looks different (Notice the (pathPilot) at the beginning). This is you are now inside and working in your virtual environment. This is where you will install all your packages and do all the work on Path Pilot.

Whenever you are done coding, you can type "deactivate" in the command line and return to your system's default environment.

### 3. Install Necessary Packages

**Inside your virtual environment, install these required packages**

pip install django

pip install react

pip install djangorestframework 

pip install django-cors-headers 

**inside your virtual environment, within the "myapp" directory** 

npm install axios

*Django Rest Framework - this is used to build API endpoints*

*Django-cors-headers - this is middleware for handling CORS (cross-origin resource sharing headers) to prevent cross-origin requests. security thing*

*Axios - this is a Javascript library used for making HTTP requests from browser or Node.js*

### 4. Run the Project

open two terminal windows (both on the your virtual environment)

**In the first window, navigate to the myproject directory and run the following command**

python manage.py runserver

**In the second window, navigate to the myapp directory and run the following command**

npm start

This will start the React development server. Open your web browser and navigate to http://localhost:3000/