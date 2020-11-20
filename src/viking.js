// Soldier
class Soldier {
    constructor(health,strength) {
        this.health = health;
        this.strength = strength;
    }
    
        attack(){
            return this.strength;
        }

        receiveDamage(damage){
            this.health = this.health - damage;
     
        }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super (health,strength)
        this.name = name;
    }
     attack () {
         return this.strength;
     } 

     receiveDamage (damage) {
        this.health = this.health - damage; 
            if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
            else {
            return `${this.name} has died in act of combat`;
        }
        
     }
     
     battleCry () {
         return "Odin Owns You All!"
     }
}

// Saxon
class Saxon extends Soldier {
    attack () {
        return this.strength
    }

    receiveDamage (damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return `A saxon has received ${damage} points of damage`;
        }
            else {
            return "A saxon has died in act of combat";
        }
    }
}

// War
class War extends Soldier  {
    constructor() {
        super (Soldier)
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingObject){
      this.vikingArmy.push(vikingObject);
    }

    addSaxon(saxonObject){

    }

    vikingAttack () {
        this.strength = this.health - damage;
    }

    saxonAttack () {

    }

    showStatus () {
        if (this.saxonArmy = []) {
            return "Vikings have won the war of the century"
        }
        
    }
}
