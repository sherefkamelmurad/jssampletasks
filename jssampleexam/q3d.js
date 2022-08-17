
var date1 = new Date("02/4/2001");
var date2 = new Date("02/4/2022");


var differencebetwendate = date2.getTime() - date1.getTime();


var differencebetwendate = differencebetwendate / (1000 * 3600 * 24);

document.write("Total number of days between dates"
			+ date1 +"<br> and <br>"+date2+"<br> is <br>" + differencebetwendate);

