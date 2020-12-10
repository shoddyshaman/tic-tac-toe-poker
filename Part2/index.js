// console.log('The House always win!')

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}

const resetHand = () => {
    const xyz = document.getElementsByTagName('section')
    // console.log(xyz)
    for(let i =0;i < xyz.length ; i++){
        xyz[i].style.color = 'grey'
    }
}
