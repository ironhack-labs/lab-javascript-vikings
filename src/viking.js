// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
}
receiveDamage(theDamage){
this.health -= theDamage;
return;
}
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength)
    {super(health, strength);
    this.name = name
}
receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
        return `${this.name} has received ${theDamage} points of damage`;
    } else {
        return `${this.name} has died in act of combat`;
    }
}
battleCry() {
    return "Odin Owns You All!";
}
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
    attack() {
        return this.strength;
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        const randomSaxonIndex = math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = math.floor(Math.random() * this.vikingArmy.length);
        
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];
        
        const saxonDamage = randomViking.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        return saxonDamage;
    }
    saxonAttack() {
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];
    
        const vikingDamage = randomViking.receiveDamage(randomSaxon.strength);
    
        if (randomViking.health <= 0) {
          this.vikingArmy.splice(randomVikingIndex, 1);
        }
    
        return vikingDamage;
      }
      showStatus() {
        if (this.saxonArmy.length === 0) {
          return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
          return "Saxons have fought for their lives and survived another day...";
        } else {
          return "Vikings and Saxons are still in the thick of battle.";
        }
      }
}
