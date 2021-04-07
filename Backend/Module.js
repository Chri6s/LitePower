class Module {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    init() {
        console.log(`%c [ ${this.name} ]`, `color: ${this.color}; font-size: 14px`);
    }
}