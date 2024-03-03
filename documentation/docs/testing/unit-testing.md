---
sidebar_position: 1
---
# Unit tests

## Class Home Assistant:

Method +add_device()
def test_add_device(self):

        device = Mock()
        home_assistant = HomeAssistant()
        
        device_name = "TV"
        
        expected_devices_length = len(home_assistant.devices) + 1
        
        home_assistant.add_device(device_name, device)
        
        self.assertEqual(len(home_assistant.devices), expected_devices_length)

Method +remove_device()
    def test_remove_device(self):
        home_assistant = HomeAssistant()
        home_assistant.devices = {"TV": Mock(), "Alarm": Mock()}
    
        device_name = "TV"
    
        expected_devices_length = len(home_assistant.devices) - 1
        
        home_assistant.remove_device(device_name)
    
        self.assertEqual(len(home_assistant.devices), expected_devices_length)

Method +update_device_status()
    def test_update_device_status(self):
        home_assistant = HomeAssistant()
        home_assistant.devices = {"TV": Mock()}
        
        device_name = "TV"
        new_status = "ON"
        
        home_assistant.update_device_status(device_name, new_status)

        self.assertEqual(home_assistant.devices[device_name].status, new_status)

Method +execute_automation()
    def test_execute_automation(self):
        home_assistant = HomeAssistant()
        automation = Mock()
        
        device_name = "TV"

        expected_automation_executed = True
        
        result = home_assistant.execute_automation(device_name, automation)
        
        self.assertEqual(result, expected_automation_executed)


## Class User Interface:

Method +send_command()
    def test_send_command(self):
        home_assistant = Mock()
        user_interface = UserInterface(home_assistant)
        
        command = "Turn on TV"
        
        expected_command_sent = True
        
        result = user_interface.send_command(command)
        
        self.assertEqual(result, expected_command_sent)


Method +display_device_state():
    def test_display_device_state(self):
        home_assistant = Mock()
        user_interface = UserInterface(home_assistant)
        home_assistant.devices = {"TV": Mock()}

        device_name = "TV"
        device_state = "ON"
        
        expected_device_state_displayed = True
        
        result = user_interface.display_device_state(device_name, device_state)
        
        self.assertEqual(result, expected_device_state_displayed)    


## Class Device 

Method +update_status():
    def test_update_status(self):
        device = Device("123", "Light")
        new_status = "ON"
        expected_status_updated = True
        
        result = device.update_status(new_status)
        
        self.assertEqual(result, expected_status_updated)
        self.assertEqual(device.status, new_status)

Method +execute_capability():
    def test_execute_capability(self):
        device = Device("456", "Thermostat")
        capability = "SetTemperature"
        value = 23

        expected_capability_executed = True
        
        result = device.execute_capability(capability, value)
        self.assertEqual(result, expected_capability_executed)


## Class PythonScripts:

Method +load_model():
    def test_load_model(self):
        python_scripts = PythonScripts()
        model_path = "model.tflite"
        expected_model_loaded = True
        
        result = python_scripts.load_model(model_path)
        self.assertEqual(result, expected_model_loaded)

Method +capture_image():
    def test_capture_image(self):
        python_scripts = PythonScripts()
        expected_image_captured = True
    
        result = python_scripts.capture_image()
        self.assertEqual(result, expected_image_captured)

Method +preprocess_image():
    def test_preprocess_image(self):
        python_scripts = PythonScripts()
        image = Mock()
        expected_image_preprocessed = True

        result = python_scripts.preprocess_image(image)
        self.assertEqual(result, expected_image_preprocessed)

Method +make_prediction():
    def test_make_prediction(self):
        python_scripts = PythonScripts()
        image = Mock()
        expected_prediction = "A"
        prediction = python_scripts.make_prediction(image)
        
        self.assertEqual(prediction, expected_prediction)

## Class JavaScript Custom Cards
Method +create_card(): 
    def test_create_card(self):
        javascript_custom_cards = JavaScriptCustomCards()
        card_id = "asl_card"
        expected_card_created = True

        result = javascript_custom_cards.create_card(card_id)
        self.assertEqual(result, expected_card_created)

Method +display_image():
    def test_display_image(self):

        javascript_custom_cards = JavaScriptCustomCards()
        card_id = "asl_card"

        image_url = "https://example.com/asl_image.jpg"

        expected_image_displayed = True
    
        result = javascript_custom_cards.display_image(card_id, image_url)
    
        self.assertEqual(result, expected_image_displayed)

Method +update_display_state():
    def test_update_display_state(self):
        javascript_custom_cards = JavaScriptCustomCards()
        card_id = "asl_card"
        new_display_state = "show"
        expected_display_state_updated = True
        
        result = javascript_custom_cards.update_display_state(card_id, new_display_state)
        
        self.assertEqual(result, expected_display_state_updated)


## Class Camera

Method +capture_image():
    def test_capture_image(self):

        camera = Camera()
        python_scripts = Mock()
        camera.python_scripts = python_scripts
        
        expected_image_captured = True

        result = camera.capture_image()

        self.assertEqual(result, expected_image_captured)
        python_scripts.preprocess_image.assert_called_once()

## Class TPU 

Method +load_model():
    def test_load_model(self):
        tpu = TPU()
        expected_model_loaded = True
        result = tpu.load_model()

        self.assertEqual(result, expected_model_loaded)

Method +make_prediction():
    def test_make_prediction(self):
        tpu = TPU()
        preprocessed_image = Mock()
        expected_prediction = "A"
        prediction = tpu.make_prediction(preprocessed_image)
        
        self.assertEqual(prediction, expected_prediction)


