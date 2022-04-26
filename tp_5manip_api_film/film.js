
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

var page = 1;

const contain_elts = document.querySelector('.contain');
const container_elts = document.querySelector('.container');
// const div_search = document.getElementById('research');
const research = document.getElementById('search');

getMovi(APIURL+page)
// console.log(APIURL);
function getMovi(url){
    fetch(url)
    .then(response=>{
        const my_json_movie = response.json();//recupération fichier json

        //recupération de la clé
        my_json_movie.then(function(my_key){
            const movi_key = my_key.results;

            //parcourir le tableau
            movi_key.forEach(key_elt => {
                creatObjet(key_elt);
            });
        });

    });
}

/* setTimeout(() => {
    fun();
}, 3000);

function fun(){
    $('#loader').addClass("hide-loader");
} */

research.onkeyup = (e)=>{
    e.preventDefault();
    const search_value = research.value;

    if(search_value){
        contain_elts.innerHTML='';
        getMovi(SEARCHAPI+search_value);
    }else{
        getMovi(APIURL);
    }
}






function creatObjet(my_elt){
    const div1_movi = document.createElement('div');
    const div2_img = document.createElement('div');
    const div3_title = document.createElement('div');
    const div_descript = document.createElement('div');

    const my_img = document.createElement('img');
    const title_movi = document.createElement('h2');
    const my_span = document.createElement('span');
    const my_p = document.createElement('p');

    div1_movi.className = 'movies';
    div2_img.className='img';
    my_img.className='view';
    div3_title.className='movi_title';
    div_descript.className='description';

    my_img.src=IMGPATH+my_elt.poster_path;

    title_movi.innerHTML=my_elt.title;
    my_span.innerHTML = my_elt.vote_average;
    my_p.innerHTML = my_elt.overview;
   


    div2_img.appendChild(my_img);
    div1_movi.appendChild(div2_img);
    div1_movi.appendChild(div3_title);
    div1_movi.appendChild(div_descript);

    div3_title.appendChild(title_movi);
    div3_title.appendChild(my_span);
    div_descript.appendChild(my_p);

    contain_elts.appendChild(div1_movi);


    /* my_img.addEventListener('mouseover', (e)=>{
        
        div_descript.style.display= 'block';
       
    }) */
    
}


//Scroll Event
window.onscroll=function(){
    // alert('ooooookk')
    console.log('sssssss')
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        
        getMovi(APIURL+page);
        page++;
    }
}


//Onloading window

window.onload = function(){
    if(document.readyState){
        setTimeout(() => {
            const my_loader = document.querySelector('.loader');
            my_loader.style.visibility='hidden';
            container_elts.style.visibility='visible';
        }, 3000);

    }else{
        my_loader.style.visibility='visible';
        container_elts.style.visibility='hidden';
    }

}

































































// async function getMovi(my_url){
//     const resp = await fetch(my_url);
//     const my_data = await resp.json();
    
//      console.log(my_data.results);
// }


// research.addEventListener('keyup', function(e){
//     e.preventDefault();
//     const search_value = research.value;

//     if(search_value && search_value.value !==""){
//         getMovi(APIURL+search_value);
//         /* search_value=""; */
//     }else{
//         window.location.reload();
//     }
// })




