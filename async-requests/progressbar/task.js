const progress = document.getElementById("progress");
const button = 	document.getElementById("send");
const form = document.getElementById("form")
const file = document.getElementById("file");

form.addEventListener("submit", (event)=> {
     event.preventDefault();

     let xhr = new XMLHttpRequest();
     xhr.open('POST', "https://students.netoservices.ru/nestjs-backend/upload");
     const formData = new FormData(form);
     
     xhr.upload.addEventListener("progress", (e)=>{
        let value = e.loaded/e.total;
        progress.value = value;
    
    })
xhr.send(formData);
})

