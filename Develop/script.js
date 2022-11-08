// Assignment Code
var generateBtn = document.querySelector("#generate");
var pullUpOptionsBtn = document.querySelector("#pullUpOptions");

// Write password to the #password input
function writePassword() {
	var sizemin = document.getElementById("sizemin").value;
	var sizemax = document.getElementById("sizemax").value;
	var lowercase = document.getElementById("lowercase").checked;
	var uppercase = document.getElementById("uppercase").checked;
	var numbers = document.getElementById("numbers").checked;
	var special = document.getElementById("special").checked;
	var totalsize = sizemax - sizemin;

	if (sizemin < 8) {alert("Your minimum size needs to be 8 or higher");return false;}
	if (sizemax > 128) {alert("Your maxium size needs to be 128 or lower");return false;}
	if (totalsize < 8) {alert("Your total password needs to be at least 8 characters");return false;}
	if (totalsize > 128) {alert("Your total password can't be above 128 characters");return false;}
	if (!lowercase && !uppercase && !numbers && !special){alert("Your need to select at least 1 checkbox.");return false;}

	var lowerList = "abcdefghijklmnopqrstuvwxyz";
	var upperList = lowerList.toUpperCase();
	var specialList = "~!@ #$%^&*()_+-={}[]:;?,.|";
	var numberList = "0123456789";
	var masterList = "";

	if (lowercase) {masterList = masterList + lowerList;}
	if (uppercase) {masterList = masterList + upperList;}
	if (special) {masterList = masterList + specialList;}
	if (numbers) {masterList = masterList + numberList;}

	var Password = "";

	for (var i = 0; i < totalsize; i++) {
		password += masterList.charAt(Math.floor(Math.random() * masterList.length));
	}

console.log(password);


	document.getElementById("passwordDisplay").value = password;

	document.getElementById("options").style.display = "none";
	document.getElementById("password").style.display = "block";
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
pullUpOptionsBtn.addEventListener("click", showOptions);

// Show the options for the password
function showOptions() {
	document.getElementById("options").style.display = "block";
	document.getElementById("password").style.display = "none";
}

