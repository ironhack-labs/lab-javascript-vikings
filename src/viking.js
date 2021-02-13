// Soldier
class Soldier {
    constructor(health, strength){
        this.health= health;
        this.strength= strength;
    }
    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super (health, strength)
        this.name= name;
    }
    receiveDamage(damage){
        this.health -= damage

        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage

        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
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
      var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
      var saxonSoldier = this.saxonArmy[randomSaxon];
      var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
      var vikingSoldier = this.vikingArmy[randomViking];
      var result = saxonSoldier.receiveDamage(vikingSoldier.attack());
      if (saxonSoldier.health <= 0) {
        this.saxonArmy.splice(randomSaxon, 1);
      }
      return result;
    }
    saxonAttack() {
      var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
      var saxonSoldier = this.saxonArmy[randomSaxon];
      var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
      var vikingSoldier = this.vikingArmy[randomViking];
      var result = vikingSoldier.receiveDamage(saxonSoldier.attack());
      if (vikingSoldier.health <= 0) {
        this.vikingArmy.splice(randomViking, 1);
      }
      return result;
    }
showStatus() {
      if (this.saxonArmy.length === 0) {
        return `Vikings have won the war of the century!`;
      } else if (this.vikingArmy.length === 0) {
        return `Saxons have fought for their lives and survived another day...`;
      } else {
        return `Vikings and Saxons are still in the thick of battle.`;
      }
    }
    // SUPER BONUS
    attack(defendersArmy, attackersArmy) {
      let defender = defendersArmy[Math.floor(Math.random() * defendersArmy.length)];
      let attacker = attackersArmy[Math.floor(Math.random() * attackersArmy.length)];
      if(defender.health <= attacker.strength) {
        defendersArmy.splice(defendersArmy.indexOf(defender), 1);
      }
      return defender.receiveDamage(attacker.strength);
    }
    saxonAttacking() {
      return this.attack(this.vikingArmy, this.saxonArmy);
    }
    vikingAttacking() {
      return this.attack(this.saxonArmy, this.vikingArmy);
    }
}