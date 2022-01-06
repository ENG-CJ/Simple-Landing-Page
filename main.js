// js file

let check=document.getElementById('check');
let download=document.querySelector('.download')

check.addEventListener('click',ch)
function ch(e){
    if (check.value=='on'){
        document.body.classList.toggle('dark')
        download.classList.toggle('wh')
    }
}