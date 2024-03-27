---
sidebar_position: 1
description: Descriptions of classes, fields, and functions
---

# Design Document - API

## Home Assistant

### Class Purpose

The core of our system, acting as the server. It’s responsible for managing the state of all connected devices and automations. It communicates with the user interface to display device statuses. It also communicates with the IntelliGest system by receiving data payloads sent through an MQTT Broker which include a prediction for the action. It also interacts with the devices themselves to control their states based on user input and automation rules.

#### Data Fields / Attributes:

##### `-devices[]`

It will contain Information about all Home devices: TV, Alarm, Weather, Thermostat, Locks, Reminders, To-do list

##### `-automations[]`

Contains information about automations

#### Methods

##### `+add_device()`

Function capable of adding a new device to Home Assistant

##### `+remove_device()`

Function can remove a device

##### `+update_device_status()`

Function can update device to current status

##### `+execute_automation()`

Function executes automation for that device

## User Interface

### Class Purpose

The user interface is the Home Assistant dashboard that allows users to interact with the system. It sends user commands to the Home Assistant and displays the status of the devices. The dashboard is highly customizable and can display information from various components. We will be creating custom cards for the dashboard to display ASL images.

#### Data Fields / Attributes:

##### `-user_id`

User ID

##### `-command`

All 8 hand gestures for diffent devices

##### `-device_states[]`

On/Off/Other state of the device

#### Methods

##### `+send_command()`

Function sends commands from User Interface

##### `+display_device_state()`

Function displays different states of Home devices on User Interface

## Device

### Class Purpose

These are the actual smart home devices (lights, thermostats, cameras, etc.) that are being controlled. They communicate with Home Assistant to receive commands and send status updates. The devices are controlled using the built-in components provided by Home Assistant, but can be written to include other devices.

#### Data Fields / Attributes

##### `-device_id`

Device ID that is a discriminator to determine a device.

##### `-device_type`

Type of device

##### `-status`

Status of device

##### `-capabilities[]`

Capabilities of the device, as specified by requirements or Apple's HAP when necessary.

#### Methods

##### `+update_status()`

Function updates status of device

##### `+execute_capability()`

Function executes capabilities of device

## PythonScripts

### Class Purpose

These are scripts that we will write to load the machine learning model into the Coral TPU, capture and pre-process images using OpenCV, and make predictions. The scripts will be run on a Raspberry Pi 4, with a Coral TPU co-processor.

The OpenCV library will be used to capture images or video frames from a camera connected to the Raspberry Pi. These images will then be preprocessed (e.g., resized, normalized) to be compatible with the input requirements of the TensorFlow Lite model.

The TensorFlow Lite model, which has been trained to recognize ASL gestures, will then be loaded into the Coral TPU. The preprocessed images will be passed to this model to make predictions.

#### Data Fields / Attributes

##### `-model`

This is the machine learning model loaded into the Coral TPU.

##### `-interpreter`

This is the TensorFlow Lite interpreter used to run the model.

##### `-image`

This is the image captured by the Pi Camera.

##### `-prediction`

This is the prediction made by the model based on the image.

#### Methods

##### `+load_model()`

Function loads Machine Learning model of PythonScripts

##### `+capture_image()`

Function captures Image of User's hand gestures

##### `+preprocess_image()`

Function Pre-Processes Image of User's hand gestures

##### `+make_prediction()`

Function makes prediction to identify correct hand gesture

## JavaScriptCustomCards

### Class Purpose

These are custom cards that we will create for the Home Assistant dashboard to display ASL images. The cards will be written in JavaScript and Home Assistant frontend development framework and will be used to enhance the user interface for our targeted demographic and provide necessary visual feedback when required.

#### Data Fields / Attributes

##### `-card_id`

Javascript Custom Card ID

##### `-image`

Image of Javascript Custom Card

##### `-display_state`

This is the current display state of the custom card.

#### Methods

##### `+create_card()`

This function creates a new custom card.

##### `+display_image()`

This function displays an `image` on the custom card.

##### `+update_display_state()`

This function updates the `display_state` of the custom card.

## Camera

### Class Purpose

Camera catches instances of User hand gestures. Also, it sends those images to Class PythonScripts

#### Data Fields / Attributes

##### `-image`

Image used in processing

#### Methods

##### `+capture_image()`

This function captures an image or video frame.

## TPU

### Class Purpose

TPU is responsible for loading all 8 Machine Learning Models and accurately identifies the User Hand Gesture and sends it to PythonScripts class.

#### Data Fields / Attributes:

##### `-model`

This is the machine learning model loaded into the Coral TPU.

#### Methods

##### `+load_model()`

Function loads Machine Learning model

##### `+make_prediction()`

This function makes a prediction based on the preprocessed image using the model loaded into the Coral TPU.
