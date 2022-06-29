export default class NpoPlayer {
    private _token: string;

    constructor(token: string) {
        this._token = token;
    }

    get token(): string {
        console.log("__TOKEN__", this._token);
        return this._token;
    }

    doSomeCoolStuff() {
        console.log("COOL STUFF");
    }
}
