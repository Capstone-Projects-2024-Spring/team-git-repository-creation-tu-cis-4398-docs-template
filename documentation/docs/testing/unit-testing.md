---
sidebar_position: 1
---
# Unit tests
For each method, one or more test cases.

A test case consists of input parameter values and expected results.

All external classes should be stubbed using mock objects.

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
        # Stubbing external classes
        device = Device("123", "Light")
        
        # Input parameters
        new_status = "ON"
        
        # Expected results
        expected_status_updated = True
        
        # Method execution
        result = device.update_status(new_status)
        
        # Assertion
        self.assertEqual(result, expected_status_updated)
        self.assertEqual(device.status, new_status)

Method +execute_capability():

def test_execute_capability(self):
        # Stubbing external classes
        device = Device("456", "Thermostat")
        
        # Input parameters
        capability = "SetTemperature"
        value = 23
        
        # Expected results
        expected_capability_executed = True
        
        # Method execution
        result = device.execute_capability(capability, value)
        
        # Assertion
        self.assertEqual(result, expected_capability_executed)