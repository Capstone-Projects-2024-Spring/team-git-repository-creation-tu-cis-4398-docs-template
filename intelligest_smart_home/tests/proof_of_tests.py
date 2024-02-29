import unittest
from intelligest_smart_home.add_nums import add_numbers

class TestAddNumbers(unittest.TestCase):
    def test_addition(self):
        result = add_numbers(1, 2)
        self.assertEqual(result, 3)
    
    def test_addition_negative(self):
        result = add_numbers(-1, -2)
        self.assertEqual(result, -3)

    def test_addition_zero(self):
        result = add_numbers(0, 0)
        self.assertEqual(result, 0)

    def test_addition_float(self):
        result = add_numbers(1.5, 2.5)
        self.assertEqual(result, 4)
    
    def test_addition_positive_negative(self):
        result = add_numbers(1, -2)
        self.assertEqual(result, -1)    


if __name__ == '__main__':
    unittest.main()

