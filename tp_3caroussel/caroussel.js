
const my_caroussel = document.querySelector('.caroussel');
const btn_prec = document.getElementById('prec');
const btn_suiv = document.getElementById('suiv');
const contain_photo = document.getElementById('photo')

var nbimg = 8;
var i = 1;


document.body.onload = function(){
 
        setInterval(() => {
            if(i>nbimg){
                i=1;
            }

            contain_photo.setAttribute("src", `../tp_3caroussel/imgcar/img${i}.png`)
            console.log(i);
            i++ ;
        }, 5000);



    btn_prec.onclick = function(){  

        if(i < 1){
            i=nbimg;//8
        }
        contain_photo.setAttribute("src", `../tp_3caroussel/imgcar/img${i}.png`)

        i--;
    }


    btn_suiv.onclick = function(){

        if(i>nbimg){
            i=1;
        }
        contain_photo.setAttribute("src", `../tp_3caroussel/imgcar/img${i}.png`)
        i++;
        
    }
    
}


 
