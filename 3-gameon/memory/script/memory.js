"use strict";

window.onload = function(){
    var picArray = [];
    var picString;
    var playboard = document.getElementById("playboard")
    
    var Tile1 = document.createElement("img");
    var Tile2 = document.createElement("img");
    var Tile3 = document.createElement("img");
    var Tile4 = document.createElement("img");
    var Tile5 = document.createElement("img");
    var Tile6 = document.createElement("img");
    var Tile7 = document.createElement("img");
    var Tile8 = document.createElement("img");
    var Tile9 = document.createElement("img");
    var Tile10 = document.createElement("img");
    var Tile11 = document.createElement("img");
    var Tile12 = document.createElement("img");
    var Tile13 = document.createElement("img");
    var Tile14 = document.createElement("img");
    var Tile15 = document.createElement("img");
    var Tile16 = document.createElement("img");
    
    Tile1.src = "pics/0.png";
    Tile2.src = "pics/0.png";
    Tile3.src = "pics/0.png";
    Tile4.src = "pics/0.png";
    Tile5.src = "pics/0.png";
    Tile6.src = "pics/0.png";
    Tile7.src = "pics/0.png";
    Tile8.src = "pics/0.png";
    Tile9.src = "pics/0.png";
    Tile10.src = "pics/0.png";
    Tile11.src = "pics/0.png";
    Tile12.src = "pics/0.png";
    Tile13.src = "pics/0.png";
    Tile14.src = "pics/0.png";
    Tile15.src = "pics/0.png";
    Tile16.src = "pics/0.png";
    
    Tile2.className = "firstVerticalLine1";
    Tile3.className = "firstVerticalLine2";
    Tile4.className = "firstVerticalLine3";
    
    Tile5.className = "TopTilesMargin"
    Tile6.className = "secondVerticlaLine1";
    Tile7.className = "secondVerticlaLine2";
    Tile8.className = "secondVerticlaLine3";
    
    
    
    picArray = RandomGenerator.getPictureArray(2,4);
    
    playboard.appendChild(Tile1);
    playboard.appendChild(Tile2);
    playboard.appendChild(Tile3);
    playboard.appendChild(Tile4);
    playboard.appendChild(Tile5);
    playboard.appendChild(Tile6);
    playboard.appendChild(Tile7);
    playboard.appendChild(Tile8);
    
    var EightTiles = document.getElementById("2x4");
    var SixteenTiles = document.getElementById("4x4");
    
    EightTiles.addEventListener("click", function(e){
        if (playboard.childNodes.length > 9)
        {
            clearBoard();
        }
        
        picArray = RandomGenerator.getPictureArray(2,4);
       
        console.log(picArray);
    });
    SixteenTiles.addEventListener("click", function(e) {
        
        
        
        picArray = RandomGenerator.getPictureArray(4,4);
        
        playboard.appendChild(Tile9);
        playboard.appendChild(Tile10);
        playboard.appendChild(Tile11);
        playboard.appendChild(Tile12);
        playboard.appendChild(Tile13);
        playboard.appendChild(Tile14);
        playboard.appendChild(Tile15);
        playboard.appendChild(Tile16);
        
        Tile9.className = "TopTilesMargin";
        Tile10.className = "thridVerticalLine1";
        Tile11.className = "thridVerticalLine2";
        Tile12.className = "thridVerticalLine3";
        
        Tile13.className = "TopTilesMargin";
        Tile14.className = "fourthVerticalLine1";
        Tile15.className = "fourthVerticalLine2";
        Tile16.className = "fourthVerticalLine3";
        
    })
    
    
    var i = 0;
    console.log(picArray);
    
    
    Tile1.addEventListener("click", function(e){
        Tile1.src = "pics/"+picArray[0]+".png";
    }) 
    
    Tile2.addEventListener("click", function(e){
        Tile2.src = "pics/"+picArray[1]+".png";
        
    }) 
    
    Tile3.addEventListener("click", function(e){
        Tile3.src = "pics/"+picArray[2]+".png";
    }) 
    
    Tile4.addEventListener("click", function(e){
        Tile4.src = "pics/"+picArray[3]+".png";
    }) 
    
    Tile5.addEventListener("click", function(e){
        Tile5.src = "pics/"+picArray[4]+".png";
    }) 
    
    Tile6.addEventListener("click", function(e){
        Tile6.src = "pics/"+picArray[5]+".png";
    }) 
    
    Tile7.addEventListener("click", function(e){
        Tile7.src = "pics/"+picArray[6]+".png";
    }) 
    
    Tile8.addEventListener("click", function(e){
        Tile8.src = "pics/"+picArray[7]+".png";
    }) 
    
    Tile9.addEventListener("click", function(e){
        Tile9.src = "pics/"+picArray[8]+".png";
    }) 
    
    Tile10.addEventListener("click", function(e){
        Tile10.src = "pics/"+picArray[9]+".png";
    }) 
    
    Tile11.addEventListener("click", function(e){
        Tile11.src = "pics/"+picArray[10]+".png";
    }) 
    
    Tile12.addEventListener("click", function(e){
        Tile12.src = "pics/"+picArray[11]+".png";
    }) 
    
    Tile13.addEventListener("click", function(e){
        Tile13.src = "pics/"+picArray[12]+".png";
    }) 
    
    Tile14.addEventListener("click", function(e){
        Tile14.src = "pics/"+picArray[13]+".png";
    }) 
    
    Tile15.addEventListener("click", function(e){
        Tile15.src = "pics/"+picArray[14]+".png";
    }) 
    
    Tile16.addEventListener("click", function(e){
        Tile16.src = "pics/"+picArray[15]+".png";
    }) 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
    
    
    var clearBoard = function(){
       
       playboard.removeChild(Tile9);
       playboard.removeChild(Tile10);
       playboard.removeChild(Tile11);
       playboard.removeChild(Tile12);
       playboard.removeChild(Tile13);
       playboard.removeChild(Tile14);
       playboard.removeChild(Tile15);
       playboard.removeChild(Tile16);
    }
}