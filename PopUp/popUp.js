const slider = (selector) => {
    const popUp = document.querySelector(selector);
    let btn_conteiner = popUp.querySelector('.btn_conteiner').children;
    if(btn_conteiner.length === 0) return;
    let content = document.querySelector('.content').children;
    if(content.length === 0) return;

    [...btn_conteiner].forEach((elem, i) => {
        elem.addEventListener('click', () => show(i));
    });

    function show(i){
        [...btn_conteiner].forEach((elem, i) => {
            elem.classList.remove('active');
            content[i].classList.remove('active');
        });

        btn_conteiner[i].classList.add('active');
        content[i].classList.add('active');
    }

}

slider('.popUp');