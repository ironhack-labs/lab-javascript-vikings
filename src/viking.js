function selectRandom(array){
  let rand = Math.floor(Math.random() * array.length);
  return(array[rand]);
}


// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() { return (this.strength); }
  receiveDamage(damage) { this.health -= damage; }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    return (this.health > 0 ? `${this.name} has received ${damage} points of damage`
	    : `${this.name} has died in act of combat`);
  }
  battleCry() { return ('Odin Owns You All!'); }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return (this.health > 0 ? `A Saxon has received ${damage} points of damage`
	    : `A Saxon has died in combat`);
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(viking) { this.vikingArmy.push(viking); }
  addSaxon(saxon) { this.saxonArmy.push(saxon); }
  vikingAttack() {
    let randomSaxon = selectRandom(this.saxonArmy);
    let randomViking = selectRandom(this.vikingArmy);
    let outcome = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0)
      this.saxonArmy.splice(randomSaxon);
    return (outcome);
  }
  saxonAttack() {
    let randomViking = selectRandom(this.vikingArmy);
    let randomSaxon = selectRandom(this.saxonArmy);
    let outcome = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0)
      this.vikingArmy.splice(randomViking);
    return (outcome);
  }
  showStatus() {
    if (this.saxonArmy.length === 0)
      return ('Vikings have won the war of the century!');
    else if (this.vikingArmy.length === 0)
      return ('Saxons have fought for their lives and survived another day...');
    else
      return ('Vikings and Saxons are still in the thick of battle.');
  }

}


let viking1 = new Viking('Ingrid', 23, 2);
let viking2 = new Viking('Helga', 20, 4);
let viking3 = new Viking('Sigrid', 22, 3);
let saxon1 = new Saxon(3, 1);
let saxon2 = new Saxon(3, 2);
let saxon3 = new Saxon(30, 1);
let saxon4 = new Saxon(31, 1);


let ouch = new War();
ouch.addSaxon(saxon1);
ouch.addSaxon(saxon2);
ouch.addViking(viking1);
ouch.addViking(viking2);
ouch.addViking(viking3);
console.log(ouch.vikingAttack(), ouch.showStatus(), ouch.saxonArmy);
console.log(ouch.vikingAttack(), ouch.showStatus(), ouch.saxonArmy);
console.log(ouch.vikingAttack(), ouch.showStatus(), ouch.saxonArmy);
console.log(ouch.vikingAttack(), ouch.showStatus(), ouch.saxonArmy);
console.log(ouch.vikingAttack(), ouch.showStatus(), ouch.saxonArmy);
