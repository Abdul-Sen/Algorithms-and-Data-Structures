var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] != undefined && nums[i + 1] == nums[i]) {
            nums.splice(i, 1);
            i -= 1;
        }
    }

    return nums.length;
};