<div align="center">

# IntelliGest Smart Home
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/ISH/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://capstone-projects-2024-spring.github.io/project-intelligest-smart-home/)


</div>


## Keywords

Section 001, Smart home, ASL, American Sign Language, Deaf/Mute Accessibility, Hand Signals, Home Automation, Home Assistant, IoT, AI/ML, Accessible Technology, Embedded Systems, Python

## Project Abstract

IntelliGest Home revolutionizes the landscape of smart home accessibility by introducing an innovative solution for individuals who are deaf and/or mute. This application aims to empower users to seamlessly interact with their smart home devices through American Sign Language (ASL) or hand signals. Unlike traditional smart home systems requiring speech recognition, IntelliGest will detect common ASL and gestures to control a home.. IntelliGest will utilize the robust and open-source [Home Assistant](https://www.home-assistant.io/)  software and API to serve as the foundations for the home assistant. Image recognition will be utilized to detect common ASL words and utilize them to control a smart home using a predefined set of actions available.

## High Level Requirement

This system should be able to intake either a user’s hand signals/gesture or ASL and use it to query a database of known gestures/ASL mapped to actions. Once detected, the system with automatically perform the action requested. Users should be able to seamlessly control and manage their own smart home environment through intuitive gestures.

## Conceptual Design

The Home Assistant software will run off a Raspberry Pi or another capable device, which can be placed within the home of a user. Using either an external camera or an official Raspberry Pi Camera, photos can be sent to the backend to reference known ASL/Gestures and map to corresponding actions in Home Assistant.
Building a custom integration in Home Assistant, IntelliGest Home can communicate the interpreted commands to Home Assistant for smart home device control.
We could also utilize MQTT to send data from sensors/cameras to devices that are “subscribed” and use those messages in HA (Home Assistant) to perform actions.
Due to the need for Machine Learning, a Python backend may be preferred but NodeJS could potentially be used. The backend will need to be hosted on a cloud provider. A front-end may not be required, but if so, it can utilize either NextJS, React, or another front-end Javascript framework.

## Background

The smart home ASL integration aims to provide an inclusive and accessible home automation solution. It utilizing computer vision techniques to interpret ASL and gestures, translating them into commands for your smart home. Home Assistant provides public integrations, and through a quick browse, you can find that there are no [integrations](https://www.home-assistant.io/integrations/) focused on accessibility. Popular smart home systems like [Google Home](https://home.google.com/welcome/) and [Amazon Alexa](https://alexa.amazon.com/) do provide smart home accessibility options, but those who are mute are left to have to manually perform actions on a device or screen. Our solution would alleviate that and allow smart home users to control their home via cameras detecting their ASL/gestures.

## Required Resources

### Background Knowledge

- Familiarity with ASL would be beneficial, but is certainly not required
- Understanding of Machine Learning would help, but is not required
- An interest to work with embedded systems
- An interest to develop and create an accessible product
- Python/Javascript backend knowledge

### Software Resources

- Access to Home Assistant’s RESTful API
- Software Development Tools or IDEs (i.e., VSCode)
- Potential for a database (needed only if we want to store specific actions that can be mapped to gestures)

### Hardware Resources

- Raspberry Pi
- Cameras with video recording capabilities
- [Google Coral TPU](https://coral.ai/products/accelerator)
- Display
- Smart Home Appliances
    - [Philips Hue](https://www.amazon.com/dp/B07R2MQ2PY?tag=georiot-us-default-20&th=1&ascsubtag=tomsguide-us-1323340612962130000-20&geniuslink=true)
    - Thermostat
    - Door Lock

## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/bryanreiter">
            <img src="https://avatars.githubusercontent.com/u/91745125?v=4" width="100;" alt="bryanreiter"/>
            <br />
            <sub><b>Bryan Reiter</b></sub>
        </a>    
    </td>
    <td align="center">
        <a href="https://github.com/pdarsh58">
            <img src="https://avatars.githubusercontent.com/u/93610569?v=4" width="100;" alt="pdarsh58"/>
            <br />
            <sub><b>Darshil Patel</b></sub>
        </a>
    </td>
     <td align="center">
        <a href="https://github.com/defining-art">
            <img src="https://avatars.githubusercontent.com/u/118932320?v=4" width="100;" alt="oladapo"/>
            <br />
            <sub><b>Oladapo Oladele</b></sub>
        </a>    
    </td>
    <td align="center">
        <a href="https://github.com/defining-art">
            <img src="https://avatars.githubusercontent.com/u/123217322?v=4" width="100;" alt="Jarema"/>
            <br />
            <sub><b>Kevin Jarema</b></sub>
        </a>    
    </td>
   </tr>
</table>

[//]: # ( readme: collaborators -end )
