"use strict";


window.onload = function(){
    
    var messages = [];
    
    
    
    var j = 0;
    var i = 0;
    var myObj = {};
    
    var submit = document.querySelector("#send");
    var text = document.getElementById("textInput");
    var div = document.getElementById("text");
    var Enter = document.getElementById("textInput")
    

    
    
    
    
    
    submit.addEventListener("click", function(e){
                                                                            // http://stackoverflow.com/questions/11921210/how-exactly-does-event-preventdefault-affect-the-dom vad e.preventdefault gör.
        if (text.value === "")
        {
            e.preventdefault()
        }
        else
        {
        myObj = new Message(text.value, new Date());
        messages.push(myObj);
        
        renderMessage(messages.length-1);
        RemoveText();
        }
        });
        
    Enter.addEventListener("keydown", function(e){ //funkar ej
        if(e.keyCode === 13 && !e.shiftKey && text.value !== "")
        
        {
            e.preventDefault()
            myObj = new Message(text.value, new Date())
            messages.push(myObj);
                
            renderMessage(messages.length-1)
            RemoveText();
        }
        
    }
    )

        
    var renderMessage = function(index){
        ++j;
        document.getElementById("AmountofMessages").innerHTML = "Antal meddelanden: "+j;
        
        var text = document.createElement("p");
        text.className = "text";
        
        var img = document.createElement("img");
        var clockimg = document.createElement("img");
        
        
        
        
        img.className = "DeletePicture";
        img.src = "DeleteRed.png";
        
        clockimg.className = "ClockPicture";
        clockimg.src = "Clock.png";
        
        img.addEventListener("click", function(e){
            if (confirm("Radera detta meddelande?"))
            { 
                --j;
                Remove(index);
                text.parentNode.removeChild(text);
                document.getElementById("AmountofMessages").innerHTML = "Antal meddelanden: "+j;
            }
        }
        )
        
        clockimg.addEventListener("click", function(e) { 
                var year = messages[index].getDate().getFullYear();
                var month = messages[index].getDate().getMonth();
                var day = messages[index].getDate().getDate();
                var Hour = messages[index].getDate().getHours();
                var Minutes = messages[index].getDate().getMinutes();
                var Seconds = messages[index].getDate().getSeconds();
                if (Minutes < 10)
                {
                    Minutes = "0"+Minutes;       
                }
            alert("Inlägget skapades den "+day+"/"+month+" år "+year+ " klockan " +Hour+":"+Minutes+":"+Seconds)
        })
        
        var TimeShow = document.createElement("div");
        TimeShow.className ="MessageTime";
        TimeShow.innerHTML = messages[index].getDateText();
        
        text.innerHTML = messages[index].getHTMLText();
        div.appendChild(text);
        text.appendChild(img);
        text.appendChild(clockimg);
        text.appendChild(TimeShow); 
        
        
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
    var Remove = function(id)
    {
        messages.splice(id, 1);
    }
    
    var RemoveText = function(){
        document.getElementById("textInput").value="";
    }
}