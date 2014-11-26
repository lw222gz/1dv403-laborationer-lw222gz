"use strict";

window.onload = function(){
    var picArray = [];
    var playboard = document.getElementById("playboard")
    var i;
    var Ids = [];
    var j = 0;
    var TileArray = [];
    var EightTiles = document.getElementById("4x2");
    var SixteenTiles = document.getElementById("4x4");
    
    for (i = 0; i < 16; i += 1)
    {
        TileArray[i] = document.createElement("img");
        Ids[i] = i;
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
    
    /*         // TEST ZON! ska bara ha effekt när man refreshar    
    var holder = function(){  
        TileArray[0].src = "pics/1.png";        
        var ja;
        ja += 1;
        console.log(ja);
    }
    playboard.appendChild(TileArray[0])
   
                 // ger undefined is not a function.
    TileArray[0].addEventListener("click", function(e){
        TileArray[0].src = "pics/1.png"; 
    })      // varför skrer funktionen direkt?
    
    
    
    
    
        TileArray[0].removeEventListener("click", function(e){ // funkar endåså inte???? måste göra något fel
        TileArray[0].src = "pics/1.png"; 
    });
        console.log("Damn")
    
     */           // TEST ZON!
    
    
    
    EightTiles.addEventListener("click", function(e){
        
        
        resetAllTiles();
        resetIds();
        console.log(Ids);
        
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
        resetIds()
        console.log(Ids);
        
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
    var counter = 0;
    var a = 0;
    var b = 0;
    
    
    
    var addEvent = function(index) {
        TileArray[index].addEventListener("click", function(e){
            if (Ids[index] === index)                               // kunde inte jämnföra img.src så gav alla bilder ett id som ges tillbaka rätt värde om man inte 
            {
                Ids[index] += 1;
                TileArray[index].src = "pics/"+picArray[index]+".png";
                pressedTile(index)
            }
        })
    }
    
    
    
    var pressedTile = function(index){
         
         check += 1;
         
        
        if (check == 2)
         {
             check = 0;
             a = index;
             comparePictures(a,b)
         }
         b = index;
    }
    
    var comparePictures = function(a, b){
        // ge +1 på count variabel som håller koll på antal försök.
        counter += 1; // !! Lägg till så att detta demonstreras på hemsidan
        
        if (picArray[a] === picArray[b])
        {
            console.log("WIN!") //lägg till ett + för antal par man hittar av antalet som finns kvar att hitta.
        }
        
        else
        {
            console.log("LOOSE!!")
            Ids[a] -= 1;
            Ids[b] -= 1;
            for (i = 0; i < Ids.length; i += 1)
            {
                Ids[i] += 1;
            }
            
            setTimeout(function() {
                TileArray[a].src = "pics/0.png"
                TileArray[b].src = "pics/0.png"
                for (i = 0; i < Ids.length; i += 1)
                {
                    Ids[i] -=1;
                }
            }, 1000);
            
        }
    }
    
    
    var resetIds = function(){
        for (i = 0; i < Ids.length; i += 1)
        {
            Ids[i] = i;
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