var a = document.querySelector('#easy0');
var b = document.querySelectorAll('.rcorners2');
var c = document.querySelector('#hard0');
var d = document.querySelector('#setcolor');
var e = document.querySelector('#setcolor0');
var f = document.querySelectorAll('#blck');
var g = document.querySelector('.heading1');
var h = document.querySelector("#message");
var numberofblocks = 6;

c.style.color = "rgb(255,255,255)";
c.style.background = "rgb(85,85,170)";
resetcolor();

a.addEventListener("click" , function(){
	for(var i=0 ; i<b.length ; i++)
	{
		b[i].style.display = 'none';
	}
	a.style.color = "rgb(255,255,255)";
	a.style.background = "rgb(85,85,170)";
	c.style.background = "";
	c.style.color = "";
	numberofblocks = 3;
	resetcolor();
});

c.addEventListener("click" , function(){
	for(var i=0 ; i<b.length ; i++)
	{
		b[i].style.display = 'block';
	}
	c.style.color = "rgb(255,255,255)";
	c.style.background = "rgb(85,85,170)";
	a.style.background = "";
	a.style.color = "";
	numberofblocks = 6;
	resetcolor();

});

e.addEventListener("click" , function() {
	resetcolor();
});

function resetcolor()
{
	g.style.background = '';
	e.textContent = 'NEW COLORS';
	h.textContent = '';
	var newcolor = colorrandom();
	d.textContent = "RGB"+newcolor.split('rgb')[1];
	if(numberofblocks === 6)
	{
		for(var j=0 ; j<6 ; j++)
		{
			hmmcolor = colorrandom();
			f[j].style.background = hmmcolor;
		}
		var k = Math.floor(Math.random()*6);
		f[k].style.background = newcolor;
	}
	else
	{
		for(var j=0 ; j<3 ; j++)
		{
			hmmcolor = colorrandom();
			f[j].style.background = hmmcolor;
		}
		var k = Math.floor(Math.random()*3);
		f[k].style.background = newcolor;
	}

}

for(var x=0; x<numberofblocks ; x++)
{
	f[x].addEventListener("click" , function(){
		if(this.style.background === "rgb"+d.textContent.split('RGB')[1])
		{
			g.style.background = this.style.background;
			for(var y = 0 ; y<numberofblocks ; y++)
			{
				f[y].style.background = this.style.background;
			}
			e.textContent = "Play Again ?";
			h.textContent = "Correct!";
			h.style.marginLeft = "161px";

		}
		else
		{
			this.style.background = "rgb(0,0,0)";
			h.textContent = "Try Again";
		}
	});
}

function colorrandom()
{
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb("+red+", "+green+", "+blue+")" ; 
}