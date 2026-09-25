const element = document.getElementById("cookie")
    let start = 0;
    element.onclick = function(){
            start ++;
            console.log(start);
            
            if(start%2 == 1){
                element.width += 60;
                element.height += 60;
            } else {
                element.width -= 60;
                element.height -= 60;
            }
        }
    
     
     
        
