"use strict";


window.onload = function(){
    
    var messages = [];
    var myObj = {};
    var submit = document.querySelector("#send");
    var text = document.getElementById("textInput");
    var div = document.getElementById("TextBlock");
    
    submit.addEventListener("click", function(e){
        myObj = new Message(text.value, new Date());
        messages.push(myObj);
        
        renderMessage(myObj);
        });
        
    var renderMessage = function(){
        var text = document.createElement("p");
        text.innerHTML = messages[myObj].getHTMLText();
        div.appendChild(text.value);
    }    
        
    
    
    
    

}