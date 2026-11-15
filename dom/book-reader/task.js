const fonts = document.querySelectorAll('.font-size') 
const book = document.querySelector('.book')

fonts.forEach(font => {

    font.addEventListener('click', () =>{
        event.preventDefault();

        fonts.forEach(nowactive => {
            nowactive.classList.remove('font-size_active');
        })
        
        const size = font.getAttribute('data-size');
        font.classList.add('font-size_active');
        
        book.classList.remove('book_fs-big', 'book_fs-small');
        
        if(size === "small"){
            
             book.classList.add('book_fs-small');
        }

        if(size === "big"){
            
             book.classList.add('book_fs-big')

        }
    } 
    
    )
    
});