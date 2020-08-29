#Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
#Note that elements beyond the length of the original array are not written.
#Do the above modifications to the input array in place, do not return anything from your function.

def duplicateZeros(arr):
    size=len(arr)
    i = 0
    while i < size:
        if arr[i] == 0:
            arr.insert(i, 0)
            del(arr[-1])
        i += 2
    return arr

arr = [1,2,0,3,4,0,5]
print(duplicateZeros(arr))

#correct!