const inputElement = document.getElementById('task__input'); //то что вводит пользователь
const tasksList = document.getElementById('tasks__list');//
const button = document.querySelector('.tasks__add').addEventListener('click', (e) => {// кнопка
    e.preventDefault();

    if(!inputElement.value.trim()){
        return; 
    }
    
    tasksList.insertAdjacentHTML('beforeEnd', `
        <div class="task">
            <div class="task__title">${inputElement.value}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
        
        inputElement.value = ""; 
        e.target.classList.contains('task__remove');
})

tasksList.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (e.target.closest('.task__remove')) {
        e.target.closest('.task').remove();
    }
});
