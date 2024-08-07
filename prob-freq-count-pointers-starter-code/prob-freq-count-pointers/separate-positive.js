// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Move left pointer to the right until a negative number is found
        while (arr[left] > 0 && left < right) {
            left++;
        }
        // Move right pointer to the left until a positive number is found
        while (arr[right] < 0 && left < right) {
            right--;
        }
        // Swap the numbers if left is positive and right is negative
        if (left  < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr;
}
