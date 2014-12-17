"use strict";

var desktop = {
    picArray: [],
    container: null,
    
    init:function(){
        desktop.container = document.getElementById("container");
        //desktop.container.style.backgroundImage = "url(Pics/PictureFolder.png)" <<<<---- hur man byter bakgrundsbilden för containerns
        var windowStatus = document.createElement("p");
        var picWindow = document.createElement("div");
        
        picWindow.id = "PicWindow";           //  = document.getElementById("PicWindow");//.addEventListener("mousedown", desktop.mousedown)
        //iconPicture.src = "Pics/PictureFolder.png";
        //iconPicture.className = ""
        windowStatus.className = "windowStatus";
        windowStatus.innerHTML = "Pictures"
      
        var closeWindow = document.createElement("div");
        var picChoices = document.createElement("div");
        
        closeWindow.className = "CloseWindow";
        picChoices.className = "PicChoices"; 
        
        picWindow.appendChild(closeWindow);
        picWindow.appendChild(windowStatus);
        
        picWindow.appendChild(picChoices);
        
        
        
        picWindow.addEventListener("mousedown", desktop.mousedown);
        window.addEventListener('mouseup', desktop.mouseup);
        
        closeWindow.addEventListener("click", function(e){
            desktop.removeDiv(picWindow);
        })
        
        document.getElementById("PicFooter").addEventListener("click", function(e){
            //picWindow.style.visibility = "visible";
            desktop.container.appendChild(picWindow);
            
            desktop.picutreFunction();
        })
    },
    
    picutreFunction: function(){
        
        
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200)// Lägga till laddnings ikonen när readystate !== ifrån 4?
            {
                desktop.picArray = JSON.parse(xhr.responseText);
                console.log(desktop.picArray)
                desktop.displayPicutres();
            }
            
        }
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true)
        xhr.send(null);
    },
    
    displayPicutres: function(){
        var i;
        for (i = 0; i < desktop.picArray; i += 1)
        {
            //desktop.picArray[i].ur
        }
    },
    
    mouseup: function(){
        window.removeEventListener("mousemove", desktop.divMove);
    },
    
    mousedown: function(){
        window.addEventListener("mousemove", desktop.divMove);
    },
    
    divMove: function(e){
      var div = document.getElementById("PicWindow");
      div.style.position = "absolute";
      div.style.top = e.clientY + "px";
      div.style.left = e.clientX + "px";
    },
    
    removeDiv: function(div){
        desktop.container.removeChild(div);
    },
}

window.onload = desktop.init;