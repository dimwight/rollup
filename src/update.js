"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
let span = document.querySelector('#time-now');
function update() {
    const time = new Date();
    span.textContent = true ? 'Time is exactly ' + date_fns_1.format(time, 'h:mm:ssa')
        : 'Time is about ' + date_fns_1.format(time, 'h:mm');
    setTimeout(update, 1000);
}
exports.default = update;
//# sourceMappingURL=update.js.map