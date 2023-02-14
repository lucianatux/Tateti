document.getElementById('darkmode').addEventListener('click', function(){
    if (document.body.style.background == 'var(--second-color)'){
        document.body.style.background = 'var(--first-color)';
        document.body.style.color = 'var(--second-color)'
    }else{  
        document.body.style.background = 'var(--second-color)';
        document.body.style.color = 'var(--first-color)'
    }
})