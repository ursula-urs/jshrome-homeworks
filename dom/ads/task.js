const rotators = document.querySelectorAll(".rotator");

rotators.forEach(rotator => {
    const elements = [...rotator.querySelectorAll(".rotator__case")];

    let activ = rotator.querySelector(".rotator__case_active");

    function rotate() {
        const nowactive = elements.indexOf(activ);
        const next = (nowactive + 1) % elements.length;

        const timeactive = Number(activ.getAttribute("data-speed"));

        setTimeout(() => {
            activ.classList.remove("rotator__case_active");

            activ = elements[next];

            activ.classList.add("rotator__case_active");
            activ.style.color = activ.getAttribute("data-color");

            rotate();
        }, timeactive);
    }

    rotate();
});