const bloks = document.querySelectorAll(".reveal");
window.addEventListener('scroll', () => {
    bloks.forEach((blok) => {
        const b = blok.getBoundingClientRect();
        if(b.bottom > 0  && b.top < window.innerHeight){
            blok.classList.add('reveal_active');
        }
       });
});
