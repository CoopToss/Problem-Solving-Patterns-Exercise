// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();

    if (str1.length !== str2.length) {
        return false;
    }

    const freqCounter1 = {};
    const freqCounter2 = {};

    for (let digit of str1) {
        freqCounter1[digit] = (freqCounter1[digit] || 0) + 1;
    }

    for (let digit of str2) {
        freqCounter2[digit] = (freqCounter2[digit] || 0) + 1;
    }

    for ( let key in freqCounter1) {
        if (freqCounter1[key] !== freqCounter2[key]) {
            return false;
        }
    }

    return true;
}
