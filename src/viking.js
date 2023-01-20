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
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        super(health, strength);
        this.name = name;
    }
    
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else return `${this.name} has died in act of combat`;
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor() {
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
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let attackResult = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength);
        if (this.saxonArmy[saxonIndex].health <= 0) {
            this.saxonArmy.pop(saxonIndex)
        };
        return attackResult;
    /*     if (this.saxonArmy[saxonIndex].health <= 0) {
            this.saxonArmy.slice(saxonIndex, 1)
        };
        return this.saxonArmy[sanxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength); */

        /* this.saxonArmy.forEach(function(element) {
            if (element.health <= 0)
        }); */
    
        //this.saxonArmy[Math.floor(Math.random.(this.saxonArmy.length))].health -= this.vikingArmy[Math.floor(Math.random.(this.vikingArmy.length))].strength;
       /*  if (this.saxonArmy[Math.floor(Math.random.(this.saxonArmy.length))].health =< 0) {
            
        } */
    }
    saxonAttack(){
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let attackResult = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].strength);
        if (this.vikingArmy[vikingIndex].health <= 0) {
            this.vikingArmy.pop(vikingIndex)
        };
        return attackResult;
    }
    showStatus(){
        if (!this.saxonArmy.length) return "Vikings have won the war of the century!";
        else if (!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day...";
        else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) return "Vikings and Saxons are still in the thick of battle.";
    }
}
