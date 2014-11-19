"use strict";


window.onload = function(){
    
    var messages = [];
    
    
    
    var j = 0;
    var i = 0;
    var myObj = {};
    
    var submit = document.querySelector("#send");
    var text = document.getElementById("textInput");
    var div = document.getElementById("text");
    
    
    
    submit.addEventListener("click", function(e){
        myObj = new Message(text.value, new Date());
        messages.push(myObj);
        
        renderMessage(messages.length-1);
        });

        
    var renderMessage = function(index){
        var text = document.createElement("p");
        text.className = "text";
        
        var img = document.createElement("img");
        var clockimg = document.createElement("img");
        
        img.className = "DeletePicture";
        img.src = "DeleteRed.png";
        
        clockimg.className = "ClockPicture";
        clockimg.src = "Clock.png";
    
        
        text.innerHTML = messages[index].getHTMLText();
        div.appendChild(text);
        text.appendChild(img);
        text.appendChild(clockimg);
    }    
        
    
    var renderMessages = function() {
        //tar bort all text
        document.getElementById("#text").innerHTML = "";
        
        // sätter dit alla igen.
        for (i; i < messages.length; i += 1)
        {
            renderMessage(i);
        }
        
    }
    
}