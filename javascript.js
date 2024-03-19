const divContainer = document.querySelector('div.container');
const btnReset = document.querySelector('button.btn-reset');


function randomRGB() {
   return Math.floor(Math.random() * 256)
}

let gridCreator = function gridCreator(n) {for (let i = 0; i <n*n; i ++) {
    const aDiv = document.createElement('div')
    aDiv.setAttribute('class',`div${i}`)
    aDiv.style['border'] = '1px solid black';
    aDiv.style['flex'] = `1 0 ${1/n * 100}%`
    aDiv.textContent = ``
    aDiv.addEventListener('mouseenter', function (){
        this.style['background-color'] = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;

    })

    divContainer.append(aDiv)
}
}

btnReset.addEventListener('click', function() {
    const divAll = document.querySelectorAll('.container>div')
    divAll.forEach(function(div) {
        div.remove();
    })

    gridCreator(+prompt('Put in grid number'))
});

gridCreator(16)