
// console.log(moment('2023'))

const container = document.getElementById('container');
const days=document.getElementById('days');
const hour=document.getElementById('hours');
const minute=document.getElementById('minutes');
const seconde=document.getElementById('second');



//UPDATE CONTDOWNTIME

function updateCountdowntime(){
    const currentYear =moment();
    const newYear =moment('2023', 'YYYY');
    const diff = newYear - currentYear;


    const daysNumbers = newYear.diff(currentYear, 'day');

    const my_Object_duration = moment.duration(diff, 'milliseconds');//objet
    
    console.log(my_Object_duration);
    days.innerHTML = daysNumbers;
    hour.innerHTML = my_Object_duration._data.hours;
    minute.innerHTML = my_Object_duration._data.minutes;
    seconde.innerHTML = my_Object_duration._data.seconds;

}

setInterval(() => {
    updateCountdowntime();
}, 1000);

// setInterval(updateCountdowntime, 1000);



















/* console.log(moment());

const days=document.querySelectorAll('days');
const hour=document.querySelectorAll('hours');
const minute=document.querySelectorAll('minutes');
const seconde=document.querySelectorAll('second');


const currentYear = new Date().getFullYear;

const newYear = new Date(`March 23 ${currentYear + 1} 00:00:00`);

//UPDATE CONTDOWNTIME

function updateCountdowntime(){
    const currentYear = new Date();
    const diff = newYear - currentYear;

    const d = Math.floor(diff /1000/60/60/24);
    const hr = Math.floor(diff /1000/60/60) % 24;
    const min = Math.floor(diff /1000/60) % 60;
    const s = Math.floor(diff /1000) % 60;

    days.innerHTML = d;
    hour.innerHTML = hr<10 ? '0'+ hr: hr;
    minute.innerHTML = min<10 ? '0'+ min: min;
    seconde.innerHTML = s<10 ? '0'+ s: s;

}

setInterval(updateCountdowntime, 1000); */