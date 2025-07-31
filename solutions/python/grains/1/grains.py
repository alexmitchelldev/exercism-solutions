def square(number):
    if number < 1 or number > 64:
        raise ValueError("square must be between 1 and 64")
    
    return pow(2, number - 1)

    

def total():
    total_grains_on_the_board = 0

    for i in range(64):
        total_grains_on_the_board += square(i + 1)

    return total_grains_on_the_board