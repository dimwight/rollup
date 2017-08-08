(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./myFormat", "./consoleError"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var myFormat_1 = require("./myFormat");
    var consoleError_1 = require("./consoleError");
    function announceTime() {
        var time = new Date();
        var text = true ? 'Time is exactly ' + myFormat_1["default"](time, 'h:mm:ssa')
            : 'Time is about ' + myFormat_1["default"](time, 'h:mm');
        if (typeof document === 'undefined')
            console.log(text);
        else {
            document.getElementById('pageTitle').innerText = document.title;
            document.querySelector('#time-now').textContent = text;
            setTimeout(announceTime, 1000);
        }
    }
    consoleError_1["default"]();
    announceTime();
});
//target: esnext
//module: commonjs
//external: true
//format: iife
//# sourceMappingURL=main.js.map