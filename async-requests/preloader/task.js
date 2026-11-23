let xhr = new XMLHttpRequest();
const loader = document.getElementById('loader');
const element = document.getElementById("items");
xhr.open('GET', `http://localhost:3333/slow-get-courses`);
xhr.responseType = 'json';

xhr.addEventListener('readystatechange', ()=> {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
       const otvet = xhr.response;
       const valutes = otvet.response.Valute;
       for(const valute in valutes){
    
        element.insertAdjacentHTML('beforeEnd', `
            <div class="item">
            <div class="item__code">${valutes[valute].CharCode}</div>
            <div class="item__value">${valutes[valute].Value}</div>
            <div class="item__currency"> руб.</div>
              </div>
              `)
       }
    }
    });

    xhr.onloadend = function() {
  loader.classList.remove('loader_active');
  
    }

xhr.send();


