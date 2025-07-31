def square_of_sum(number):
    total = 0

    for i in range(number + 1):
        total += i

    return pow(total, 2)

def sum_of_squares(number):
    total = 0

    for i in range(number + 1):
        total += pow(i, 2)

    return total

def difference_of_squares(number):
    square_of_the_sum = square_of_sum(number)
    sum_of_the_squares = sum_of_squares(number)

    return square_of_the_sum - sum_of_the_squares
