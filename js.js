const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const hexi = document.getElementById('hex');
const output = document.getElementById('out');

function color(){
    let red_hex = parseInt(red.value),
        green_hex = parseInt(green.value),
        blue_hex = parseInt(blue.value),
        hex     = "rgb(" +  red_hex + "," + green_hex + "," + blue_hex + ")";
    hexi.style.background = hex;
    output.innerText = hex;
}

red.addEventListener('input', () => {
        color();
})

green.addEventListener('input', () => {
    color();
})

blue.addEventListener('input', () => {
    color();
})