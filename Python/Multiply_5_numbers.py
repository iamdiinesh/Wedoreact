# Python 3 program to multiply all numbers in
# the given list by importing operator module

from operator import*
list1 = [1, 2, 3]
m = 1
for i in list1:
# multiplying all elements in the given list 
# using mul function of operator module
	m = mul(i, m)
# printing the result
print(m)
