export class Robot {
    #_name;
    constructor() { this.#_name = RobotNameGen.getName() }
    get name() { return this.#_name }
    reset() { this.#_name = RobotNameGen.getName() }
    static releaseNames() { RobotNameGen.releaseNames() }
}
class RobotNameGen {
    static names;
    static nameIndex = 0;
    static _initialize = (() => {
        RobotNameGen.names = [];
        for (let c = 65; c < 91; c++) {
            for (let c2 = 65; c2 < 91; c2++) {
                for (let num = 0; num < 1000; num++) {
                    let name = `${String.fromCharCode(c)}${String.fromCharCode(c2)}${num.toString().padStart(3, '0')}`;
                    RobotNameGen.names.push(name)
                }
            }
        }
        RobotNameGen.names = RobotNameGen.shuffle(RobotNameGen.names)
    })();
    static shuffle(array) {
        // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        let currentIndex = array.length;
        let randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    static getName() {
        return RobotNameGen.names[RobotNameGen.nameIndex++];
    }
    static releaseNames() {
        RobotNameGen.nameIndex = 0;
    }
}