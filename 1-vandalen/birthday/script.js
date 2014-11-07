"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
		var now = new Date();
		var Birthday = new Date(date);
		var AmountOfDays = 0;
		var SameYear = new Date();
		var days = 0;
		var month = 0;
		var year = 0;
		
		Birthday.setFullYear(now.getFullYear());
		
		AmountOfDays = (Birthday.getTime() - now.getTime())/(1000*60*60*24);
		
		console.log(Birthday.getFullYear());
		
		days = Birthday.getDate() - now.getDate();
		month = Birthday.getMonth() - now.getMonth();
		year = Birthday.getFullYear() - now.getFullYear();
		
		console.log((Birthday.getTime() - now.getTime())/(1000*60*60*24));
		
		if (date === "")
		{ 
			throw new Error("FEL! Var vänlig och ange ditt födelse datum.");
		}
		
			if ((Birthday.getTime() - now.getTime())/(1000*60*60*24) >= -1)
			{
				if (days === 0 && month === 0 && year === 0)
				{
					return 0;
				}
				if (days === 1 && month === 0 && year === 0)
				{
					return 1;
				}
				return AmountOfDays;
			}
			
			else
			{
				SameYear.setFullYear(Birthday.getFullYear()-1);
				return (Birthday.getTime() - SameYear.getTime())/(1000*60*60*24);
			}
		
		
		


	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value); // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};