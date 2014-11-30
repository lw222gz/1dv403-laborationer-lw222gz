"use strict";

var memory = {
    
    
    
    Ids: 0,
    picArray:null,
    
    
    Cell: null,
    rows: 4,
    cols: 4,
    StartGame: document.getElementById("4x4"),
    
    init:function() {
        memory.picArray = RandomGenerator.getPictureArray(memory.rows, memory.cols)
        memory.createBoard();
    },
    
    createBoard: function(){
        
        var table = document.createElement("table");
        var i;
        var j;
        
        for (i = 0; i < memory.rows; i+= 1)
        {
            var TableRow = document.createElement("tr");
            table.appendChild(TableRow);
            for (j = 0; j < memory.cols; j += 1)
            {
                var aTag = document.createElement("a")
                var Cell = document.createElement("td");
                var img = document.createElement("img");
                
                aTag.href = "#"
                
                
                
                
                img.src = "pics/0.png"
                img.className = "pics/"+memory.picArray[memory.Ids]+".png"
                aTag.img = img;
                
                aTag.addEventListener("click", memory.test)
                
                aTag.appendChild(img);
                Cell.appendChild(aTag);
                TableRow.appendChild(memory.Cell);
            }
            table.appendChild(TableRow);
        }
        var GameBoard = document.getElementById("playboard");
        GameBoard.appendChild(table);
    },
    
    
    test: function() {
       console.log(aTag.img.className)
       
    },
    
}  

window.onload = memory.init;