def leap_year(year):
    is_leap_year = year % 4 == 0 and (not year % 100 == 0 or (year % 100 == 0 and year % 400 == 0))
    return is_leap_year