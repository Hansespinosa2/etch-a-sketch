const divContainer = document.querySelector('div.container');
const btnReset = document.querySelector('button.btn-reset');

btnReset.addEventListener('click', function() {
    const divAll = document.querySelectorAll('.container>div')
    divAll.forEach(function(div) {
        div.style['background-color'] = 'white';
    })
});

for (let i = 0; i <16*16; i ++) {
    const aDiv = document.createElement('div')
    aDiv.setAttribute('class',`div${i}`)
    aDiv.style['border'] = '1px solid black';
    aDiv.textContent = ``
    aDiv.addEventListener('mouseenter', function (){
        this.style['background-color'] = 'black';
    })

    divContainer.append(aDiv)
}