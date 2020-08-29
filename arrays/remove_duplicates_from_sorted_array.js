/*Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory. */
/*var removeDuplicates = function(nums) {
    let i = 0;
    while(i<nums.length) {
        if(nums[i] == nums[i+1]) {
            nums.splice(i,1);
        }
        else {
            i++;
        }
    }
    return nums.length
};

*/


//Correct! tc: O(n), sc: O(n)

var removeDuplicates = function(nums) {
    if(nums.length==0) {
        return 0;
    }
    let i = 0;
    for(let j = 1; j < nums.length; j ++) {
        if(nums[j] != nums[i]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

let nums = [1, 1, 1, 1, 4, 5];
console.log(removeDuplicates(nums))

//Correct! and better because tc: O(n), sc: O(1)