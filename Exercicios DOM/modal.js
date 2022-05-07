let button = document.getElementById('openModal');

let wrapper = document.querySelector('.modal-wrapper');

button.onclick = function(){
    wrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event){
    
    let isEsc = event.key === 'Escape'
    if(isEsc){
        wrapper.classList.add('invisible')
    }
})