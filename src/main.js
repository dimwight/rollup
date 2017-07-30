"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const consoleError_1 = require("./consoleError");
function announceTime() {
    const time = new Date();
    const text = true ? 'Time is exactly ' + date_fns_1.format(time, 'h:mm:ssa')
        : 'Time is about ' + date_fns_1.format(time, 'h:mm');
    if (typeof document === 'undefined')
        console.log(text);
    else {
        document.getElementById('pageTitle').innerText = document.title;
        document.querySelector('#time-now').textContent = text;
        setTimeout(announceTime, 1000);
    }
}
announceTime();
consoleError_1.default();
//# sourceMappingURL=main.js.map