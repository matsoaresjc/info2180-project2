//Feature implemented:

var p = 0; //Background position
var d = 0; //Sizing of divs

window.onload = function() 
{

//Getting tiles
var tiles = document.getElementById("puzzlearea").getElementsByTagName("div");


//Setting the background
for (var t = 0; t < tiles.length;t++)
{
	tiles[t].className += "puzzlepiece";
	
}

//Applying the movablepiece class on moveable tiles
for (var t = 0; t < tiles.length;t++)
{
	tiles[t].addEventListener("mouseover",function()
	{

		if (canMove(this))
		{
			this.classList.add("movablepiece");

		}
	})
	
}

//Arranges the tiles
setTiles(tiles);

}

function setTiles(tiles)
{
	for (var i = 0; i < 400; i+= 100)
	{
		for (var j = 0; j < 400; j+= 100)
		{
			if (d !== 15){

				tiles[d].style.top = i + "px";
				tiles[d].style.left = j + "px";
				d++;
				

			} else {

				break ;
			}
		}
	}


	for (var k = 400; k >= 100; k-= 100)
	{
		for (var l = 0; l >= -1*(400-100); l -= 100)
		{
			if(p!==15){
				tiles[p].style.backgroundPosition = (l + "px ") + (k + "px");
				p++;
			}
			else
			{
				break;
			}
		}
	}
	
}


function isEmpty() //Finds where the empty tile is
{

var tiles = document.getElementById("puzzlearea").getElementsByTagName("div");
//Coordinates of an empty tile

var emptyTop = 0;
var emptyLeft = 0;

// Rows(r), Columns(c)
var r1 = 0;
var r2 = 0;
var r3 = 0;
var r4 = 0;

var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;

for (var i=0;i < tiles.length;i++)
{
switch (parseInt(tiles[i].style.top))
	{
		case 0:   r1 += parseInt(tiles[i].style.left);
		break;
		case 100: r2 += parseInt(tiles[i].style.left);
		break;
		case 200: r3 += parseInt(tiles[i].style.left);
		break;
		case 300: r4 += parseInt(tiles[i].style.left);
		break;

	}

switch (parseInt(tiles[i].style.left))
	{
		case 0:   c1 += parseInt(tiles[i].style.top);
		break;
		case 100: c2 += parseInt(tiles[i].style.top);
		break;
		case 200: c3 += parseInt(tiles[i].style.top);
		break;
		case 300: c4 += parseInt(tiles[i].style.top);
		break;

	}	
}
	if (r1 !== 600)
	{
		emptyTop = 0;

	} else if (r2 !== 600)
		{
			emptyTop = 100;

		} else if (r3 !== 600)
			{
				emptyTop = 200;

			} else if (r4 !== 600)
				{
					emptyTop = 300;
				}

	if (c1 !== 600)
	{
		emptyLeft = 0;

	} else if (c2 !== 600)
		{
			emptyLeft = 100;

		} else if (c3 !== 600)
			{
				emptyLeft = 200;

			} else if (c4 !== 600)
				{
					emptyLeft = 300;
				}
console.log("In is empty",emptyTop,emptyLeft);
	return [emptyTop,emptyLeft];
}


function moveTile()
{
	//Coordinates of the empty space
	var empty = isEmpty();

	var temp = []; // Temporary needed when swapping coordinates

	this.setAttribute("clicked",true);

	if(canMove(this))
	{
		//current location
		temp = [parseInt(this.style.top),parseInt(this.style.left)];
		
		// Execute move of given puzzle piece
		this.style.top = empty[0] + "px";
	    this.style.left = empty[1] + "px";

		//Perform the move
		empty[0] = temp[0];
		empty[1] = temp[1];
	} else{
		console.log("unable to move");
	}


	}




function canMove(tiles) //Evaluates whether a tile can or cannot move
{

	//Coordinates of the empty space
	var empty = isEmpty();
//
	console.log("Square Top(x): "+tiles.offsetTop+" Square Left(y):"+tiles.offsetLeft);
	console.log("SpaceTop(x): "+empty[0]+" SpaceLeft(y): "+empty[1]);

	if (parseInt(tiles.style.top)== empty[0]) // check if 
	{
		if (parseInt(tiles.style.left) + 100 === empty[1] 
						||
			parseInt(tiles.style.left) - 100 === empty[1])
		{
			return true; 
		} else { 

			return false;

				} 
	} else if (parseInt(tiles.style.left) === empty[1])
			{
				if (parseInt(tiles.style.top) + 100 === empty[0] 
						||
					parseInt(tiles.style.top) - 100 === empty[0])
				{
					return true;

				} else {

					return false;
				}
			}

}

function shuffle
{

  
  }



