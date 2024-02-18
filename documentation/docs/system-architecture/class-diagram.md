---
sidebar_position: 2
---

# Class Diagrams

## Components

### Home Assistant

Home Assistant acts as the server in our system. It receives commands from the user interface, interacts with the devices, and updates the user interface with the status of the devices.

### User Interface

The user interface is the Home Assistant dashboard that allows users to interact with the system. It sends user commands to the Home Assistant and displays the status of the devices. The dashboard is highly customizable and can display information from various components. We will be creating custom cards for the dashboard to display ASL images.

### Devices

These are the actual smart home devices (like lights, thermostats, cameras, etc.) that are being controlled. They communicate with Home Assistant to receive commands and send status updates. The devices are controlled using the built-in components provided by Home Assistant, but can be written to include other devices.

### Python Scripts

These are scripts that we will write to load the machine learning model into the Coral TPU, capture and pre-process images using OpenCV, and make predictions. The scripts will be run on a Raspberry Pi 4, with a Coral TPU co-processor.

The OpenCV library will be used to capture images or video frames from a camera connected to the Raspberry Pi. These images will then be preprocessed (e.g., resized, normalized) to be compatible with the input requirements of the TensorFlow Lite model.

The TensorFlow Lite model, which has been trained to recognize ASL gestures, will then be loaded into the Coral TPU. The preprocessed images will be passed to this model to make predictions.

### Javascript Custom Lovelace Cards

These are custom cards that we will create for the Home Assistant dashboard to display ASL images. The cards will be written in JavaScript and will be used to enhance the user interface for our targeted demographic and provide necessary visual feedback when required.
