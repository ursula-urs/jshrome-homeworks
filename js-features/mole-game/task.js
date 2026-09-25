const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let klic = 0;
let miss = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = function () {

        if (hole.className.includes('hole_has-mole')) {
            klic += 1;
            dead.textContent = klic;
        } else {
            miss += 1;
            lost.textContent = miss;
        }

        if (klic == 10) {
            alert("Вы выиграли");
            klic = 0;
            miss = 0;
            dead.textContent = klic;
            lost.textContent = miss;
        } else if (miss == 5) {
            alert("Вы проиграли");
            klic = 0;
            miss = 0;
            dead.textContent = klic;
            lost.textContent = miss;
        }
    };
}