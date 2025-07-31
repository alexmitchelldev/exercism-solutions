def equilateral(sides):
    return is_valid_triangle(sides) and all(side == sides[0] for side in sides)

def isosceles(sides):
    side1, side2, side3 = sides
    return is_valid_triangle(sides) and ((side1 == side2 or side1 == side3) or (side2 == side3))

def scalene(sides):
    side1, side2, side3 = sides
    return is_valid_triangle(sides) and side1 != side2 and side1 != side3 and side2 != side3 

def is_valid_triangle(sides) -> bool:
    side1, side2, side3 = sides
    valid_sides = [
        (side1 + side2 >= side3),
        (side2 + side3 >= side1),
        (side1 + side3 >= side2)
    ]
    return len(sides) == 3 and all(sides) > 0 and all(valid_sides)