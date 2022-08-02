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
      this.saxonArmy.pop(randomSaxon);
    return (outcome);
  }
  saxonAttack() {
    let randomViking = selectRandom(this.vikingArmy);
    let randomSaxon = selectRandom(this.saxonArmy);
    let outcome = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0)
      this.vikingArmy.pop(randomViking);
    return (outcome);
  }
  showStatus() {}

}

let me = new Soldier(99, 99);
let you1 = new Viking('poop', 20, 2);
let you2 = new Viking('poop', 20, 2);
let you3 = new Viking('poop', 20, 2);
let ew1 = new Saxon(2, 1);
let ew2 = new Saxon(2, 1);
let ew3 = new Saxon(2, 1);
let ew4 = new Saxon(2, 1);


let ouch = new War();
ouch.addSaxon(ew3);
ouch.addSaxon(ew1);
ouch.addSaxon(ew2);
ouch.addViking(you1);
ouch.addViking(you2);
ouch.addViking(you3);
console.log(ouch.vikingAttack());
console.log(ouch.saxonAttack());
