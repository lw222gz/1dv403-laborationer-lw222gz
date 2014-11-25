"use strict";


window.onload = function(){
    
    var messages = [];
    
    
    
   
    var myObj = {};
    var i;
    var submit = document.querySelector("#send");
    var text = document.getElementById("textInput");
    var div = document.getElementById("text");
    var Enter = document.getElementById("textInput");
    var date;

  
    submit.addEventListener("click", function(e){
                                                                            // http://stackoverflow.com/questions/11921210/how-exactly-does-event-preventdefault-affect-the-dom vad e.preventdefault gör.
        if (text.value === "")
        {
            e.preventdefault();
        }
        else
        {
        date = new Date();
        myObj = new Message(text.value, date);
        messages.push(myObj);
        
        renderMessage(messages.length-1);
        removeText();
        }
        });
        
    Enter.addEventListener("keydown", function(e){ 
        
        
        if (e.keyCode == 13 && document.getElementById("textInput").value === "")
                {e.preventDefault()}
        
        if(e.keyCode === 13 && !e.shiftKey && text.value !== "")
        
        {
            e.preventDefault()
            date = new Date();
            myObj = new Message(text.value, date)
            messages.push(myObj);
                
            renderMessage(messages.length-1)
            removeText();
        }
        
    }
    )

        
    var renderMessage = function(index){
        
        document.getElementById("AmountofMessages").innerHTML = "Antal meddelanden: "+messages.length;
        
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
                
                //text.parentNode.removeChild(text);
                messages.splice(index, 1);
                renderMessages();
                document.getElementById("AmountofMessages").innerHTML = "Antal meddelanden: "+messages.length;
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
                if (Seconds < 10)
                {
                    Seconds = "0"+Seconds;
                }
            alert("Inlägget skapades den "+day+"/"+month+" år "+year+ " klockan " +Hour+":"+Minutes+":"+Seconds)
        })
        
        var TimeShow = document.createElement("div");
        TimeShow.className ="MessageTime";
        TimeShow.innerHTML = messages[index].getDateText();
        
        text.innerHTML = messages[index].getHTMLText();
        
        var element = document.getElementById("text");
        element.scrollTop = element.scrollHeight;
        text.appendChild(img);
        text.appendChild(clockimg);
        text.appendChild(TimeShow); 
        div.appendChild(text);
        
        
    }    
        
    
    var renderMessages = function() {
        //tar bort all text
        div.innerHTML = "";
        
        // sätter dit alla igen.
        for (i = 0; i < messages.length; i += 1)
        {
            renderMessage(i);
        }
        
    }
    
    
    var removeText = function(){
        document.getElementById("textInput").value="";
    }
}