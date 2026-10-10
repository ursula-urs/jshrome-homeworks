const content = document.querySelectorAll('.tab__content');
const tabs = document.querySelectorAll('.tab');

tabs.forEach((vkladka, index) => {
    vkladka.addEventListener('click', (e) => {
        
        tabs.forEach(vkladk => {
            vkladk.classList.remove('tab_active');
    
        });

        content.forEach(i => {
            i.classList.remove('tab__content_active');
        })
        
        e.currentTarget.classList.add('tab_active');
        content[index].classList.add('tab__content_active')
    });
});
