canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color="lightblue"

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(390,200,40,0,2*Math.PI);
ctx.stroke();

color="yellow"

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(435,245,40,0,2*Math.PI);
ctx.stroke();

color="black"

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(485,203,40,0,2*Math.PI);
ctx.stroke();

color="green"

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(530,242,40,0,2*Math.PI);
ctx.stroke();

color="red"

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(577,205,40,0,2*Math.PI);
ctx.stroke();