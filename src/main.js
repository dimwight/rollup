import myFormat from './myFormat';
import errorTest from './consoleError';
function announceTime() {
    var time = new Date();
    var text = true ? 'Time is exactly ' + myFormat(time, 'h:mm:ssa')
        : 'Time is about ' + myFormat(time, 'h:mm');
    if (typeof document === 'undefined')
        console.log(text);
    else {
        document.getElementById('pageTitle').innerText = document.title;
        document.querySelector('#time-now').textContent = text;
        setTimeout(announceTime, 1000);
    }
}
errorTest();
announceTime();
//# sourceMappingURL=main.js.map