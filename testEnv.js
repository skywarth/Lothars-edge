let actuals;
let ghosts;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


class dataPack{
    constructor(data, status) {
        this.data = data;
        this.status = status;
    }
}