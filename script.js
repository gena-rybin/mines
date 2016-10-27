window.onload = function() {

var body = document.body;
var	h1 = document.createElement('h1');
var br = document.createElement('br');
var div = document.createElement('div');
var p = document.createElement('p');
var input = document.createElement('input');
var span = document.createElement('span');
var x=0;
var y=0;
var data = [];
var bombes=0;
var count=0;
var bombesInGame=0;
var bombesPosition = [];

var htmlA;
var htmlB;
var htmlC;


//style settings
htmlA = "<style>";
htmlB = ".wrapper {display: inline-block;}";
htmlB += "#size {float: left;}";
htmlB += "#size:first-child {width:105px; \
		display: inline-block; \
		top: 0%;}";
htmlB += "#size:nth-child(2) {width:105px; \
		display: inline-block; \
		top: 60%;\
		margin: 20px 0 0 0;\
	}";
htmlB += ".size {width:105px; \
	float: left;}";
htmlB += ".cover { margin: 0 0 0 20px; float: left; \
	    width: 600px;\
	    overflow: auto;\
	    overflow-x: scroll;\
	    white-space:nowrap;\
	}";
htmlB += ".gameRows {overflow: hidden; \
		margin: 0 auto !important;\
	    display: inline-block;\
	    vertical-align: top;\
	    background-color: grey; \
	}";
htmlB += ".gameRow {margin: 0px 0px -1px 0px !important; }";
htmlB += ".gameCell {border: 1px solid grey ; \
    margin: 0; \
    background-color: rgb(227, 247, 255); \
    height: 1.1em; \
    line-height: 1.1em; \
    width: 1.1em; \
    text-align: center; \
	border-radius:2px; \
    display: inline-block; \
    text-align: center; \
    vertical-align: middle; \
    padding: 4px; } ";   
htmlB +=".cover {border: 1px solid green ; \
	background-color: white;}";   
htmlB +=".closed {border: 5px outset grey !important; padding: 0px !important; background-color: MediumTurquoise !important; }";   	
htmlB +=".color1 {color: blue !important; font-weight: bold;}";       
htmlB +=".color2 {color: MediumSeaGreen !important; font-weight: bold;}";       
htmlB +=".color3 {color: red !important; font-weight: bold;}";       
htmlB +=".color4 {color: Magenta !important; font-weight: bold;}";       
htmlB +=".color5 {color: black !important; font-weight: bold;}";       
htmlB +=".color6 {color: tomato !important; font-weight: bold;}";       
htmlB +=".color7 {color: purple !important; font-weight: bold;}";       
htmlB +=".color8 {color: white !important; font-weight: bold;}";     
htmlB +=".bomb {color: white !important; font-weight: bolder; background-color: red;}";       

htmlC = "</style>";


// element constructor
h1.innerHTML = '#05 task';

var pInfo = p.cloneNode(false);
pInfo.innerHTML = "<p>Please, set game size:</p>";

var spanSelect = span.cloneNode(false);
spanSelect.setAttribute("id", "size");
spanSelect.innerHTML = '<select size="5" id="height" class="size"> \
    <option disabled>set the height:</option> \
    <option value="5">5</option> \
    <option selected value="10">10</option> \
    <option value="15">15</option> \
    <option value="20">20</option> \
</select> \
<select size="5" id="width" class="size"> \
    <option disabled>set the width:</option> \
    <option value="5">5</option> \
    <option selected value="10">10</option> \
    <option value="15">15</option> \
    <option value="20">20</option> \
</select> \
<select size="17" id="bombes" class="size"> \
    <option disabled>bombes:</option> \
    <option value="1">1</option> \
    <option value="2">2</option> \
    <option value="3">3</option> \
    <option value="4">4</option> \
    <option value="5">5</option> \
    <option value="6">6</option> \
    <option value="7">7</option> \
    <option value="8">8</option> \
    <option value="9">9</option> \
    <option value="10">10</option> \
    <option value="15">15</option> \
    <option selected value="20">20</option> \
    <option value="25">25</option> \
    <option value="30">30</option> \
    <option value="35">35</option> \
    <option value="40">40</option> \
</select> \
';

var divWrapper = div.cloneNode(false)
divWrapper.className = 'wrapper';

var divCover = div.cloneNode(false);
divCover.className = 'cover';
divCover.style.cssText="display: inline-block;";

var divGameRows = div.cloneNode(false);
divGameRows.className = 'gameRows';

var divGameRow = div.cloneNode(false);
divGameRow.className = 'gameRow';
divGameRow.style.cssText=" margin:0;";

var divGameCell = div.cloneNode(false);
divGameCell.className = 'gameCell';
divGameCell.classList.add("closed");


// page loading
body.insertAdjacentHTML("afterBegin", htmlA+htmlB+htmlC); //add my js-<styles> to index.html
body.appendChild(h1);
body.appendChild(pInfo);
body.appendChild(divWrapper);
divWrapper.appendChild(spanSelect);
divWrapper.appendChild(divCover);
// body.appendChild(document.createElement('br'));
// body.appendChild(document.createElement('br'));
makeGameField(10, 10);
makeGameData(10, 10);
console.table( data );


// settings for Game's field
var height = +document.getElementById("height").value;
var width  = +document.getElementById("width").value;
var sizeArea = document.getElementById("size");
//var size = document.getElementsByClassName('size');



// setting Game size
sizeArea.addEventListener("change", function () {
	height = +document.getElementById("height").value;
	width = +document.getElementById("width").value;
	bombes = +document.getElementById("bombes").value;
	makeGameField(height,width);
	makeGameData(height,width);
	//dataX=emptyData();
	//dataO=emptyData();
});


// actions			  (height,width)
function makeGameField(rows, columns) {
	while (divGameRows.hasChildNodes()) {		// empty game field
	    divGameRows.removeChild(divGameRows.lastChild);
	}
	for (var i=1; i<=rows; i++) {
		divGameRow = divGameRow.cloneNode(false);
		divGameRows.appendChild(divGameRow);
		for (var j=1; j<=columns; j++) {
			divGameCell = divGameCell.cloneNode(false);
			divGameRow.appendChild(divGameCell);
		}
		// br = br.cloneNode(false);
		// divGameRows.appendChild(br);
	}   	
	divCover.appendChild(divGameRows);
	//console.dir(divGameRows);
	//console.log(divGameRows);
}


// making Data-array with mines
function makeGameData(height,width) {
	height = +document.getElementById("height").value;
	width = +document.getElementById("width").value;
	bombes = +document.getElementById("bombes").value;
	// create empty array
	  data = [];
	  for(var i=0; i<height; i++){
	    data[i] = new Array();
	    for(var j=0; j<width; j++){
	      data[i][j] = 0;// - 
	    }
	  }
	//writes mines in array
	for (var m=1; m<=bombes; m++) {
		var pos1 = randomInteger(height-1);
		var pos2 = randomInteger(width-1);
		data[pos1][pos2] = 1;
	}

	function randomInteger(max) {
	    var min = 0;
	    var rand = min + Math.random() * (max + 1 - min);
	    rand = Math.floor(rand);
	    return rand;
	}
	console.table( data );	
} 


// gets the position of clicked cell
function getPosition() {
		//var self = this;
		  event.target.parentNode.childNodes.forEach(function(item, i) {
		   if (item === event.target) {  
		    x = i;
		   }
		  });
		  event.target.parentNode.parentNode.childNodes.forEach(function(item, index) {
		   if (item === event.target.parentNode) {     
		    y = index;
		   }
		  });
	console.log('clicked: строка='+y+', ячейка='+x);
}


// clicking at game's field
divCover.addEventListener("click", function (event) {
	var cell = event.target;
	var count = 0;
	console.log(cell);
	console.dir(cell);
	getPosition();
	cell.classList.remove("closed");
	if (data[y][x] == 1) {
		foundBombs(cell);
		return;
	}
	count = countNeighborBombs();
	if (count==0) return;
	else {
		cell.textContent = count;
		switch (count) {
		  case 1:
			  cell.classList.add("color1");
			  break;
		  case 2:
			  cell.classList.add("color2");
			  break;
		  case 3:
			  cell.classList.add("color3");
			  break;
		  case 4:
			  cell.classList.add("color4");
			  break;
		  case 5:
			  cell.classList.add("color5");
			  break;
		  case 6:
			  cell.classList.add("color6");
			  break;
		  case 7:
			  cell.classList.add("color7");
			  break;
		  case 8:
			  cell.classList.add("color8");
			  break;
		  default:
		    break;
		}	
	}
	
	//if (count>0) event.target.textContent=count;
});


function countNeighborBombs() {
	count = 0;

	if(data[y-1] && data[y-1][x-1] === 1) {
		count++;
	}
	if(data[y-1] && data[y-1][x] === 1) {
		count++;
	}
	if(data[y-1] && data[y-1][x+1] === 1) {
		count++;
	}
	if(data[y] && data[y][x-1] === 1) {
		count++;
	}
	if(data[y] && data[y][x+1] === 1) {
		count++;
	}
	if(data[y+1] && data[y+1][x-1] === 1) {
		count++;
	}
	if(data[y+1] && data[y+1][x] === 1) {
		count++;
	}
	if(data[y+1] && data[y+1][x+1] === 1) {
		count++;
	}
	return count;
 //    // крайние соседние точки from clicked
	// var top = 0;
	// top = y-1;
 //    if (top >= 0) {top = true;}
 //    else 	      {top = false;}

	// var right = 0;
	// right = x+1;
 //    if (right < width) {right = true;}
 //    else 			   {right = false;}

	// var bottom = 0;
	// bottom = y+1;
 //    if (bottom < height) {bottom = true;}
 //    else 	             {bottom = false;}

	// var left = 0;
	// left = x - 1;
 //    if (left >= 0)  {left = true;}
 //    else 			{left = false;}

 //    // write new array with Neighbor+-1 cells
	// var temp = [];
	// if (top && left)  		temp.push(data[y-1][x-1]);
	// if (top ) 		  		{temp.push(data[y-1][x]);}
	// if (top && right) 		{temp.push(data[y-1][x+1]);}
	// if (right)  	  		{temp.push(data[y][x+1]);}
	// if (bottom && right)  	{temp.push(data[y+1][x+1]);}
	// if (bottom)  			{temp.push(data[y+1][x]);}
	// if (bottom && left)  	{temp.push(data[y-1][x-1]);}
	// if (left)  				{temp.push(data[y][x-1]);}
	// console.log(temp);
	// var result = temp.reduce(function(sum, current) {
	//   return sum + current;
	// }, 0); 
	// return 	result;
}

function foundBombs(cell) {
	cell.textContent = "B!";
	cell.classList.add("bomb");
	console.log('БОМБА !');
	for (var j=0; j<height; j++) {
		data[j].forEach(function(value, ind) {
			console.log(divGameRows.childNodes);
			if (value == 1) {
				divGameRows.childNodes[j].childNodes[ind].textContent = "B!";
				divGameRows.childNodes[j].childNodes[ind].classList.add("bomb");
				divGameRows.childNodes[j].childNodes[ind].classList.remove("closed");
			}
		});		
	}
}



}