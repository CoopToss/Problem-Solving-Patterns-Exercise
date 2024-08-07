// add whatever parameters you deem necessary
function constructNote(message, letters) {
    // Helper functionn to create a frequency counter
    function createFrequencyCounter(str) {
        const freqCounter = {};
        for (let char of str) {
            freqCounter[char] = (freqCounter[char] || 0) + 1;
        }
        return freqCounter;
    }

    // Create frequency counters for message and letters
    const messageFreq = createFrequencyCounter(message);
    const lettersFreq = createFrequencyCounter(letters);

    // Check if message can be constructed from letters
    for (let char in messageFreq) {
        if (messageFreq[char] > (lettersFreq[char] || 0)) {
            return false;
        }
    }

    return true;
}
