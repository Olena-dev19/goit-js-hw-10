import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const formEl = document.querySelector('.form')
const btn = document.querySelector('.btncreate');
const inputEl = document.querySelector('[type=number]');
const fieldset = document.querySelector('.stateradio')

let userDelay = null;
let selectedValue = null;

fieldset.addEventListener('change', (e) => {
    if (e.target.name === 'state' && e.target.checked) {
        selectedValue = e.target.value;
        console.log('оновлено:', selectedValue);
    }
});


formEl.addEventListener('submit', (e)=>{
    e.preventDefault();
    userDelay = Number(inputEl.value);


    makePromise(userDelay, selectedValue )

    .then(value => iziToast.success({ message: (value)}))
    .catch(error => iziToast.error({ message: (error) }))
    
    formEl.reset();
})




const makePromise = (delay, selectedValue) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (selectedValue === 'fulfilled') {
                resolve(`✅ Fulfilled promise in ${delay}ms`)
            } else {
                reject(`❌ Rejected promise in ${delay}ms`)
            }
        }, delay)
    })

}



