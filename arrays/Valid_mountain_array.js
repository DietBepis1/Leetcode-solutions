/* Given an array A of integers, return true if and only if it is a valid mountain array.

Recall that A is a mountain array if and only if:

    A.length >= 3
    There exists some i with 0 < i < A.length - 1 such that:
        A[0] < A[1] < ... A[i-1] < A[i]
        A[i] > A[i+1] > ... > A[A.length - 1]
*/

var validMountainArray = function(A) {
    let n = A.length;
    let i = 0;
    
    if(n < 3) {
        return false;
    }
    
    //Climb up the mountain
    while(A[i] < A[i+1]) {
        i++;
    }
    if(A[i] == A[i+1] || i == n-1 || i == 0) {
        return false;
    }
    while(A[i] > A[i+1]) {
        i++;
    }
    if(i+1 == n) {
        return true;
    } else {
        return false;
    }
};

//Correct! Tc: O(n), Sc: O(1)