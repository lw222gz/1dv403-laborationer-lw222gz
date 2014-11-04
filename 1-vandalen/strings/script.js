"use strict";

window.onload = function(){

	
	
	var i = 0;
	var a = "a";
	var A = "A";
	var Remade;

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	
	Remade = str;
	
	console.log(str.length);
	console.log(Remade.charAt(3).toUpperCase())
	
	for (i; i < str.length; i += 1)							//funkar ej.
	{
		//	var character = str.charAt(i);
		if (Remade.charAt(i) == Remade.charAt(i).toUpperCase() )
		{	Remade.charAt(i).toLowerCase();	}
		
		else 
		{	Remade.charAt(i).toUpperCase();	}
		console.log(Remade.charAt(i));
		
	}
	
	Remade = Remade.split("a").join("#"); // str.split(sök).join(utbyte);
	Remade = Remade.split("A").join("#");
	
	return Remade;
	
	
	/*
	var MyArr = [];
	MyArr = str.split(""); ////Denna versionen funkar att byta ut små till stora bokstäver.
	
	for (i; i < MyArr.length; i +=1)							
	{
		
		if (MyArr[i] === MyArr[i].toUpperCase() )
		{	MyArr[i] = MyArr[i].toLowerCase();	}
		
		else 
		{	MyArr[i] = MyArr[i].toUpperCase();	}
		
		
	}
	

	return MyArr;
	
	*/
	
		/*ArrayAdder = str.charAt(i);
		
		if (ArrayAdder === ArrayAdder.toUpperCase())
		{	ArrayAdder = ArrayAdder.toLowerCase();	}
		else
		{	ArrayAdder = ArrayAdder.toUpperCase();	}
		
		if (ArrayAdder === "a" || "A" || "å" || "Å" || "ä" || "Ä" || "ö" || "Ö")
		{	ArrayAdder = "#";	}
		
		MyArr.add(ArrayAdder);
		
	

	return ArrayAdder;*/




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