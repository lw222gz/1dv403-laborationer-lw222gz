"use strict";

window.onload = function(){

	
	
	

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	
	
	
	
	var MyArr = [];
	MyArr = str.split(""); // problem, vägrar att ta 2 saker i rad, funkar första gången man skvier in något men inte andra.
	
	
	
	
	if (str === "")
	{
		throw new Error("Var vänlig och skriv något i rutan.")
	}
	
	/*
	for (i; i < MyArr.length; i += 1)			//funkar EJ!				
	{

			if (str.charAt(i) === str.charAt(i).toUpperCase() )
			{	str.charAt(i).toLowerCase();	}
		
			else 
			{	str.charAt(i).toUpperCase();	}
		
		
	}
	*/
	
	for (var i = 0; i < str.length; i += 1)							
	{
		
			if (MyArr[i] === MyArr[i].toUpperCase() )
			{	MyArr[i] = MyArr[i].toLowerCase();	}
		
			else 
			{	MyArr[i] = MyArr[i].toUpperCase();	}
		
		
	}
	
	
	str = MyArr.toString();
	str = str.split(",").join("");
	str = str.split("a").join("#"); // str.split(sök).join(utbyte);
	str = str.split("A").join("#");
	
	return [str];
	

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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};