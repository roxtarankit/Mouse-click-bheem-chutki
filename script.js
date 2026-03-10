var chutki=document.querySelector('img')
var text=document.querySelector('h2 span')

chutki.addEventListener('mouseenter',function(){
   text.innerHTML='Chutki se dur ho jaw ' 
})

chutki.addEventListener('mouseleave',function(){
    text.innerHTML='ha ab dur hi rehna '
})