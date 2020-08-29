#Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

def sortedSquares(A):
    return sorted([x**2 for x in A])

A = [-4,-1,0,3,10]
print(sortedSquares(A))

#correct!