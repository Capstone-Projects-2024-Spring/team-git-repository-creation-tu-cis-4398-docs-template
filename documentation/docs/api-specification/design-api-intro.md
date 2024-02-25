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

        +send_command() : Function sends commands from User Interface
        +display_device_state() : Function displays different states of Home devices on User Interface 

    

Device

    Class Purpose:
    These are the actual smart home devices (like lights, thermostats, cameras, etc.) that are being controlled. They communicate with Home Assistant to receive commands and send status updates. The devices are controlled using the built-in components provided by Home Assistant, but can be written to include other devices.

    Data Fields / Attributes:

        -device_id : Device ID
        -device_type : Type of device
        -status : Status of device
        -capabilities[] : Capabilities of the device

    Methods:

        +update_status() : Function updates status of device
        +execute_capability() : Function executes capabilities of device



PythonScripts

    Class Purpose:
    These are scripts that we will write to load the machine learning model into the Coral TPU, capture and pre-process images using OpenCV, and make predictions. The scripts will be run on a Raspberry Pi 4, with a Coral TPU co-processor.

    The OpenCV library will be used to capture images or video frames from a camera connected to the Raspberry Pi. These images will then be preprocessed (e.g., resized, normalized) to be compatible with the input requirements of the TensorFlow Lite model.

    The TensorFlow Lite model, which has been trained to recognize ASL gestures, will then be loaded into the Coral TPU. The preprocessed images will be passed to this model to make predictions.

    Data Fields / Attributes:

        -model : Model of Python Script
        -interpreter : 
        -image : 
        -prediction : 

    Methods:

        +load_model() : Function loads Machine Learning model of PythonScript
        +capture_image() : Function captures Image of User's hand gestures
        +preprocess_image() : Function Pre-Processes Image of User's hand gestures
        +make_prediction() : Function makes prediction to identify correct hand gesture



JavaScriptCustomCards

    Class Purpose:
    These are custom cards that we will create for the Home Assistant dashboard to display ASL images. The cards will be written in JavaScript and Home Assistant frontend development framework and will be used to enhance the user interface for our targeted demographic and provide necessary visual feedback when required.

    Data Fields / Attributes:

        -card_id : Javascript Custom Card ID 
        -image : Image of Javascript Custom Card
        -display_state : State of Javascript Custom Card

    Methods:

        +create_card() : Function gives ability to users to create a new Custom Card
        +display_image() : Function displays image of Javascript Custom Card
        +update_display_state() : Function updates state of Javascript Custom Card to current state














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
