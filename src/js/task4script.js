var task4_x = Math.floor(Math.random() * 301), task4_y = Math.floor(Math.random() * 81), task4_r=20;
var task4_ysamm=1, task4_xsamm=0, task4_ykiirendus=0.4;
var task4_t, task4_g; //tahvel, graafiline kontekst
function algus4()
{
    task4_t=document.getElementById("tahvel4");
    task4_g=task4_t.getContext("2d");
    setInterval('liigu4()', 100);
}
function joonista4()
{
    task4_g.clearRect(0, 0, task4_t.width, task4_t.height);
    task4_g.beginPath();
    task4_g.fillStyle="black";
    task4_g.arc(task4_x, task4_y, task4_r+3, 0, 2*Math.PI, true);
    task4_g.fill();
    task4_g.beginPath();
    task4_g.fillStyle = "white";
    task4_g.arc(task4_x, task4_y, task4_r, 0, 2*Math.PI, true);
    task4_g.fill();
    task4_g.beginPath();
    task4_g.fillStyle="green";
    task4_g.fillRect(0,190,task4_t.width,10);
}
function liigu4()
{
    task4_ysamm=task4_ysamm+task4_ykiirendus;
    if(kasSees(task4_x+task4_xsamm, task4_y+task4_ysamm))
    {
        task4_x=task4_x+task4_xsamm;
        task4_y=task4_y+task4_ysamm;
    } 
    else 
    {
        task4_xsamm=0; task4_ysamm=0;
        task4_x = Math.floor(Math.random() * 301);
        task4_y = Math.floor(Math.random() * 81);
    }
    joonista4();
}
function kasSees(uusX, uusY)
{
    if(uusX-task4_r<0){return false;}
    if(uusX+task4_r>task4_t.width){return false;}
    if(uusY-task4_r<0){return false;}
    if(uusY+task4_r>190){return false;}
    return true;
}
function hiirAlla2(e)
{
    var task4_tahvlikoht=task4_t.getBoundingClientRect();
    var task4_hx=e.clientX-task4_tahvlikoht.left;
    var task4_hy=e.clientY-task4_tahvlikoht.top;
    task4_x=task4_hx;
    task4_y=task4_hy;
    task4_ysamm=0;
}
