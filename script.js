var memeButton = document.getElementById('memeButton').addEventListener('click', function(){
    const memeContainer = document.getElementById('memeContainer');
    
    if (memeContainer.classList.contains('hidden')) {
        memeContainer.classList.remove('hidden');
        this.textContent = 'Ocultar reação';
    } else {
        memeContainer.classList.add('hidden');
        this.textContent = 'Minha honesta reação';
    }
})