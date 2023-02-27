// Soldier
class Soldier {
    constructor (health, strength) {
        
        this.health = health;
        this.strength = strength;
    }

    attack() {
       return this.strength;
    }

    receiveDamage(damage) {
    this.health -= damage;
    } 
    }

// Viking
class Viking extends Soldier {
    constructor (name,health,strength){
        super (health,strength);
        this.name = name;
    }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
        return `${this.name} has died in act of combat`;
    } else if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
    }
  }
    battleCry() {
        return `Odin Owns You All!`;
    }
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super (health,strength);
        this.name = 'Saxon';
    }

receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
			return `A ${this.name} has died in combat`;
		} else if (this.health > 0) {
			return `A ${this.name} has received ${damage} points of damage`;
		}
        }
}

// War
class War {
    constructor() {    
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
        
    }
 addSaxon(saxon) {
 this.saxonArmy.push(saxon);
}

vikingAttack() {
let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
let result = randomSaxon.receiveDamage(randomViking.strength);

if (result === `A Saxon has died in combat`){
    this.saxonArmy.splice(randomSaxon,1);
}
return result;
}

saxonAttack() {

}

showStatus() {


    if (this.saxonArmy.length === 0 ) {
        return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0 ) {
        return "Saxons have fought for their lives and survive another day...";
      } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
        return "Vikings and Saxons are still in the thick of battle.";
      }
}

}