# Integration Tests

## Use Case 1: Light control through ASL Gestures

    def test_light_control_integration(self):
        home_assistant = Mock(spec=HomeAssistant)
        user_interface = Mock(spec=UserInterface)
        python_scripts = Mock(spec=PythonScripts)
        tpu = Mock(spec=TPU)
        intelligest_home = IntelliGestHome(home_assistant, user_interface, python_scripts, tpu)

        intelligest_home.connect_device()
        gesture = "Gesture for turning lights on/off"
        intelligest_home.detect_gesture(gesture)
        user_interface.display_feedback.assert_called_once()

        home_assistant.update_device_status.assert_called_once()


## Use Case 2: Weather seeking through Gestures

        def test_weather_seeking_integration(self):
        home_assistant = Mock(spec=HomeAssistant)
        user_interface = Mock(spec=UserInterface)
        python_scripts = Mock(spec=PythonScripts)

        intelligest_home = IntelliGestHome(home_assistant, user_interface, python_scripts, tpu)
        gesture = "Gesture for seeking weather information"
        intelligest_home.detect_gesture(gesture)
        user_interface.display_feedback.assert_called_once()
        user_interface.display_processing.assert_called_once()

        user_interface.display_weather_info.assert_called_once()


## Use Case 3: Changing the Kitchen Light Color

    def test_kitchen_light_color_change_integration(self):
        home_assistant = Mock(spec=HomeAssistant)
        user_interface = Mock(spec=UserInterface)
        python_scripts = Mock(spec=PythonScripts)
        tpu = Mock(spec=TPU)
        intelligest_home = IntelliGestHome(home_assistant, user_interface, python_scripts, tpu)

        gesture = "Gesture for changing kitchen light color"
        intelligest_home.detect_gesture(gesture)
        user_interface.display_feedback.assert_called_once()

        user_interface.display_processing.assert_called_once()
        home_assistant.update_device_status.assert_called_once_with("Kitchen Light", "Yellow")


## Use Case 4: Smart lock setup and control

    def test_smart_lock_setup_and_control_integration(self):
        home_assistant = Mock(spec=HomeAssistant)
        user_interface = Mock(spec=UserInterface)
        python_scripts = Mock(spec=PythonScripts)
        tpu = Mock(spec=TPU)

        intelligest_home = IntelliGestHome(home_assistant, user_interface, python_scripts, tpu)
        smart_lock = Mock()
        intelligest_home.connect_device(smart_lock)

        user_interface.display_device_state.assert_called_once_with("Smart Lock", "Locked")
        intelligest_home.perform_action("Unlock Smart Lock")
        home_assistant.update_device_status.assert_called_once_with("Smart Lock", "Unlocked")
        intelligest_home.perform_action("Lock Smart Lock")
        home_assistant.update_device_status.assert_called_with("Smart Lock", "Locked")


## Use Case 5: Adding reminders through Gestures

    def test_reminder_addition_integration(self):
        home_assistant = Mock(spec=HomeAssistant)
        user_interface = Mock(spec=UserInterface)
        python_scripts = Mock(spec=PythonScripts)
        tpu = Mock(spec=TPU)

        intelligest_home = IntelliGestHome(home_assistant, user_interface, python_scripts, tpu)

        gesture = "Gesture for adding reminder"
        intelligest_home.detect_gesture(gesture)

        user_interface.display_feedback.assert_called_once()
        user_interface.display_processing.assert_called_once()

        reminder_text = "Buy a couple of Milk Gallons"
        python_scripts.make_prediction.return_value = reminder_text

        user_interface.ask_for_confirmation.assert_called_once_with(reminder_text)

        confirmed = True
        intelligest_home.confirm_action(confirmed)
        python_scripts.add_reminder.assert_called_once_with(reminder_text)


## Use Case 6: Temperature adjustment with ASL

    def test_temperature_adjustment_integration(self):

        home_assistant = Mock(spec=HomeAssistant)
        user_interface = Mock(spec=UserInterface)
        python_scripts = Mock(spec=PythonScripts)
        tpu = Mock(spec=TPU)

        intelligest_home = IntelliGestHome(home_assistant, user_interface, python_scripts, tpu)

        gesture = "Gesture for adjusting temperature"
        intelligest_home.detect_gesture(gesture)
        user_interface.display_feedback.assert_called_once()
        user_interface.display_processing.assert_called_once()

        temperature_change = "Hotter"
        python_scripts.make_prediction.return_value = temperature_change

        home_assistant.execute_automation.assert_called_once_with("Temperature Control", temperature_change)

        user_interface.display_confirmation.assert_called_once()


## Use Case 7: Changing Channels

    def test_tv_channel_change_integration(self):
        home_assistant = Mock(spec=HomeAssistant)
        user_interface = Mock(spec=UserInterface)
        python_scripts = Mock(spec=PythonScripts)
        tpu = Mock(spec=TPU)

        intelligest_home = IntelliGestHome(home_assistant, user_interface, python_scripts, tpu)

        gesture = "Gesture for turning on TV"
        intelligest_home.detect_gesture(gesture)
        user_interface.display_feedback.assert_called_once()

        user_interface.display_processing.assert_called_once()

        channel = "Channel to be turned on"
        python_scripts.make_prediction.return_value = channel

        home_assistant.execute_automation.assert_called_once_with("TV Control", channel)
        user_interface.display_confirmation.assert_called_once()






