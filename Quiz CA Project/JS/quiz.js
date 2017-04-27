
document.getElementById('timer').innerHTML =
05 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('time up!!')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

var frmvalidator = new Validator("myform");
frmvalidator.addValidation("Name","req","Please enter your name.");
frmvalidator.addValidation("Name","maxlen=40",
"Max length for Name is 40");
frmvalidator.addValidation("Email","maxlen=40");
frmvalidator.addValidation("Email","req");
frmvalidator.addValidation("Email","email");
frmvalidator.addValidation("Mobile","maxlen=40");
frmvalidator.addValidation("Mobile","numeric");


function grade() {
		
	
       var One = parseInt(document.querySelector('input[name = "One"]:checked').value);
	   var Two = parseInt(document.querySelector('input[name = "Two"]:checked').value);
	   var Three = parseInt(document.querySelector('input[name = "Three"]:checked').value);
	   var Four = parseInt(document.querySelector('input[name = "Four"]:checked').value);
	   var Five = parseInt(document.querySelector('input[name = "Five"]:checked').value);
	   var Six = parseInt(document.querySelector('input[name = "Six"]:checked').value);
	   var Seven = parseInt(document.querySelector('input[name = "Seven"]:checked').value);
	   var Eight = parseInt(document.querySelector('input[name = "Eight"]:checked').value);
	   var Nine = parseInt(document.querySelector('input[name = "Nine"]:checked').value);
	   var Ten = parseInt(document.querySelector('input[name = "Ten"]:checked').value);
	   var Eleven = parseInt(document.querySelector('input[name = "Eleven"]:checked').value);
	   var Twelve = parseInt(document.querySelector('input[name = "Twelve"]:checked').value);
	   var Thirteen = parseInt(document.querySelector('input[name = "Thirteen"]:checked').value);
	   var Fourteen = parseInt(document.querySelector('input[name = "Fourteen"]:checked').value);
	   var Fifteen = parseInt(document.querySelector('input[name = "Fifteen"]:checked').value);
	   var Sixteen = parseInt(document.querySelector('input[name = "Sixteen"]:checked').value);
	   var Seventeen = parseInt(document.querySelector('input[name = "Seventeen"]:checked').value);
	   var Eighteen = parseInt(document.querySelector('input[name = "Eighteen"]:checked').value);
	   var Nineteen = parseInt(document.querySelector('input[name = "Nineteen"]:checked').value);
	   var Twenty = parseInt(document.querySelector('input[name = "Twenty"]:checked').value);
	   
	   
	result = One + Two + Three + Four + Five + Six + Seven + Eight + Nine + Ten + Eleven + Twelve + Thirteen + Fourteen + Fifteen + Sixteen + Seventeen + Eighteen + Nineteen + Twenty; 
	document.getElementById("grade").innerHTML = result;	
	
	   
return false; // This means you don't have to refresh the page;
} //this ends the submit function


