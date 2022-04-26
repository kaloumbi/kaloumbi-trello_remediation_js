
const my_body = document.querySelector('body');
const my_nav = document.querySelector('nav');


const tabObj = [
    {
        "left_icon": "fa-solid fa-gauge",
        "text": "Dashboard",
        "right_icon" :null ,
        "arrow" : "iflche",
        "sous_menu" : ["ChartJS", "Flot", "Inline", "uPlot"]

    },

    {
        "left_icon": "nav-icon fas fa-th",
        "text": "Widgets",
        "right_icon" : "New_icon",
        "arrow" : null,
        "sous_menu" : ["ChartJS", "Flot", "Inline", "uPlot"]
    },

    {
        "left_icon" : "nav-icon fas fa-th",
        "text": "Layout Options",
        "right_icon" : "six",
        "arrow" : "iflche",
        "sous_menu" : ["ChartJS", "Flot", "Inline", "uPlot"]
    },

    {
        "left_icon": "nav-icon fab fa-chrome",
        "text": "Charts",
        "right_icon" : null,
        "arrow" : "iflche",
        "sous_menu" : ["ChartJS", "Flot", "Inline", "uPlot"]
    },

    {
        "left_icon": "nav-icon fas fa-tree",
        "text": "UI Elements",
        "iright_icon" : null,
        "arrow" : "iflche",
        "sous_menu" : ["ChartJS", "Flot", "Inline", "uPlot"]
    },

    {
        "left_icon": "nav-icon fas fa-edit",
        "text": "Forms",
        "right_icon" : null,
        "arrow" : "iflche",
        "sous_menu" : ["ChartJS", "Flot", "Inline", "uPlot"]
    },

    {
        "left_icon": "nav-icon fas fa-table",
        "text": "Tables",
        "right_icon" : null,
        "arrow" : "iflche",
        "sous_menu" : ["ChartJS", "Flot", "Inline", "uPlot"]
    }
]

    
for(let i=0; i<tabObj.length; i++){
    
    creatObjet(tabObj[i]);
}

function creatObjet(tabObj){
    let gen_div = document.createElement('div');
    let layout_div = document.createElement('div');
   
    let submenu_div = document.createElement('div');
    let layout_icon = document.createElement('i');
    let ptext = document.createElement('p');
    let span_num = document.createElement('span');
    let iflech = document.createElement('i');

    layout_div.setAttribute('class', 'widjet');

    layout_div.appendChild(layout_icon);
    layout_div.appendChild(ptext);
    layout_div.appendChild(span_num);
    layout_div.appendChild(iflech);

    gen_div.appendChild(layout_div);
    gen_div.appendChild(submenu_div);

    my_nav.appendChild(gen_div);

    


}
alert(layout_div.countChild);

// countChild()