// add whatever parameters you deem necessary
function longestFall(arr) {
    if (arr.length === 0) return 0;

    let maxFall = 1;
    let currentFall = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            currentFall++;
        } else {
            maxFall = Math.max(maxFall, currentFall);
            currentFall = 1;
        }
    }

    // Final check to account for the case where the longest fall is at the end of the array
    maxFall = Math.max(maxFall, currentFall);

    return maxFall;
}

