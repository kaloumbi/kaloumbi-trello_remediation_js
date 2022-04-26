
const body =document.createElement('body');
const btn_display = document.getElementById('display');
const btn_add = document.getElementById('add');
const btn_note = document.getElementById('note');
const btn_close = document.getElementById('btn_close');

const btn_ajout = document.getElementById('btn_sub');
const btn = document.querySelector('.btn');
const div_contain = document.querySelector('.contain');
const div_mod = document.querySelector('.modal');
const container2 = document.getElementById('container2');

const trash_couch = document.querySelector('.trash_couch');
const trash = document.getElementById('trash');
const im_trash = document.querySelector('.im_trash');

const form = document.querySelector('.form');

const tab_color = ['#C0C0C0', '#BC8F8F', '#ffb6c1', '	#9ACD32', '#90EE90'];

var i=0, j_color=0;

//++++++++modal && ErrorMessages

// var errorarea = document.getElementById('errorarea');
// errorarea.innerHTML='Text Obligatoire!!!'

var my_date = document.getElementById('date');
// var errordate = document.getElementById('errordate');
// errordate.innerHTML='Date Obligatoire!!!'


var hd = document.getElementById('hd');
// var errorhd = document.getElementById('errorhd');
// errorhd.innerHTML='Heure Début Obligatoire!!!'


var hf = document.getElementById('hf');
// var errorhf = document.getElementById('errorhf');
// errorhf.innerHTML='Heure Fin Obligatoire!!!'


var left = document.getElementById('prec');
var right = document.getElementById('suiv');



//++++++++++++Functions

function elementGenerate(){
   
    i++;
    let div_modal = document.createElement('div');
    // let div_trash = document.createElement('div');
    let input_title = document.createElement('span');
    input_title.setAttribute('class','modal_title ok');
    // input_title.setAttribute('class','modal_title');

    let span_input = document.createElement('input');
    let div_taches = document.createElement('div');
    let supr_img = document.createElement('img');

    span_input.style.display='none'
    input_title.innerHTML = 'Colonne'+i;
    input_title.style.cursor='pointer';
    
    input_title.addEventListener('click', ()=>{
        input_title.contentEditable=true;
    })

    
    supr_img.addEventListener('click', ()=>{
        div_modal.remove();
        i--;    
        refresh();
    })

    div_modal.className='modal';
    span_input.className='modal_title';
    div_taches.className='div_taches';
    div_taches.style.backgroundImage= "url('../first_Project_JS/img/kal1.png') ";
    div_taches.style.backgroundPosition='center'
    div_taches.style.backgroundRepeat='no-repeat'
    div_taches.style.backgroundSize='90%'
    supr_img.setAttribute('id', 'fa');
    supr_img.setAttribute('src', '../first_Project_JS/img/ic-supprimer.png');
    // div_trash.setAttribute('id', 'trash');
    // div_trash.setAttribute('id', 'trash');
    

    div_taches.append(supr_img)
    div_modal.append(input_title, span_input,div_taches);
    
    
    div_modal.style.background = tab_color[j_color]
    div_contain.appendChild(div_modal);


}

function refresh(){
    const title = document.querySelectorAll('.ok');
    title.forEach((inputm, a) => {
        a++;
        inputm.innerHTML = 'Colonne'+a;
        // inputm.style.background = tab_color[j_color]
        
    });
}

function creatinput(){
    
    var div_taches = document.querySelector('.div_taches')
    var div_modal = document.querySelector('.modal')

    var content_value = document.createElement('div');
    var gobal_span = document.createElement('div');
    var content_span1 = document.createElement('div');
    var content_span = document.createElement('div');
    var prec_btn = document.createElement('button');
    var suiv_btn = document.createElement('button');
    var sup_tach = document.createElement('button');
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    var span3 = document.createElement('span');
    var span4 = document.createElement('span');

    prec_btn.innerHTML='<<';
    
    suiv_btn.innerHTML='>>';
    sup_tach.innerHTML="x"
    

    content_value.setAttribute('id', 'content');
    gobal_span.setAttribute('id', 'global_span');
    content_span.setAttribute('id', 'content_span');
    content_span1.setAttribute('id', 'content_text');
    span1.innerText= area.value;
    span1.setAttribute('id', 'text')
    span2.innerText= my_date.value;
    span3.innerText= hd.value;
    span4.innerText= hf.value;
    prec_btn.setAttribute('id', 'prec');
    suiv_btn.setAttribute('id', 'suiv');
    sup_tach.setAttribute('id', 'sup_tach');

    
    content_span1.appendChild(span1)
    content_span.append(span2,span3,span4)
    gobal_span.append(content_span1, content_span)
    content_value.append(prec_btn,gobal_span,suiv_btn,sup_tach)
    div_taches.appendChild(content_value)
    div_modal.appendChild(div_taches)
    
      
    suiv_btn.addEventListener('click', (e)=>{
        
        suiv_btn.parentElement.parentElement.parentElement.nextElementSibling.lastChild.appendChild(content_value);
        // console.log(e.target.parentElement)  
        
    })

    prec_btn.addEventListener('click', ()=>{
        // prec_btn.parentElement.parentElement.previousElementSibling.appendChild(prec_btn.parentElement)
        prec_btn.parentElement.parentElement.parentElement.previousElementSibling.lastChild.appendChild(content_value);
        
    })

    sup_tach.onclick = ()=>{
        content_value.remove();
        trash.appendChild(content_value)
        sup_tach.addEventListener('click',()=>{
            content_value.remove()
        })

    }

    

}
const restore = document.getElementById('restore');
    restore.onclick= ()=>{
        div_taches.appendChild(content_value)
    }




//++++++++++++ MODAL && ErrorMessage


function empty_field(){
    const tab_input = document.querySelectorAll('.date');
    const error = document.querySelectorAll('.error');

    // const tab_error = ["Text Obligatoire","Date Obligatoire","Heure Debut Obligatoire","Heure Fin Obligatoire"];
   
    // let cpt=0;
    for (const el of tab_input) {
        console.log(el)
        
            for(let i=0;i<error.length;i++){
                if(el.value==""){
                    error[i].innerHTML;
                    error[i].style.display='block'
                    return false;
                    // cpt++
                }
                
            }                 
    }

    return true

    /* if(cpt==0){
        return true
    }else{
        return false
    } */


    /* tab_input.forEach((el,k) => {
        if (el.value=="") {
            console.log(el)
            for(let i=0;i<error.length;i++){
                error[i].style.display='block'
                return error;
            }
        }
        return true
    }); */
    
}
















/*  
function empty_field() {
    var my_form = form.querySelectorAll('*');
    my_form.forEach(el => {
        console.log(el)
    });
} */



//+++++++++++Events

    btn_note.disabled= true;
    btn_add.addEventListener('click', (e)=>{
        if(i<5){
        elementGenerate();
        btn_note.disabled= false;
        }
        j_color++;
    })

    btn_note.addEventListener('click', ()=>{
        document.querySelector('.couche').style.display='block';
    })

    btn_close.addEventListener('click', ()=>{
        document.querySelector('.couche').style.display='none';
    })

    const supr_img= document.getElementById('fa');
    

    btn_display.addEventListener('click', ()=>{
        btn.classList.toggle('show_btn')
        // empty_field();
    })

    const content_value = document.getElementById('area')

    btn_ajout.addEventListener('click', ()=>{
        
        if(empty_field()){
            creatinput();   
        }
        
        // document.querySelector('.couche').style.display='none';
       
          
    })

    im_trash.onclick = ()=>{
        // trash_couch.style.display='block'
        trash_couch.classList.toggle('show_couch_trash');
       
    }


