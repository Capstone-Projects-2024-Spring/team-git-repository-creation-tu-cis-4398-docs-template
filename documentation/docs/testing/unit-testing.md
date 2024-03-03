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
