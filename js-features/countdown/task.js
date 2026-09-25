const element = document.getElementById("timer")
let time = 59;

function timer(){

    const interval = setInterval(() => {
        element.textContent = time; 
        console.log(time - 1);
        
        if(time == 0){
        clearInterval(interval);
        alert("Победа");
        }
        time --;
}, 1000);
}

timer();