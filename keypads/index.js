let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
	button.addEventListener('click', (e) => {
		switch(e.target.innerText){
			case 'C' :
				display.innerText = '';
				break;
				case '←':
					display.innerText = display.innerText.slice(0, -1);
					break;
			default:
				display.innerText += e.target.innerText;
		}
	});
});
var showX = document.getElementById("show_x");
var show = document.getElementById("hi")

show.onclick = function() {
	document.getElementById("hi").style.diplay = "";
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }
