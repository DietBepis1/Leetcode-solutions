/*Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

    i != j
    0 <= i, j < arr.length
    arr[i] == 2 * arr[j]
*/
var checkIfExist = function(arr) {
    if(arr.length == 0) {
        return false;
    }

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            if((arr[j] == arr[i]*2) || (arr[j] == arr[i]/2)) {
                return true;
            }
        }
    }
    return false;
};

arr = [1, 2, 4, 5, 3, 7];
console.log(checkIfExist(arr));

//Correct! tc: O(n^2), sc: O(n) Not the most efficient algorithm. Better ones involve sets or hashmaps but I haven't learned that as of 8/24/20.