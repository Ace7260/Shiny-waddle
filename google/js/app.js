loader = document.querySelector('.loader');
wrapper = document.querySelector('.wrapper');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        wrapper.style.display = "block"
        wrapper.style.opacity = 1;
    }, 3000);
}
init();