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
    constructor(name, health, strength){
        super(name, health, strength);
        this.name= name;
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
            if (this.health <= 0) {
                return `${this.name} has died in act of combat`; 
            } else {
        return `${this.name} has received ${damage} points of damage`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
        this.health= health;
        this.strength= strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health <= 0) {
            return "A Saxon has died in combat"; 
        } else {
        return `A Saxon has received ${damage} points of damage`;
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }

    addViking(Viking) {
        // this.vikingArmy +=;
    }

    addSaxon(Saxon) {

    }

    vikingAttack() {
        let attackedSaxon = Math.floor(Math.random(this.saxonArmy));
        receiveDamage(damage) 
    }

}

    
































class Player {
    // The constructor is the method triggered with the `new` keyword
    constructor(name, color) {
      this.name = name;
      this.color = color;
      this.position = 0;
      this.cash = 1000;
    }
  
    // Method move
    move() {
      let dice = 1 + Math.floor(6 * Math.random());
      this.position = (this.position + dice) % squares.length;
      this.cash += squares[this.position];
      if (this.cash < 0) {
        console.log(`Game over for ${this.name}.`);
      }
    }

      // Method displayInfo
  displayInfo() {
    console.log(
      `${this.name} is at position ${this.position} and has ${this.cash}€`
    );
  }
}