// Soldier
function Soldier (health,strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  }
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
  }
}

// Viking
function Viking (name,health,strength) {
  Soldier.call(this,health,strength);
  this.name = name;
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0) { return name + " has received " + damage + " points of damage"; } else { return name + " has died in the act of combat"; }
  }
  this.battleCry = function () {
    return "Odin Owns You All!";
  }
}

// Saxon
function Saxon (health,strength) {
  Soldier.call(this,health,strength);
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0) { return "A Sax has received " + damage + " points of damage";
    } else { return "A Saxon has died in combat"; }
  }
}

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function(viking) {
    this.vikingArmy.push(viking);
  }
  this.addSaxon = function(saxon) {
    this.saxonArmy.push(saxon);
  }
  this.vikingAttack = function() {
    var randSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var randViking = Math.floor(Math.random() * this.vikingArmy.length);
    var saxonSoldier = this.saxonArmy[randSaxon];
    var vikingSoldier = this.vikingArmy[randViking];
    this.saxonArmy[randSaxon] = saxonSoldier;
    return saxonSoldier.receiveDamage(vikingSoldier.strength);

  }
  this.saxonAttack = function() {
    var randSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var randViking = Math.floor(Math.random() * this.vikingArmy.length);
    var saxonSoldier = this.saxonArmy[randSaxon];
    var vikingSoldier = this.vikingArmy[randViking];
    //var vikingStatus = vikingSoldier.receiveDamage(saxonSoldier.strength);
    this.vikingArmy[randViking] = vikingSoldier;
    return vikingSoldier.receiveDamage(saxonSoldier.strength);
  }
  this.showStatus = function() {
    this.saxonArmy = this.saxonArmy.filter(function(item) {
      return item.health > 0;
    })
    this.vikingArmy = this.vikingArmy.filter(function(item) {
      return item.health > 0;
    })

    if (this.vikingArmy.length === 0 && this.saxonArmy.length > 0) { return "Saxons have fought for their lives and survive another day..."; }
    else if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) { return "Vikings have won the war of the century!"; }
    else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) { return "Vikings and Saxons are still in the thick of battle.";
    } else { return "everybody is DEAD"}
  }
}


var Ragnarok = new Viking('Ragnarok',100,50);
var Laura = new Viking('Laura',80,40);
var JB = new Viking('JB',85,40);
var Javi = new Viking('Javi',30,80);
var Kora = new Viking('Kora',30,100);

var Cillian = new Saxon(75,60);
var Alex = new Saxon(100,50);
var Micaela = new Saxon(50,60);
var Camille = new Saxon(40,40);
var Carmen = new Saxon(100,100);

vikingArray = [Ragnarok,Laura,JB,Javi,Kora];
saxonArray = [Cillian,Alex,Micaela,Camille,Carmen];

var worldWarTres = new War();

vikingArray.forEach(function (item) {
  worldWarTres.addViking(item);
})

saxonArray.forEach(function (item) {
  worldWarTres.addSaxon(item);
})

fights = Math.floor(Math.random() * 100);

while (fights > 0) {
  chooser = Math.floor(Math.random() * 10);
  if (worldWarTres.saxonArmy === []) {
    console.log('hi');
    fights = 0;
  }
  if (chooser > 5) {
    worldWarTres.vikingAttack();
  } else { worldWarTres.saxonAttack(); }
  fights--;
}

console.log(worldWarTres.showStatus());
console.log("Saxon Army",worldWarTres.saxonArmy);
console.log("Viking Army",worldWarTres.vikingArmy);
