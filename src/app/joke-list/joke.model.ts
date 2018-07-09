class Joke {
    setup: String;
    punchline: String;
    hide: boolean;

    constructor(setup: String, punchline: String) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }

    toggle() {
        this.hide = !this.hide;
    }
}

export default Joke;