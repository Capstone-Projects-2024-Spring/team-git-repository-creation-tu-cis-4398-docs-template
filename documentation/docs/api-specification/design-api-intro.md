---
sidebar_position: 1
description: What should be in this section.
---

Design Document - Part II API
=============================

**Purpose**

This Design Document gives the complete design of the software implementation. This information should be in structured comments (e.g. Javadoc) in the source files. We encourage the use of a documentation generation tool to generate a draft of your API that you can augment to include the following details.

**Requirements**

In addition to the general documentation requirements the Design Document - Part II API will contain:

General review of the software architecture for each module specified in Design Document - Part I Architecture. Please include your class diagram as an important reference.

**For each class define the data fields, methods.**


Home Assistant

    Class Purpose: 
    The core of our system, acting as the server. It’s responsible for managing the state of all connected devices and automations. It communicates with the user interface to display device statuses. It also communicates with the IntelliGest system by receiving data payloads sent through an MQTT Broker which include a prediction for the action. It also interacts with the devices themselves to control their states based on user input and automation rules.

    Data Fields / Attributes:

        -devices[]: It will contain Information about all Home devices: TV, Alarm, Weather, Thermostat, Locks, Reminders, To-do list

        -automations[]: Information about automations

    Methods:
    
        +add_device(): Function capable of adding a new device to Home Assitant

        +remove_device(): Function can remove a device

        +update_device_status(): Function can update device to current status

        +execute_automation(): Function executes automation for that device



User Interface

    Class Purpose: 
    The user interface is the Home Assistant dashboard that allows users to interact with the system. It sends user commands to the Home Assistant and displays the status of the devices. The dashboard is highly customizable and can display information from various components. We will be creating custom cards for the dashboard to display ASL images.

    Data Fields / Attributes:

        -user_id : User ID
        -command : All 8 gestures 
        -device_states[] : On/Off/Other state of the device


    Methods:

        +send_command() : Function sends commands
        +display_device_state() : Function displays different states of the Home devices 

    










The purpose of the class.

The purpose of each data field.

The purpose of each method

Pre-conditions if any.

Post-conditions if any.

Parameters and data types

Return value and output variables

Exceptions thrown\* (PLEASE see note below for details).

An example of an auto-generated and then augmented API specification is here ([Fiscal Design Document 2\_API.docx](https://templeu.instructure.com/courses/106563/files/16928898?wrap=1 "Fiscal Design Document 2_API.docx") )

This group developed their API documentation by hand ([Design Document Part 2 API-1\_MovieMatch.docx](https://templeu.instructure.com/courses/106563/files/16928899?wrap=1 "Design Document Part 2 API-1_MovieMatch.docx") )

\*At the top level, or where appropriate, all exceptions should be caught and an error message that is meaningful to the user generated. It is not OK to say ("xxxx has encountered a problem and will now close (OK?)". Error messages and recovery procedures should be documented in the User’s Manual.
