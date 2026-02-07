export class environment {
    constructor() {
        this.mapOfVars = new Map();
    }
    defineEnv(name, value) {
        if (this.mapOfVars.has(name))
            throw new Error("Unable to define " + name + " ,aldready exists.");
        this.mapOfVars.set(name, value);
    }
    getEnv(name) {
        if (!this.mapOfVars.has(name))
            throw new Error(name + " is undefined.");
        return this.mapOfVars.get(name);
    }
}
//# sourceMappingURL=environment.js.map