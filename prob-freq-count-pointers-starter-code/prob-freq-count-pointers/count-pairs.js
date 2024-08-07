// add whatever parameters you deem necessary
function countPairs(arr, targetSum) {
    const seen = new Set();
    let count = 0;

    for (let num of arr) {
        let complement = targetSum - num;
        if (seen.has(complement)) {
            count++;
        }
        seen.add(num);
    }

    return true;
}
