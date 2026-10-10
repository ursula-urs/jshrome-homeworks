const elements = document.querySelectorAll('.dropdown')//элементы, которые подходят под этот CSS-селектор»

elements.forEach(element => {
    const lists = element.querySelector('.dropdown__list');
    const list = element.querySelector('.dropdown__value');

    list.addEventListener("click", function() {
        lists.classList.toggle('dropdown__list_active')
    })
    
});