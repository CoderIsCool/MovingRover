canvas = document.getElementById("Paint");
ctx = canvas.getContext("2d");

rover_x = 10;
rover_y = 10;

rover_width = 100;
rover_height = 90;

bg = "mars.jpg";
roimg = "rover.png";

function rover()
{
    Bgtag = new Image();
    Bgtag.onload = mars;
    Bgtag.src=bg;
    rtag = new Image();
    rtag.onload = sram;
    rtag.src=roimg;
};
function mars()
{
ctx.drawImage(Bgtag, 0, 0, canvas.width, canvas.height);
};
function sram()
{
ctx.drawImage(rtag, rover_x, rover_y, rover_width, rover_height);
};
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypress = e.keyCode;
    console.log(keypress);
    if (keypress =='37')
    {
        Left();
        console.log("Left");

    }
    if (keypress =='38')
    {
        Up();
        console.log("Up");
        
    }
    if (keypress =='40')
    {
        Down();
        console.log("Down");
        
    }
    if (keypress =='39')
    {
        Right();
        console.log("Right");
        
    }
}
