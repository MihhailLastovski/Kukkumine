var task2_x=120, task2_y=20, task2_r;
var task2_ykiirendus = 0.1;
var task2_t, task2_g; //tahvel, graafiline kontekst
var task2_ysamm;
task2_ysamm = document.getElementById("speed2");
function algus2()
{
    task2_t=document.getElementById("tahvel2");
    task2_g=task2_t.getContext("2d");
    setInterval('liigu2()', 100); 
}
function joonista2()
{
    task2_g.clearRect(0, 0, task2_t.width, task2_t.height);
    task2_g.beginPath();
    task2_g.fillStyle="black";
    task2_g.arc(task2_x, task2_y, task2_r+3, 0, 2*Math.PI, true);
    task2_g.fill();
    task2_g.beginPath();
    task2_g.fillStyle = "white";
    task2_g.arc(task2_x, task2_y, task2_r, 0, 2*Math.PI, true);
    task2_g.fill();
}
function liigu2()
{
    task2_r = parseInt(document.getElementById("size2").value);
    task2_ysamm=task2_ysamm+task2_ykiirendus;
    task2_y=task2_y+task2_ysamm;
    joonista2();
}

