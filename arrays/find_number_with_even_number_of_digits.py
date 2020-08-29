def findNumbers(nums):
    even = 0
    counter = 0
    
    for num in nums:
        num = [int(i) for i in str(abs(num))]
        counter = len(num)
        if counter%2 == 0:
            even += 1

    return even    

n = [111, 234, 2, -45678, 1000]
print(findNumbers(n))


#Correct!