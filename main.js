canvas = document.getElementById("Paint");
ctx = canvas.getContext("2d");

nasa_images = ["nasa1.jpeg","nasa2.jpeg","nasa3.jpeg","nasa4.jpeg","nasa5.jpeg","nasa6.jpeg"];

randomnumber = Math.floor(Math.random()* 6);
console.log(randomnumber);

rover_x = 10;
rover_y = 10;

rover_width = 100;
rover_height = 90;

bg = nasa_images[randomnumber];
console.log("background image = "+bg);
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
function Up()
{
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed x = " + rover_x +" and y = " +rover_y);
        mars();
        sram();

    }
}
function Down()
{
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed x = " + rover_x +" and y = " +rover_y);
        mars();
        sram();
    }
}
function Left()
{
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed x = " + rover_x +" and y = " +rover_y);
        mars();
        sram();
    }
}
function Right()
{
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed x = " + rover_x +" and y = " +rover_y);
        mars();
        sram();
    }
}
