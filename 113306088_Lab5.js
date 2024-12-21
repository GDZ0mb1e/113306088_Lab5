
var button = document.getElementById("input");
var tbody = document.getElementById("tbody");
var tfoot = document.getElementById("tfoot");
var times = 0; let mathAvg = 0; let mathSum = 0;
let englishAvg = 0; let englishSum = 0;

button.addEventListener("click", function(){
	times++;
	var math = Number(document.getElementById("math").value);
	var english = Number(document.getElementById("english").value);
	mathSum += math;
	englishSum += english;
	tbody.innerHTML += `<tr>
							<td>${times}</td>
							<td>${math}</td>
							<td>${english}</td>
						</tr>`;
	document.getElementById("math").value = "";
	document.getElementById("english").value = "";
	mathAvg = mathSum / times;
	englishAvg = englishSum / times;
	tfoot.innerHTML = `<tr>
							<th>Average</th>
							<th>${mathAvg.toFixed(2)}</th>
							<th>${englishAvg.toFixed(2)}</th>
						</tr>		`;

});


