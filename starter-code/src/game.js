var war = new War();

function generateArmy(){
  var numVinkings = Math.floor(Math.random() * 25);
  var numSaxions = Math.floor(Math.random() * 25);
  addSoldiers(numVinkings,"Viking");
  addSoldiers(numSaxions,"Saxon");
}

function addSoldiers(num, type){
  for(var i = 0; i< num; i++){
    if(type === "Viking")
      war.addViking(generateSoldier(type));
    else if(type === "Saxon")
      war.addSaxon(generateSoldier(type));
  }
}

function generateSoldier(type) {
  var attackPower = Math.floor(Math.random() * 250);
  var livePower = Math.floor(Math.random() * 600);
  if(type === "Viking") {
    var nameOfVikings = ["Arne","Bjørn","Eirik","Geir","Gisle","Gunnar","Harald","Håkon","Inge","Ivar","Knut","Leif","Magnus","Olav","Rolf","Sigurd","Snorre","Steinar","Torstein"];
    var getName = nameOfVikings[Math.floor(Math.random() * nameOfVikings.length)];
    return new Viking(getName,livePower,attackPower);
  } else if(type === "Saxon")
      return new Saxon(livePower,attackPower);
}

function play() {
  generateArmy();
  console.log(war);
  while(war.vikingArmy.length !== 0 && war.saxonArmy.length !== 0) {
    var turn = Math.floor(Math.random() * 2);
    switch (turn) {
      case 0:
        war.vikingAttack()
        break;
      case 1:
        war.saxonAttack()
        break;
    }
    war.showStatus();
  }
}
