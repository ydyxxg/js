const tooltip = () => {
    let elems = document.querySelectorAll('.tooltip');

    [...elems].forEach(item => {
        item.addEventListener('mouseenter', e => {
            createtooltip(e);
        });
        item.addEventListener('mouseleave', e => {
            let tooltipElem = document.querySelector('.tooltip-element');
            tooltipElem.remove();
        });
    });

    function createtooltip(e){
        let elem = document.createElement('div');
        elem.classList.add('tooltip-element');
        elem.innerText = e.target.title;

        e.target.parentNode.append(elem);

        let x = e.target.offsetLeft;
        let y = e.target.offsrtTop;

        console.log(elem.offsetHeight);

        if(elem.offsetHeight > e.clientY){
            y += e.target.offsetHeight;
        }else{
            y -= e.target.offsetHeight + elem.offsetHeight;
        }

        elem.style.top = y + 'px';
        elem.style.left = x + 'px';
    }
}
tooltip();