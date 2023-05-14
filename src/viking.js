// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage;
   
}
};


// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super('name');
        this.name = name; 
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength
    }


    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
            }
            else {
            return `${this.name} has died in act of combat`;
             }
      }; 
    

    battleCry() {
        return 'Odin Owns You All!'
    }
    
};


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super();
        this.health = health;
        this.strength = strength;
    }

    attack() {
          return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
            }
            else {
            return `A Saxon has died in combat`;
             }
      }; 

};

// War
class War {
    constructor() {
        this.saxonArmy = [];
        this.vikingArmy = [];
    };

    addViking(Soldier) {
        this.vikingArmy.push(Soldier);
    };

    addSaxon(Soldier) {
        this.saxonArmy.push(Soldier);
    };
    
    vikingAttack () {
        vikingAttack.forEach(function(element, index){

        });
    }

    saxonAttack () {
        saxonAttack.forEach(function(element, index){

        });
    }

    showStatus () {
        showStatus.forEach(function(element, index){

        });
    }
}

    



    





