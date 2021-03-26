// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {          
            return `${this.name} has received ${damage} points of damage`
        } else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}
// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}
// War
class War {
    vikingArmy = [ ]
    saxonArmy = [ ]
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        let indexViking = Math.floor(Math.random()*this.vikingArmy.length);
        let objViking = this.vikingArmy[indexViking];
        let indexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        let objSaxon = this.saxonArmy[indexSaxon];

        let damSaxon = objSaxon.receiveDamage(objViking.strength);
        if (objSaxon.health <= 0){
            this.saxonArmy.splice(indexSaxon, 1);
        } 
       return damSaxon;
    }
    saxonAttack() { debugger
        let indexViking = Math.floor(Math.random()*this.vikingArmy.length);
        let objViking = this.vikingArmy[indexViking];
        let indexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        let objSaxon = this.saxonArmy[indexSaxon];

        let damViking = objViking.receiveDamage(objSaxon.strength);
        if (objViking.health <= 0){
            this.vikingArmy.splice(indexViking, 1);
        } 
       return damViking;
    }
    showStatus() {
       if(this.saxonArmy.length === 0){
           return 'Vikings have won the war of the century!';
       }
       else if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...'
        }
        else{
           return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}