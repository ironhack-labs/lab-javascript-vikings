// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack() { return this.strength }

  receiveDamage(damage) { this.health -= damage }

}


// Viking

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }

  receiveDamage(damage) { 
    this.health -= damage
    return (this.health <= 0) ? `${this.name} has died in act of combat` : `${this.name} has received ${damage} points of damage`
  }

  battleCry() {
    return `Odin Owns You All!`
  }


}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage
    return (this.health <= 0) ? `A Saxon has died in combat` : `A Saxon has received ${damage} points of damage`
  }

}

// War
class War {

  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(Viking) {
    this.vikingArmy = [...this.vikingArmy, Viking]
  }

  addSaxon(Saxon) {
    this.saxonArmy = [...this.saxonArmy, Saxon]
  }

  vikingAttack() {

    let randomAttacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomTarget = this.saxonArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let damage = randomTarget.receiveDamage(randomAttacker.strength);

    (randomTarget.health <= 0) && this.saxonArmy.splice([randomTarget],1)

    return damage

  }

  saxonAttack() {

    let randomAttacker = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomTarget = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let damage = randomTarget.receiveDamage(randomAttacker.strength);

    (randomTarget.health <= 0) && this.vikingArmy.splice([randomTarget],1)

    return damage
  }

  turn() {

  }
  
  showStatus() {
    if (this.saxonArmy.length === 0) { return `Vikings have won the war of the century!`}
    if (this.vikingArmy.length === 0) { return `Saxons have fought for their lives and survived another day...`}
    if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }

}



let test = new War();

test.addViking(new Viking('Viktor0', 100, 100));
test.addViking(new Viking('Viktor1', 100, 100));
test.addViking(new Viking('Viktor2', 100, 100));
test.addViking(new Viking('Viktor3', 100, 100));
test.addViking(new Viking('Viktor4', 100, 100));

test.addSaxon(new Saxon(100, 100))
test.addSaxon(new Saxon(100, 100))
test.addSaxon(new Saxon(100, 100))
test.addSaxon(new Saxon(100, 100))
test.addSaxon(new Saxon(100, 100))

test.vikingAttack();
test.vikingAttack();
test.vikingAttack();
test.vikingAttack();
test.saxonAttack();
test.saxonAttack();
test.saxonAttack();
test.saxonAttack();

console.log(test.showStatus());




