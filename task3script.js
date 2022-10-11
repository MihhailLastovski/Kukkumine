var task3_x=140, task3_y=20, task3_r=20;
var task3_ysamm=1, task3_ykiirendus=0.4;
var task3_t, task3_g; //tahvel, graafiline kontekst
function algus3(){
task3_t=document.getElementById("tahvel3");
task3_g=task3_t.getContext("2d");
setInterval('liigu3()', 100);
}
function joonista3()
{
    task3_g.clearRect(0, 0, task3_t.width, task3_t.height);
    task3_g.beginPath();
    task3_g.fillStyle="#A0B9F0";
    task3_g.fillRect(0,100,task3_t.width,100);
    task3_g.beginPath();
    task3_g.fillStyle="black";
    task3_g.arc(task3_x, task3_y, task3_r+3, 0, 2*Math.PI, true);
    task3_g.fill();
    task3_g.beginPath();
    task3_g.fillStyle = "white";
    task3_g.arc(task3_x, task3_y, task3_r, 0, 2*Math.PI, true);
    task3_g.fill();
}
function liigu3()
{
    if(task3_y >= 95 && task3_y <= 170)
    {
        task3_ysamm = task3_ysamm-0.4;
        
    }
    else if(task3_y > 170)
    {
        task3_ysamm = 0;
        task3_y=171;
    }
    else if(task3_y > 0 && task3_y < 95)
    {
        task3_ysamm=task3_ysamm+task3_ykiirendus;
    }
    task3_y=task3_y+task3_ysamm;
    joonista3();
}
function hiirAlla1(e)
{
    var task3_tahvlikoht=task3_t.getBoundingClientRect();
    var task3_hx=e.clientX-task3_tahvlikoht.left;
    var hy=e.clientY-task3_tahvlikoht.top;
    task3_x=task3_hx;
    task3_y=hy;
    task3_ysamm=0;
    task3_r--;
}
