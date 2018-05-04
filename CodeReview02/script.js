

function deferenceBox(){

	function getSum(a,b){
		return a + b;
	}

	var	amsterdam = [1500, 500, 1800, 700];
	var london = [2500, 1500, 1000, 900];
	var UnitedKingdom = 'United Kingdom';
	var Netherlands = 'Netherlands';

// reduce method and getSum function used calculate the average of each city 

	var avgAmsterdam = amsterdam.reduce(getSum) / 4;
	var avgLondon = london.reduce(getSum) / 4;

// Math.min & max methods used to avoid having minus result in the deference box 
// and they help to put the affordable city  in the result text 

	var minNum = Math.min(avgAmsterdam,avgLondon);	
	var maxNum = Math.max(avgAmsterdam,avgLondon);
	var result = maxNum - minNum;

	 document.getElementById('average-amsterdam').innerHTML = avgAmsterdam;
	 document.getElementById('average-london').innerHTML = avgLondon;
	 document.getElementById('netherlands').innerHTML = Netherlands;
	 document.getElementById('united-kingdom').innerHTML = UnitedKingdom;
	 document.getElementById('h2-different').innerHTML = result  + ' &euro;';

// if condition used to find the affordable city and returns it in the text 

	 if (minNum == avgAmsterdam){
		document.getElementById('word-1').innerHTML = 'Amsterdam' ;
		document.getElementById('word-2').innerHTML = 'London' ;
	} else {
		document.getElementById('word-1').innerHTML = 'London' ;
		document.getElementById('word-2').innerHTML = 'Amsterdam' ;
	}

}


