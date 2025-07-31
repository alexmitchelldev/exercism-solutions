
    export const encode = (plainString, numRails, isDecode = false) => {
        let railFenceArray = initRailFenceArray(numRails);
        let currentRail = 0;
        let direction = 'down';
        let railLengthsArray = [];

        for (let i = 0; i < plainString.length; i++) {
            railFenceArray[currentRail].push(plainString[i]);

            direction === 'down' ? currentRail++ : currentRail --;
            if (currentRail === 0 || currentRail === (numRails - 1)) {
                direction = direction === 'down' ? 'up' : 'down';
            }
        };

        if (isDecode) {
            for (const rail of railFenceArray) {
                railLengthsArray.push(rail.length);
            }
        }

        return isDecode ? railLengthsArray : railFenceArray.join('').split(',').join('');
    };

export const decode = (cipherString, numRails) => {
    let railFenceArray = [];
    let currentRail = 0;
    const isDecode = true;
    const railLengthsArray = encode(cipherString, numRails, isDecode);
    let index = 0;
    let direction = 'down';
    let plainString = '';

    for (let i = 0; i < railLengthsArray.length; i++) {
        if (i === 0) {
            railFenceArray.push(cipherString.substring(index, railLengthsArray[i]).split(''));
        }
        else {
            index += railLengthsArray[i - 1];
            railFenceArray.push(cipherString.substring(index, index + railLengthsArray[i]).split(''));
        }
    }

    for (let j = 0; j < cipherString.length; j++) {
        plainString += railFenceArray[currentRail].shift();

        direction === 'down' ? currentRail++ : currentRail --;
        if (currentRail === 0 || currentRail === (numRails - 1)) {
            direction = direction === 'down' ? 'up' : 'down';
        }
    }

    return plainString;
};

const initRailFenceArray = numRails => {
    let railFenceArray = [];

    for (let i = 0; i < numRails; i++) {
        railFenceArray.push([]);
    }

    return railFenceArray;
}