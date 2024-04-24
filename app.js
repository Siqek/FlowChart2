let roughSvg = rough.svg(document.getElementById('svg'));

var globalX = 200;
var globalY = 10;
const gapY = 20;

const buttonAddLeft = document.querySelector('#addLeft');

buttonAddLeft.addEventListener('click', (e) => {

    drawRectangle(globalX, globalY);
})

const buttonAddRight = document.querySelector('#addRight');

buttonAddRight.addEventListener('click', (e) => {

    drawRectangle(globalX, globalY);
})

const buttonAddTop = document.querySelector('#addTop');

buttonAddTop.addEventListener('click', (e) => {

    drawRectangle(globalX, globalY);
})

const buttonAddBottom = document.querySelector('#addBottom');

buttonAddBottom.addEventListener('click', (e) => {

    drawRectangle(globalX, globalY);
})

function addRectangle(x, y) {
}

function drawRectangle(x, y)
{
    let width   = 200;
    let height  = 100;

    const rectangle = roughSvg.rectangle(x, y, width, height, { 
        fill: 'rgba(0, 255, 0, 0.5)',
        fillStyle: 'solid' 
    });

    svg.appendChild(rectangle);
}

function drawLine(start_x, start_y, end_x, end_y)
{
    const line = roughSvg.line(start_x, start_y, end_x, end_y);
    svg.appendChild(line);
}