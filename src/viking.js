// Soldier
class Soldier {
  constructor(h, s) {
    this.health = h;
    this.strength = s;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(n, h, s) {
    super(h, s);
    this.name = n;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(h, s) {
    super(h, s);
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
vikingArmy=[];
saxonArmy=[];
  addViking(newViking) {
    this.vikingArmy.push(newViking);
  }
  addSaxon(newSaxon) {
    this.saxonArmy.push(newSaxon);
  }
  vikingAttack() {
      let randomSaxonIndex =Math.floor(Math.random()*this.saxonArmy.length);
      let randomSaxon=this.saxonArmy[randomSaxonIndex];
      let randomVikingIndex=Math.floor(Math.random()*this.saxonArmy.length);
      let randomViking=this.vikingArmy[randomVikingIndex];
      let AttackResultViking= randomSaxon.receiveDamage(randomViking.strength);
      if (randomSaxon.health<=0) {
          this.saxonArmy.splice(randomSaxonIndex,1);
      }
      return AttackResultViking;
    }
  saxonAttack() {
    let randomSaxonIndex =Math.floor(Math.random()*this.saxonArmy.length);
    let randomSaxon=this.saxonArmy[randomSaxonIndex];
    let randomVikingIndex=Math.floor(Math.random()*this.saxonArmy.length);
    let randomViking=this.vikingArmy[randomVikingIndex];

    let AttackResultSaxon= randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health<=0) {
        this.vikingArmy.splice(randomVikingIndex,1);
    }
    return AttackResultSaxon;
  }
  showStatus() {
    if (this.saxonArmy.length===0){
        return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length===0){
        return `Saxons have fought for their lives and survived another day...`
    } else {
       return `Vikings and Saxons are still in the thick of battle.` 
    }
  }
}
