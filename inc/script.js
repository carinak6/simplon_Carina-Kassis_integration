console.log('Hola');
let les_bouton = document.querySelectorAll("#menu>ul>li");

(function() {
    //alert('Comienza '+les_bouton[0].querySelector('a').text);
    les_bouton[0].style.backgroundColor="red";
    les_bouton[0].querySelector('a').style.color="white";

 
 })();

document.querySelector("#_nav").addEventListener('click', ()=>{
    //alert('Hola');
    if(document.querySelector("#menu").style.display !='none'){
        document.querySelector("#menu").style.display='none';
        
    }else{
        document.querySelector("#menu").style.display='block';
    }
    
});



les_bouton.forEach((item, index)=>{
    let titre = item.querySelector('a').text;
    item.addEventListener('click',()=>{
        alert('clique sur '+titre);
        item.style.backgroundColor="red";
        item.querySelector('a').style.color="white";
    })
    
    /* console.log(titre);
    console.log(item);
    console.log(index); */
})