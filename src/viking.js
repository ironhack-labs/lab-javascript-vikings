// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
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
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name; 
    }
    battleCry() { 
        return 'Odin Owns You All!' 
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health >0) return this.name + ' has received ' + damage + ' points of damage';
        if (this.health <=0) return this.name + ' has died in act of combat';
    }
}

// Saxon
class Saxon extends Soldier {

receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health >0) return 'A Saxon has received ' + damage + ' points of damage';
    if (this.health <=0) return 'A Saxon has died in combat';
}
}


// War
class War {
    constructor () {
    this.vikingArmy = [];
    this.saxonArmy  = [];
    }
    

   addViking(viking) {
      this.vikingArmy.push(viking); 
   }

addSaxon(saxon) {
    this.saxonArmy.push(saxon);
}

vikingAttack() {
    const randomSaxnum = Math.floor (Math.random *  this.saxonArmy.length);
    const randomViknum = Math.floor (Math.random *  this.vikingArmy.length);
    this.saxonArmy[randomSaxnum].receiveDamage(this.vikingArmy[randomViknum].health);
}
 

saxonAttack() {
const randomSaxnum = Math.floor (Math.random *  this.saxonArmy.length);
const randomViknum = Math.floor (Math.random *  this.vikingArmy.length);
this.vikingArmy[randomViknum].receiveDamage(this.saxonArmy[randomSaxnum].health);
}

showStatus() {
if (!saxonArmy) return "Vikings have won the war of the century!"
if (!this.vikingArmy)  return "Saxons have fought for their lives and survived another day..."
return "Vikings and Saxons are still in the thick of battle."
}

}


