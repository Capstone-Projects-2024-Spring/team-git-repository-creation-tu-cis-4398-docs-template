---
sidebar_position: 4
---

# Development Environment

## Hardware

A Raspberry Pi 4 running Raspbery Pi OS will be used for development and testing. A Raspberry Pi Camera will be used to send images to the machine learning models. Various smart devices will be used for testing, such as smart lights, ESPs and ESPhomes, locks, and more.

## Software

### Docker

Docker will be utilized to containerize both Home Assistant and a MQTT Broker server using [Eclipse Mosquitto](https://mosquitto.org/). A `docker-compose.yaml` file will be used to seamless share the shared docker containers under the same stack and deploy them together.

### Image Detection Models

Teachable Machine will be used to create a base model for hand gesture detection using Tensorflow Lite.

OpenCV will be utilized for movement detection and hand isolation models.

## Development Tools

### Documentation

- Docusaurus

### Editors

- Visual Studio Code

### Langauges and Technologies

- Python
- JavaScript
- YAML
- OpenCV
- MQTT Messaging Protocol
