"use strict";

window.onload = function(){
    var picArray = [];
    var playboard = document.getElementById("playboard")
    var i;
    var TileArray = [];
    var EightTiles = document.getElementById("4x2");
    var SixteenTiles = document.getElementById("4x4");
    
    for (i = 0; i < 16; i += 1)
    {
        TileArray[i] = document.createElement("img");
        TileArray[i].src = "pics/0.png";
    }
    
    for (i = 1; i < 16; i +=1)
    {
        if (i === 4 || i === 8 || i === 12)
        {
            TileArray[i].className = "TopTilesMargin";
        }
        else
        {
            TileArray[i].className = "VerticalLine"+i;
        }
    }
    
    
    
    
    EightTiles.addEventListener("click", function(e){
        
        resetAllTiles();
        
        if (playboard.childNodes.length > 9)
        {
            clearBoard();
        }
        
        picArray = RandomGenerator.getPictureArray(4,2)
        
        for (i = 0; i < 8; i +=1)
        {
            playboard.appendChild(TileArray[i])
        }
        
        for (i = 0; i < 8; i += 1)
        {
            addEvent(i);
        }
       
    })
    
    SixteenTiles.addEventListener("click", function(e) {
        
        resetAllTiles();
        
        picArray = RandomGenerator.getPictureArray(4,4);
        
        for (i = 0; i < 16; i += 1)
        {
            playboard.appendChild(TileArray[i]);
        }
        
        for (i = 0; i < 16; i += 1)
        {
            addEvent(i);
        }
    })
    
    
    var check = 0;
    
    
    
    var addEvent = function(index) {
        TileArray[index].addEventListener("click", function(e){
            TileArray[index].src = "pics/"+picArray[index]+".png";
            pressedTile(index);
            
        })
    }
    
    var pressedTile = function(index){
         
         check += 1;
         
        
        TileArray[index].removeEventListener("click", function(e){
            TileArray[index].src = "pics/"+picArray[index]+".png";;
        })
        
        if (check == 2)
         {
             check = 0;
             alert("HAI!")
         }
    }
    
    var clearBoard = function(){
        for (i = 8; i < 16; i += 1)
        {
            playboard.removeChild(TileArray[i])
        }
    }    
    
    var resetAllTiles = function(){
       for (i = 0; i < 16; i += 1)
       {
           TileArray[i].src = "pics/0.png";
       }
   }
}