// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }
     attack(){
        return this.strength;
    }    
    receiveDamage(damage){
       this.health = this.health - damage;
       if (this.health <= 0);
       return undefined;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health <= 0) {
            return (`${this.name} has died in act of combat`);
        }
                return (`${this.name} has received ${damage} points of damage`);
    }
    battleCry(){
        return ('Odin Owns You All!');
    }
}



// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health <= 0) {
            return ('A Saxon has died in combat');
        }
        return (`A Saxon has received ${damage} points of damage`);
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(aViking){
        this.vikingArmy.push(aViking);
        return;
    }
     addSaxon(aSaxon) {
         this.saxonArmy.push(aSaxon);
         return;
     }
     vikingAttack (){
         let saxonArmyLength = this.saxonArmy.length;
         let vikingArmyLength = this.vikingArmy.length;
         let randomSaxon = this.saxonArmy[Math.round(Math.random()*saxonArmyLength)];
         let randomViking = this.vikingArmy[Math.round(Math.random()*vikingArmyLength)];

         randomSaxon.receiveDamage(randomViking.strength);
     }
    //  saxonAttack {}
    //  showStatus {}
}

