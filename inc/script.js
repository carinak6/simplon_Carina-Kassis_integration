console.log('Hola');

document.querySelector("#_nav").addEventListener('click', ()=>{
    //alert('Hola');
    if(document.querySelector("#menu").style.display !='none'){
        document.querySelector("#menu").style.display='none';
    }else{
        document.querySelector("#menu").style.display='block';
    }
    
});

let les_bouton = document.querySelectorAll("#menu>ul>li");

les_bouton.forEach((item, index)=>{
    let titre = item.querySelector('a').text;
    item.addEventListener('click',()=>{
        alert('clique sur '+titre);
    })
    /* console.log(titre);
    console.log(item);
    console.log(index); */
})