"use strict";

var start = {
    
    xPos:0,
    yPos:0,
    
    init:function(){
        document.getElementById("GalleryPic").addEventListener("click", function(){
            start.addWindow("whiteBox");
        })
    },
    
    addWindow: function(Id){
        
        start.xPos += 10;
        start.yPos += 10;
         new newWindow(start.xPos, start.yPos, Id);
    }
}

window.onload = start.init;