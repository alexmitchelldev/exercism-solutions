const NAMES = new Set();

export class Robot {
    static generateName () {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let generateNameString = () => {
            let name = '';
            for (let i = 0; i < 2; i++) {
                name += alphabet[Math.floor(Math.random() * 26)];
            }
            for (let i = 0; i < 3; i++) {
                name += Math.floor(Math.random() * 10).toString();
            }
            return name;
        }
        let name = generateNameString();
        if (!NAMES.has(name)) {
            NAMES.add(name);
        }
        do {
            name = generateNameString();
            NAMES.add(name);
        } while (!NAMES.has(name));
        return name;
    }

    constructor () {
        this.name = Robot.generateName();
        this.usedNames = new Set();
    }
    

    reset () {
        let name = Robot.generateName();
        this.name = name;
    }
}

Robot.releaseNames = () => {};
