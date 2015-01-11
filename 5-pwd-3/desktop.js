"use strict";

var desktop = {
    picArray: [],
    main: null,
    picChoices: null,
    container:null,
    picWindow: null,
    picturesAppended: false,
    botPicBox: null,
    
    init:function(){
        desktop.main = document.getElementById("main");
        desktop.container = document.getElementById("container");
        var windowStatus = document.createElement("p");
        desktop.picWindow = document.createElement("div");
        
        desktop.picWindow.id = "PicWindow";           //  = document.getElementById("PicWindow");//.addEventListener("mousedown", desktop.mousedown)
        
        var topPicBox = document.createElement("div");
        desktop.botPicBox = document.createElement("div");
        desktop.botPicBox.className = "PicWindowBot";
        topPicBox.className = "PicWindowTop";
        
        desktop.picWindow.appendChild(topPicBox);
        desktop.picWindow.appendChild(desktop.botPicBox);

        windowStatus.className = "windowStatus";
        windowStatus.innerHTML = "Pictures"
      
        var closeWindow = document.createElement("div");
        desktop.picChoices = document.createElement("div");
        
        closeWindow.className = "CloseWindow";
        desktop.picChoices.className = "PicChoices"; 
        
        desktop.picWindow.appendChild(closeWindow);
        topPicBox.appendChild(windowStatus);
        
        desktop.picWindow.appendChild(desktop.picChoices);
        
        
        
        
        
        topPicBox.addEventListener("mousedown", desktop.mousedown);
        window.addEventListener('mouseup', desktop.mouseup);  // kan också binda detta till window objektet, är lite mer effektivt men är det tillåtet?
        
        closeWindow.addEventListener("click", function(e){
            desktop.removeDiv(desktop.picWindow);
        })
        
        document.getElementById("PicFooter").addEventListener("click", function(e){
            
            desktop.main.appendChild(desktop.picWindow);
            
            if (desktop.picturesAppended == false)
            {
                desktop.picutreFunction();
                desktop.picturesAppended = true;
            }
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

                desktop.displayPicutres();
            }
            else{
                
                gif.src = "Pics/ajax-loader.gif";
                gif.className = "gifEdits";
                windowLoader.innerHTML = "Laddar "
                windowLoader.appendChild(gif);
                desktop.botPicBox.appendChild(windowLoader);
            }
            
        }
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true)
        xhr.send(null);
    },
    
    displayPicutres: function(){
        
        
        var i;
        var j;
        var Id = 0;
        var maxWidth = 0;
        var maxHeight = 0;
        
        for (i = 0; i < desktop.picArray.length; i+= 1)
        {
            
            var box = document.createElement("div");
            var aTag = document.createElement("a");
            var img = document.createElement("img");
            
            box.className = "pictureBox";
            
            aTag.href = "#";
            //img.className = "imgPosition";
            img.src = desktop.picArray[Id].thumbURL;
            
            if (desktop.picArray[Id].thumbWidth > maxWidth)
            {
                maxWidth = desktop.picArray[Id].thumbWidth;
            }
            if (desktop.picArray[Id].thumbHeight > maxHeight)
            {
                maxHeight = desktop.picArray[Id].thumbHeight;
            }
            
            aTag.url = desktop.picArray[Id].URL;
           
            aTag.addEventListener("click", desktop.changeBackground);
            
            aTag.appendChild(img);
            box.appendChild(aTag)
            
            desktop.picChoices.appendChild(box)
            
            Id += 1;
            
        
        
        }
        var imgBoxses = document.querySelectorAll(".pictureBox");
        console.log(imgBoxses)
        for (i = 0; i < imgBoxses.length; i++) {
            imgBoxses[i].style.width = maxWidth + "px";
            imgBoxses[i].style.height = maxHeight+"px";
        }
        
        
        
    },
    
    mouseup: function(){
        desktop.container.removeEventListener("mousemove", desktop.divMove);
    },
    
    mousedown: function(){
        desktop.container.addEventListener("mousemove", desktop.divMove);
    },
    
    divMove: function(e){
      var div = document.getElementById("PicWindow");
      div.style.position = "absolute";
      div.style.top = e.clientY-118 + "px";
      div.style.left = e.clientX-80 + "px";
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