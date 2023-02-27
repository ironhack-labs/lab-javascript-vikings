// Soldier

class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking

class Viking extends Soldier{
    constructor (name, health, strength){
        super (health, strength)
        this.name = name
    }
    
    attack(){
        return this.strength;
    }
    
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0 ){
            return `${this.name} has received ${damage} points of damage`;
        }else {
            return `${this.name} has died in act of combat`;
        }
    }
    
    battleCry(){
        return `Odin Owns You All!`;
    }
}

// Saxon

class Saxon extends Soldier{
    attack(){
        return this.strength;
    }
    
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0 ){
            return `A Saxon has received ${damage} points of damage`;
        }else {
            return `A Saxon has died in combat`;
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
    attack(attacker, defender) {
      const attackStrength = attacker.attack();
      const defenseResult = defender.receiveDamage(attackStrength);
      if (defender.health <= 0) {
        const index = this[defender.constructor.name.toLowerCase() + "Army"].indexOf(defender);
        this[defender.constructor.name.toLowerCase() + "Army"].splice(index, 1);
      }
      return defenseResult;
    }

    vikingAttack() {
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];
        return this.attack(randomViking, randomSaxon);
    }
    saxonAttack() {
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];
        return this.attack(randomSaxon, randomViking);
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