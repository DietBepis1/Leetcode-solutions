#Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

def merge(arr1, m, arr2, n): #m and n are the size of arr1 and arr2 b/c they may be zero-filled
    j = m
    for i in range(0,n):
        arr1[j] = arr2[i]
        j += 1

arr1 = [1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0]
arr2 = [2, 5, 6, 7, 8, 9]
print(merge(arr1, 5, arr2, 6))



#arr = [0, 0 , 0, 0 ,0 ,0]
#print(len(arr))

#Correct!