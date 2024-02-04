---
sidebar_position: 1
---

# System Overview

## Project Abstract

IntelliGest Home revolutionizes the landscape of smart home accessibility by introducing an innovative solution for individuals who are deaf and/or mute. This application aims to empower users to seamlessly interact with their smart home devices through American Sign Language (ASL) or hand signals. Unlike traditional smart home systems requiring speech recognition, IntelliGest will detect common ASL and gestures to control a home. IntelliGest will utilize the robust and open-source Home Assistant software and API to serve as the foundations for the [Home Assistant](https://www.home-assistant.io/). Image recognition will be utilized to detect common ASL words and utilize them to control a smart home.
Users will be able to set up the device along with a camera to detect the user when they are within the frame. Using image recognition, the system will then look to recognize any of the known ASL words or gestures and perform actions mapped to them. This aims to allow individuals who are deaf and/or mute, to control their smart home. 
Users will also have access to a touchscreen display that will be used to display information they ask for as well as provide an intuitive UI and dashboard displaying them with information about their home. Users will also be notified when an action is completed, such as flashing or lightly dimming lightbulbs, as well as visible on the dashboard.

## Conceptual Design

The product will be made to work on a Raspberry Pi 4 running the Raspberry Pi OS with the assistance of a Coral USB TPU for machine learning co-processing. It will utilize the Home Assistant API for connecting IoT devices and controlling them. MQTT will be utilized as a messaging broker between the IntelliGest Home, Home Assistant, and IoT devices around the user’s home. A backend written in Python may be preferred due to Home Assistant utilizing Python.

### Background
Most at-home smart systems require the user to perform verbal actions to control their smart. Products like [Apple’s HomeKit](https://www.apple.com/shop/accessories/all/homekit), [Amazon’s Alexa](https://alexa.amazon.com/), and [Google’s Home](https://home.google.com/welcome/) all fit under this umbrella and to no one's surprise, all lead the market for smart home devices. Unlike these services, IntelliGest Home strives to create an inclusive and intuitive smart home experience for those who are unable to speak. This product provides a service to a community that often gets overlooked in the smart home sphere. Using cameras and advanced machine learning technology, IntelliGest will recognize ASL and gestures to control a smart home; something that the current competitors do not provide. When a word or gesture is recognized, MQTT will send a message to Home Assistant to perform an action based on what was asked. Once the action is recognized and received, the user will be notified through one of two ways. They will notice that the dashboard is updated based on the action performed, and they will be notified by the lights slightly dimming for a second to signify their action was recognized and received. 
