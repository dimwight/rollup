"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var span = document.querySelector('#time-now');
function update() {
    span.textContent = 'Time ' + date_fns_1.format(new Date(), 'h:mm:ssa');
    setTimeout(update, 1000);
}
exports.default = update;
//# sourceMappingURL=update.js.map