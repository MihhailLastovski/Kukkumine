var task1_x=115, task1_y=20, task1_r, task1_ysamm; 
var task1_t, task1_g; //tahvel, graafiline kontekst
function algus1() 
{
    task1_t=document.getElementById("tahvel1");
    task1_g=task1_t.getContext("2d");
    setInterval('liigu1()', 100);
}
function joonista1()  
{
    task1_g.clearRect(0, 0, task1_t.width, task1_t.height);    
    circleCreate(task1_x,task1_y,task1_r);
    circleCreate(task1_x+55,task1_y,task1_r);
}
function liigu1() 
{
    task1_r = document.getElementById("size").value;
    task1_ysamm = document.getElementById("speed").value;
    task1_y=task1_y+task1_ysamm/2;
    joonista1();
}
function circleCreate(task1_x, task1_y, task1_r)  
{
    task1_g.beginPath();
    task1_g.fillStyle="white";
    task1_g.arc(task1_x, task1_y, task1_r, 0, 2*Math.PI, true);
    task1_g.fill();
    task1_g.stroke();
    task1_g.beginPath();
    task1_g.fillStyle="black";
    task1_g.arc(task1_x, task1_y, task1_r-3, 0, 2*Math.PI, true);
    task1_g.fill();
    task1_g.stroke();
    task1_g.beginPath();
    task1_g.strokeStyle="red";
    task1_g.arc(task1_x, task1_y, task1_r-3, 0, 2*Math.PI, true);
    task1_g.fill();
    task1_g.stroke();
    task1_g.beginPath();
    task1_g.fillStyle="white";
    task1_g.arc(task1_x, task1_y, task1_r-9, 0, 2*Math.PI, true);
    task1_g.fill();
}