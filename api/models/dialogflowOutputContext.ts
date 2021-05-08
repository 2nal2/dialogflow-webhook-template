export default class DialogflowOutputContext {
    name: string;
    lifespanCount: number;
    parameters: object;

    constructor(name: string, lifespanCount: number, parameters?: object) {
        this.name = name;
        this.lifespanCount = lifespanCount;
        this.parameters = parameters || {};
    }
}
