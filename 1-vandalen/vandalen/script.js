"use strict";

var makePerson = function(persArr){

    var result = {}; // ska fyllas med minsta åldern (minAge), högsta ålderna (maxAge), medelåldern (avarageAge) och en sträng med alla namn spearerade med ett ", " samt i bokstavsordning.
    var i;
    var NameArray = [];
    var names = "";
    var AgeArray = [];
    var minAge;
    var maxAge;
    var averageAge;
    //var position = {'A': 65,'B': 66, 'C': 67, 'D':68, 'E':69, 'F':70, 'G':71, 'H':72, 'I':73, 'J':74, 'K':75, 'L':76, 'M':77, 'N': 78, 'O': 79, 'P': 80, 'Q': 81, 'R':82, 'S': 83, 'T': 84, 'U': 85, 'V':86, 'W':87, 'X':88, 'Y':89, 'Z':90, 'Å': 196, 'Ä': 197, 'Ö':214}; // , 'a':94, 'b':95, 'c':96, 'd':97, 'e':98, 'f':99, 'g':100, 'h':101, 'i':102, 'j':103, 'k':104, 'l':105, 'm':106, 'n': 107, 'o':108, 'p':109, 'q':110, 'r':111, 's':112, 't':113, 'u':114, 'v':115, 'w':116, 'x':117, 'y':118, 'z':119, 'å':120, 'ä':121, 'ö':122
	
	
	for (i = 0; i < persArr.length; i += 1) // klar och funkar.
	{
	     NameArray[i] = persArr[i].name;
	}
	//NameArray.sort(function(a, b) { return position[a] - position[b]; });
	NameArray.sort();
	names = NameArray.toString();
	
	names = names.split(",").join(", ");
	console.log(names);
	
	for (i = 0; i < persArr.length; i += 1)
	{
	    AgeArray[i] = persArr[i].age;
	}
	AgeArray.sort(function(a, b){return a-b});
	
	minAge = AgeArray[0];
	maxAge = AgeArray[AgeArray.length-1];
	averageAge = AgeArray.reduce(function(a,b){ return a+b;});
	averageAge = averageAge/ (AgeArray.length);
	
	
	result = {minAge: minAge, maxAge: maxAge, averageAge: Math.round(averageAge), names: names};
	
    return result;
}

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}]; //[{name: "Elite Lukké", age: 20}, {name:"Nagging Nancy", age: 66}, {name:"Knas Kalle", age: 34}, {name:"Happy Feet", age: 5}] [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}]
var result = makePerson(data);

console.log(result);

