"use strict";

var memory = {
    
    Tries: 0,
    PairsFound: 0,
    Ids: 0,
    picArray:null,
    check: true,
    firstClick: null,
    TurnedOver: 0,
    rows: 4,
    cols: 4,
    
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
                
                memory.Ids += 1;
                
                aTag.addEventListener("click", memory.onClick)
                
                aTag.appendChild(img);
                Cell.appendChild(aTag);
                TableRow.appendChild(Cell);
            }
            table.appendChild(TableRow);
        }
        var GameBoard = document.getElementById("playboard");
        GameBoard.appendChild(table);
    },
    
    
    onClick: function() {
       
       
       if (memory.check === true)
       {
       memory.TurnedOver += 1;
       this.img.src = this.img.className;
       this.removeEventListener("click", memory.onClick);
       
           if (memory.TurnedOver === 2)
           {
               memory.check = false;
               memory.TurnedOver = 0;
               var secondClick = this;
               if (memory.firstClick.img.className === secondClick.img.className)
               {
                   
                   memory.check = true;
               }
               else
               {
                   
                   setTimeout(function(){
                       memory.firstClick.img.src = "pics/0.png";
                       secondClick.img.src = "pics/0.png";
                       memory.firstClick.addEventListener("click", memory.onClick);
                       secondClick.addEventListener("click", memory.onClick);
                       memory.check = true;
                   }, 1000)
               }
               
           }
       }
       if (memory.TurnedOver === 1)
       {
            memory.firstClick = this;
       }
       
    },
}  

window.onload = memory.init;