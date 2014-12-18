"use strict";

var desktop = {
    picArray: [],
    main: null,
    picChoices: null,
    container:null,
    picWindow: null,
    
    init:function(){
        desktop.main = document.getElementById("main");
        desktop.container = document.getElementById("container");
        var windowStatus = document.createElement("p");
        desktop.picWindow = document.createElement("div");
        
        desktop.picWindow.id = "PicWindow";           //  = document.getElementById("PicWindow");//.addEventListener("mousedown", desktop.mousedown)
        //iconPicture.src = "Pics/PictureFolder.png";
        //iconPicture.className = ""
        windowStatus.className = "windowStatus";
        windowStatus.innerHTML = "Pictures"
      
        var closeWindow = document.createElement("div");
        desktop.picChoices = document.createElement("div");
        
        closeWindow.className = "CloseWindow";
        desktop.picChoices.className = "PicChoices"; 
        
        desktop.picWindow.appendChild(closeWindow);
        desktop.picWindow.appendChild(windowStatus);
        
        desktop.picWindow.appendChild(desktop.picChoices);
        
        
        
        desktop.picWindow.addEventListener("mousedown", desktop.mousedown);
        window.addEventListener('mouseup', desktop.mouseup);
        
        closeWindow.addEventListener("click", function(e){
            desktop.removeDiv(desktop.picWindow);
        })
        
        document.getElementById("PicFooter").addEventListener("click", function(e){
            
            desktop.main.appendChild(desktop.picWindow);
            
            desktop.picutreFunction();
        })
    },
    
    picutreFunction: function(){
        
        var windowLoader = document.createElement("p");
        windowLoader.style.textIndent = "10px";
        var gif = document.createElement("img");
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200)// Lägga till laddnings ikonen när readystate !== ifrån 4?
            {
                windowLoader.innerHTML = ""
                desktop.picArray = JSON.parse(xhr.responseText);
                console.log(desktop.picArray)
                desktop.displayPicutres();
            }
            else{
                
                gif.src = "Pics/ajax-loader.gif";
                gif.className = "gifEdits";
                windowLoader.innerHTML = "Laddar "
                windowLoader.appendChild(gif);
                desktop.picWindow.appendChild(windowLoader);
            }
            
        }
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true)
        xhr.send(null);
    },
    
    displayPicutres: function(){
        
        
        var table = document.createElement("table");
        var i;
        var j;
        var Id = 0;
        var maxWidth = 0;
        var maxHeight = 0;
        
        for (i = 0; i < desktop.picArray.length/3; i+= 1)
        {
            var TableRow = document.createElement("tr");
            table.appendChild(TableRow);
            for (j = 0; j < 3; j += 1)
            {
                var box = document.createElement("div");
                var aTag = document.createElement("a");
                var Cell = document.createElement("td");
                var img = document.createElement("img");
                
                
                box.className = "pictureBox";
                
                aTag.href = "#";
                //img.className = "imgPosition";
                img.src = desktop.picArray[Id].thumbURL;
                
                if (desktop.picArray[Id].thumbWidth > maxWidth)
                {
                    box.style.width = desktop.picArray[Id].thumbWidth;
                }
                if (desktop.picArray[Id].thumbHeight > maxHeight)
                {
                    box.style.height = desktop.picArray[Id].thumbHeight;
                }
                
                
                aTag.url = desktop.picArray[Id].URL;
                console.log(aTag.url)
               
                
                aTag.addEventListener("click", desktop.changeBackground);
                
                aTag.appendChild(img);
                box.appendChild(aTag)
                Cell.appendChild(box);
                TableRow.appendChild(Cell);
                
                Id += 1;
            }
            table.appendChild(TableRow);
        }
        
        desktop.picChoices.appendChild(table);
        
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
        desktop.main.removeChild(div);
    },
    
    changeBackground: function(){
        desktop.container.style.backgroundRepeat = "Repeat";
        desktop.container.style.backgroundImage = "url("+this.url+")";
    }
}

window.onload = desktop.init;