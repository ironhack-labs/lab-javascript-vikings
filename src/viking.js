// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength;
    }

    attack () {
        return this.strength;

    }
    receiveDamage (theDamage) {
        this.health -= theDamage;
        this.damage = theDamage;

    }
}

// Viking
class Viking extends Soldier{
    constructor (name,health,strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage (theDamage) {
      this.damage = theDamage
       if ( this.health -= theDamage) {
        return `${this.name} has received ${this.damage} points of damage`;
    }
    else {
        return `${this.name} has died in act of combat`;
    }
  }

    battleCry() {
        return `Odin Owns You All!`;
    }

  }
// Saxon
class Saxon extends Soldier {

    constructor (health,strength) {
        super(health, strength);
    }
    
    receiveDamage (theDamage) {
        this.damage = theDamage;
         if (this.health -= theDamage) {
          return `A Saxon has received ${this.damage} points of damage`;
      }
        else {
          return `A Saxon has died in combat`;
      }
}
}

// War
class War {}
