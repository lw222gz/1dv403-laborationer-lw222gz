"use strict";

function newWindow(xPos, yPos, Id){
    
    var block = document.createElement("div");
    block.className = Id;
    block.style.marginLeft = xPos + "px";
    block.style.marginTop = yPos + "px";
    
    new Gallery(block)
    document.getElementById("container").appendChild(block);
    
    
    
}