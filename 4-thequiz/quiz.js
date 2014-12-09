"use strict";

var quiz = {
    Tries: 0,
    tryArr: [],
    serverObj: null,
    
    init:function(){
        var input = document.getElementById("svar");
        quiz.renderQuestion("http://vhost3.lnu.se:20080/question/1")
        document.getElementById("button").addEventListener("click", function(e){
                    if (input.value !== "")
                    {
                        quiz.answerQuestion(input.value, quiz.serverObj.nextURL)
                    }
                    else
                    {
                        e.preventDefault();
                    }
                })
                
        input.addEventListener("keydown", function(e) {
                    if (e.keyCode === 13)
                    {
                        if (input.value !== "")
                        {
                            quiz.answerQuestion(input.value, quiz.serverObj.nextURL)
                        }
                        else
                        {
                            e.preventDefault();
                        }
                    }
                })
    },    
        
    renderQuestion: function(url){
        quiz.Tries = 0;
        var serverQuestion = document.getElementById("question");
        var XHR = new XMLHttpRequest();
        var input = document.getElementById("svar");
        input.value = "";
        
        XHR.onreadystatechange = function(){ 
            if (XHR.readyState === 4 && XHR.status === 200)
            {
                quiz.serverObj = JSON.parse(XHR.responseText);
                serverQuestion.innerHTML = quiz.serverObj.question;
            }
        }
        XHR.open("GET",url , true)
        XHR.send(null)
    },
    
    answerQuestion: function(answer, url){
        var xhr1 = new XMLHttpRequest();
        var i;
        
        var status = document.getElementById("questionStatus")
        
        xhr1.onreadystatechange = function(){
             if (xhr1.readyState === 4)
             {
                var response = JSON.parse(xhr1.responseText);
                if (response.message === "Correct answer!")
                {
                    
                    if (response.nextURL !== undefined)
                    {
                        quiz.tryArr.push(quiz.Tries)
                        quiz.renderQuestion(response.nextURL)
                        status.innerHTML = "Rätt svar!"
                        console.log(quiz.tryArr)
                    }
                    else
                    {
                        quiz.tryArr.push(quiz.Tries)
                        status.innerHTML = "Du klara dig! Resultat:"
                        document.getElementById("button").disabled = true;
                        document.getElementById("svar").value = "";
                        document.getElementById("svar").disabled = true;
                        for (i = 1; i < quiz.tryArr.length + 1; i +=1)
                        {
                            var pTag = document.createElement("p")
                            pTag.innerHTML = "Fråga "+i+": "+quiz.tryArr[i-1]+" försök"
                            status.appendChild(pTag);
                        }
                    }
                }
                else
                {
                    quiz.Tries += 1;
                    document.getElementById("svar").value = "";
                    console.log(quiz.tryArr)
                    status.innerHTML = "Fel svar!"
                }
            }
        }
        var sendAnswer = JSON.stringify({answer: answer})
        xhr1.open("POST",url , true)
        xhr1.setRequestHeader("Content-type", "application/json")
        xhr1.send(sendAnswer)
        
    },
}
window.onload = quiz.init;