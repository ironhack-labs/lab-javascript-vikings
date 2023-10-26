// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        this.attack = this.strength;
        return this.strength
    }
    receiveDamage(damage){
       this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
      super(health, strength); // invoke constuctor in the parent class
      this.name = name;
      
    }
    receiveDamage(amount) {
      super.receiveDamage(amount); // invoke the method receiveDamage() of the parent class
      if (this.health > 0) {
        return `${this.name} has received ${amount} points of damage`;
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
    receiveDamage(damage){
        super.receiveDamage(damage)
    if (this.health > 0){
        return `A Saxon has received ${damage} points of damage`
    } else {
        return "A Saxon has died in combat"
    }
    }
}

// War
class War {
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let result = randomSaxon.receiveDamage(randomViking.strength)
        if (randomSaxon.health <= 0){
            this.saxonArmy.splice(this.saxonArmy[randomSaxon]);
        }
        return result
    }
    saxonAttack(){
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let result = randomViking.receiveDamage(randomSaxon.strength)
        if (randomViking.health <= 0){
            this.vikingArmy.splice(this.vikingArmy[randomViking]);
        }
        return result 

    }
    // BONUS
    /*
    attacks(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let attackResult = defender.receiveDamage(attacker.strength)
        if (attacker === randomViking && randomSaxon.health <= 0){
            this.saxonArmy.splice(this.saxonArmy[randomSaxon]);
        } else {
            this.vikingArmy.splice(this.vikingArmy[randomViking]);
        }
    } */
    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
