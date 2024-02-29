import unittest
from unit import add_numbers

class Test(unittest.TestCase):
    def test_add_numbers(self):
        self.assertEqual(add_numbers(1, 2), 3)
    
    def test_add_numbers_fail(self):
        self.assertEqual(add_numbers(1, 3), 3)

if __name__ == '__main__':
    unittest.main()