def steps(number):
    """
    :param number: int - 
    :return total_steps: int - 
    """

    if not isinstance(number, int) or number <= 0:
        raise ValueError("Only positive integers are allowed")

    total_steps = 0;

    while (number != 1):
        
        if number % 2 == 0:
            number /= 2
            total_steps += 1
        else:
            number *= 3
            number += 1
            total_steps += 1

    return total_steps