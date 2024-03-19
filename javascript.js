const divContainer = document.querySelector('div.container');

for (let i = 0; i <16*16; i ++) {
    const aDiv = document.createElement('div')
    aDiv.setAttribute('class',`div${i}`)
    aDiv.style['border'] = '1px solid black';
    aDiv.textContent = `This is div #${i}`
    divContainer.append(aDiv)
}