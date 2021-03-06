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
	
	
	for (i = 0; i < persArr.length; i += 1)
	{
	     NameArray[i] = persArr[i].name;
	}
	
	NameArray.sort(function (a,b) { return a.localeCompare(b, 'sv'); });
	names = NameArray.toString();
	
	names = names.split(",").join(", ");
	
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

