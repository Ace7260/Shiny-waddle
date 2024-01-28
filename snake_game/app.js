const snk = document.querySelector(".snake");
const cont = document.querySelector(".containeur");
let x = (cont.offsetHeight - 80) / 2;
let y = cont.offsetWidth / 2;

// snk.addEventListener('', (e) => {
//     snk.style = "transform:translateX(10px)";
// })

snk.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if (name === 'Control') {
        // Do nothing.
        snk.style += "transform:translateX(" + x + ")";
        return;
    }
    if (event.ctrlKey) {
        alert(`Combination of ctrlKey + ${name} \n Key code Value: ${code}`);
    } else {
        alert(`Key pressed ${name} \n Key code Value: ${code}`);
    }
}, true);