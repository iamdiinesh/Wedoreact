num = []
sum = 0
print(end="Enter the Value of n: ")
n = int(input())

print(end="Enter " + str(n) + " Numbers: ")
for i in range(n):
    num.insert(i, int(input()))

for i in range(n):
    sum = sum+num[i]

print("\nSum of " + str(n) + " Numbers = " + str(sum))
