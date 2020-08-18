// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health-=damage;
  }

}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health-=damage;
    if(this.health > 0) return `${this.name} has received ${damage} points of damage`;
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health-=damage;
    if(this.health > 0) return `A Saxon has received ${damage} points of damage`;
    return `A Saxon has died in combat`;
  }

}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  doAttack(attackers,victoms) {
    const randomVictom = Math.floor(Math.random() * victoms.length);
    const randomAttacker = Math.floor(Math.random() * attackers.length);

    const res = victoms[randomVictom].receiveDamage(
      attackers[randomAttacker].attack()
    );
    if(victoms[randomVictom].health <= 0) victoms.splice(randomVictom,1);

    return res;
  }

  vikingAttack() {
    return this.doAttack(this.vikingArmy,this.saxonArmy);
  }

  saxonAttack() {
    return this.doAttack(this.saxonArmy, this.vikingArmy);
  }

  showStatus() {
    if(this.saxonArmy.length === 0) return `Vikings have won the war of the century!`;
    if(this.vikingArmy.length === 0) return `Saxons have fought for their lives and survived another day...`;
    return `Vikings and Saxons are still in the thick of battle.`;
  }

}
