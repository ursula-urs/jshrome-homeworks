const worls = document.querySelectorAll('.has-tooltip');
let previoushint;

worls.forEach((word) => {

    word.addEventListener('click', (e) =>{
        e.preventDefault();
        
        if (previoushint){
            previoushint.remove();
        }
        const text = word.getAttribute("title");
        
        let element = document.createElement('div');
        
        
        element.classList.add("tooltip");

        const position = word.getBoundingClientRect();
        element.style.left = `${position.left}px`;
        element.style.top = `${position.bottom}px`;

        
        
        
        element.textContent = text;

        
        document.body.append(element);
        previoushint = element;

        element.classList.add('tooltip_active');
    })
});
