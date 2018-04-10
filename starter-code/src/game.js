var game = new War();

document.querySelector("#submit-saxons").onclick = function() {
	var saxons = document.querySelector("#saxon-army").value;
	document.querySelector("#saxons").insertAdjacentHTML("afterbegin", saxons);

	for (let i = 0; i < saxons; i++) {
		game.addSaxon(saxon);
	}
	console.log("Saxons:", game.saxonArmy, "Vikings:", game.vikingArmy);
};

document.querySelector("#submit-vikings").onclick = function() {
	var vikings = document.querySelector("#viking-army").value;
	document.querySelector("#vikings").insertAdjacentHTML("afterbegin", vikings);

	for (let i = 0; i < vikings; i++) {
		game.addViking(viking);
	}
	console.log("Saxons:", game.saxonArmy, "Vikings:", game.vikingArmy);
};

document.querySelector("#saxonsAttack").onclick = function() {
	if (game.vikingArmy.length > 0) {
		game.saxonAttack();
		console.log(game.showStatus());
		console.log("Saxons:", game.saxonArmy, "Vikings:", game.vikingArmy);
		var log = "";
		log += "<li>" + new Date() + " " + game.showStatus() + "</li>";
		document.querySelector("#diary").insertAdjacentHTML("afterbegin", log);
		var vikings = game.vikingArmy.length;
		document.querySelector("#vikings").innerHTML = vikings;
	}
};

document.querySelector("#vikingsAttack").onclick = function() {
	if (game.saxonArmy.length > 0) {
		game.vikingAttack();
		console.log(game.showStatus());
		console.log("Saxons:", game.saxonArmy, "Vikings:", game.vikingArmy);
		var log = "";
		log += "<li>" + new Date() + " " + game.showStatus() + "</li>";
		document.querySelector("#diary").insertAdjacentHTML("afterbegin", log);
		var saxons = game.saxonArmy.length;
		document.querySelector("#saxons").innerHTML = saxons;
	}
};

document.querySelector("#checkStatus").onclick = function() {
	console.log(game.showStatus());
};
