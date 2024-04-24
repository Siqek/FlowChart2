let roughSvg = rough.svg(document.getElementById('svg'));

const Directions = {
    Left:   Symbol("left"),
    Right:  Symbol("right"),
    Up:     Symbol("up"),
    Down:   Symbol("down")
}

const __width       = 100;
const __height      = 100;
const __gap         = 20;

var __lastX         = null;
var __lastY         = null;
// var __lastWidth     = null;
// var __lastHeight    = null;


(function initializeFirstRectangle()
{
    initial_x = 700;
    initial_y = 100;
    drawRectangle(initial_x, initial_y, __width, __height);

    __lastX         = initial_x;
    __lastY         = initial_y;
    // __lastHeight    = __height;
    // __lastWidth     = __width;
})();

(function initializeEventListeners()
{
    const buttonAddLeft = document.querySelector('#addLeft');

    buttonAddLeft.addEventListener('click', (e) => {

        addRectangle(__width, __height, Directions.Left);
    })

    const buttonAddRight = document.querySelector('#addRight');

    buttonAddRight.addEventListener('click', (e) => {

        addRectangle(__width, __height, Directions.Right);
    })

    const buttonAddUp = document.querySelector('#addUp');

    buttonAddUp.addEventListener('click', (e) => {

        addRectangle(__width, __height, Directions.Up);
    })

    const buttonAddDown = document.querySelector('#addDown');

    buttonAddDown.addEventListener('click', (e) => {

        addRectangle(__width, __height, Directions.Down);
    })
})();

function addRectangle(width, height, direction) 
{
    let x = __lastX;
    let y = __lastY;

    switch (direction)
    {
        case Directions.Left:
            x -= (width + __gap);
            break;
        case Directions.Right:
            x += (width + __gap);
            break;
        case Directions.Up:
            y -= (height + __gap);
            break;
        case Directions.Down:
            y += (height + __gap);
            break;
    }

    drawRectangle(x, y, width, height);

    // drawLine()

    __lastX = x;
    __lastY = y;
}

function drawRectangle(x, y, width, height)
{
    const rectangle = roughSvg.rectangle(x, y, width, height, { 
        fill: 'rgba(0, 255, 0, 0.5)',
        fillStyle: 'solid' 
    });

    svg.appendChild(rectangle);

    __lastX         = x;
    __lastY         = y;
    __lastWidth     = width;
    __lastHeight    = height;
}

function drawLine(start_x, start_y, end_x, end_y)
{
    const line = roughSvg.line(start_x, start_y, end_x, end_y);
    svg.appendChild(line);
}
