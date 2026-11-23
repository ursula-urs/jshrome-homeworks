const element = document.getElementById('poll__title');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3333/poll');
xhr.responseType = 'json';

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE && xhr.status === 200 ){
        const otvet = xhr.response;


        element.insertAdjacentElement('beforeEnd', `
            <div class="poll__title" id="poll__title">
            <!--   Как вы относитесь к собакам? -->
          </div>
          <div class="poll__answers poll__answers_active" id="poll__answers">
            <!-- <button class="poll__answer">
              Хорошо
            </button>
            <button class="poll__answer">
              Отлично
            </button>
            <button class="poll__answer">
              Я люблю собак
            </button>
            <button class="poll__answer">
              Кто тут?
            </button> -->
          </div>
        </div>
      </div>



            `)
    }
})





xhr.send();