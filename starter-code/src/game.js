var war = new War();

//vikings
var viking1 = new Viking("oxid",300,150);
war.addViking(viking1);
var viking2 = new Viking("irydium",300,150);
war.addViking(viking2);
var viking3 = new Viking("odin",300,150);
war.addViking(viking3);
var viking4 = new Viking("ragnar",500,250);
war.addViking(viking4);
var viking5 = new Viking("locki",300,150);
war.addViking(viking5);

//saxons
var saxon1 = new Saxon(300,150);
war.addSaxon(saxon1);
var saxon2 = new Saxon(300,150);
war.addSaxon(saxon2);
var saxon3 = new Saxon(300,150);
war.addSaxon(saxon3);
var saxon4 = new Saxon(300,150);
war.addSaxon(saxon4);
var saxon5 = new Saxon(300,150);
war.addSaxon(saxon5);

function play() {
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
