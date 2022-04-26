
const my_notif = document.querySelectorAll('button');

const my_contain = document.querySelector('.show_notif');


function notification(){
    const my_div = document.createElement('div');
    my_div.setAttribute('id', 'show');
    my_contain.appendChild(my_div);
    return my_div;

}

// for(let i=0; i< my_notif[i].length; i++){
    
//     my_notif[0].addEventListener('click', notification())
    
// }

my_notif.forEach(function(btn){
    btn.addEventListener('click', function(e){
        let color = btn.getAttribute('data-color')
        color=color[0].toUpperCase() + color.slice(1);
        let div=notification();
        div.textContent=`Notification ${color}`;
        div.classList.add('Resultat'+color); //ajout de l'ensemble des classes  des bouttons dans le div
        
        setTimeout(function(){my_contain.removeChild(div)},2000);
    
    }) 
})

/* my_notif[0].addEventListener('click', function(e){

    let div=notification();
    div.textContent='Notification Success';
    div.classList.add('ResultatSucces');
    setTimeout(function(){my_contain.removeChild(div)},2000);

})

my_notif[1].addEventListener('click', function(e){

    let div=notification();
    div.textContent='Notification Danger';
    div.classList.add('ResultatDanger');
    setTimeout(function(){my_contain.removeChild(div)},2000);


})

my_notif[2].addEventListener('click', function(e){

    let div=notification();
    div.textContent='Notification Warning';
    div.classList.add('ResultatWarning');
    setTimeout(function(){my_contain.removeChild(div)},2000);

})

my_notif[3].addEventListener('click', function(e){

    let div=notification();
    div.textContent='Notification Info';
    div.classList.add('ResultatInfo');
    setTimeout(function(){my_contain.removeChild(div)},2000);

})

 */