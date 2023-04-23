const container = document.querySelector('.container-items');
const dot = document.querySelectorAll('.dot');

dot.forEach(( every, i ) => {
    dot[i].addEventListener('click', ()=> {

        let position = i;
        let operation = position * -53;

        container.style.transform = `translateX(${operation}%)`;

        dot.forEach((every, i) => {
            dot[i].classList.remove('activo');
        })
        dot[i].classList.add('activo');
    })
})