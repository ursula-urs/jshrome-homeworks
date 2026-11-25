const containerTextQueshens = document.getElementById('poll__title');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE && xhr.status === 200 ){
        const otvet = xhr.response;
        containerTextQueshens.textContent = otvet.data.title;
        const containerButton = document.getElementById("poll__answers");
        let answers = otvet.data.answers;

        for(let answer of answers){
          const button = document.createElement('button');
          button.classList.add('poll__answer');
          button.textContent = answer;
          containerButton.append(button);

          button.addEventListener('click', ()=>{
            alert("Спасибо, ваш голос засчитан!");
          })
          
        }

      }
})





xhr.send();