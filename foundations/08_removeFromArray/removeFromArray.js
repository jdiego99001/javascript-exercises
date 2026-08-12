const removeFromArray = function(arr, ...nums) {
    for (let i = 0; i <= (nums.length - 1); i++) {
        if (arr.includes(nums[i])) {
            const indexElement = arr.indexOf(nums[i], 0)
            arr.splice(indexElement, 1)
        }
        else {
            continue;
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
