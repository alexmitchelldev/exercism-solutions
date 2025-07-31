def get_number_of_digits(number):
    """
    :param number: int - a whole integer number
    :return: int - total number of digits in the number
    """

    return len(str(number))

def get_number_digits_as_list(number):
    """
    :param number: int - a whole integer number
    :return: list - all of the number's digits as a list 
    """
    return [int(d) for d in str(abs(number))]

def is_armstrong_number(number):
    """
    param: number - int - a whole integer number
    :return: bool - whether the number is a armstrong number or not
    """
    number_of_digits = get_number_of_digits(number)
    digits = get_number_digits_as_list(number)
    total = 0

    for d in digits:
        total = total + (pow(d, number_of_digits))
    
    is_armstrong_number = number == total

    return is_armstrong_number