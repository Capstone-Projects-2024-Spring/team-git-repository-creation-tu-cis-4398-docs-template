import unittest
from intelligest_smart_home.add_nums import add_numbers

class TestAddNumbers(unittest.TestCase):
    def test_addition(self):
        result = add_numbers(1, 2)
        self.assertEqual(result, 3)

if __name__ == '__main__':
    unittest.main()
