//Iteration 0: First test

// Soldier
class Soldier {
    constructor(health, strength) {
        this.strength = strength;
        this.health = health;
 }

 attack(){
    return this.strength;
 }

 receiveDamage(damage){
   this.health -= damage;
 }
  }

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
    this.name = name;
    }

    receiveDamage(damage){
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return `Odin Owns You All!`; 
    }




}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength, name){
        super(health, strength)
    this.name = name;
    }

    receiveDamage(damage){
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }
}


// War
class War extends Soldier {

    vikingArmy = [];
    saxonArmy = [];
  
    addViking(vikingObject) {
      this.vikingArmy.push(vikingObject);
    }

    addSaxon (saxonObject) {
        this.saxonArmy.push(saxonObject);
      }
//Armies Attack

    vikingAttack() {
        


	}

    saxonAttack() {
  


	}

    showStatus() {

    }



}