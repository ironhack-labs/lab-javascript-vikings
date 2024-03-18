// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health ;
        this.strength = strength ;
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
    constructor(name,health, strength){
        super(health,strength);
        this.name = name;
    }
    
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return `Odin Owns You All!`
    }


}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        if (viking instanceof Viking) {
            this.vikingArmy.push(viking);
          } else {
            console.log("Only Viking instances can be added to the army.");
          }
        } 
    

    addSaxon(saxon){
        if (saxon instanceof Saxon) {
            this.saxonArmy.push(saxon);
          } else {
            console.log("Only Viking instances can be added to the army.");
          }
    }

    vikingAttack(){
        // Need to store hte index for using it later to remove if the HP reaches 0
        const saxonIndex = Math.floor(this.saxonArmy.length * Math.random());
        const vikingIndex = Math.floor(this.vikingArmy.length * Math.random());
        
        const choosenSaxon = this.saxonArmy[saxonIndex];
        const choosenViking = this.vikingArmy[vikingIndex];

        const damageResult = choosenSaxon.receiveDamage(choosenViking.strength);
        if (choosenSaxon.health <= 0){
            this.saxonArmy.splice(saxonIndex, 1);
        }
        return damageResult
    }

    saxonAttack(){
        const saxonIndex = Math.floor(this.saxonArmy.length * Math.random());
        const vikingIndex = Math.floor(this.vikingArmy.length * Math.random());
        
        const choosenSaxon = this.saxonArmy[saxonIndex];
        const choosenViking = this.vikingArmy[vikingIndex];

        const damageResult = choosenViking.receiveDamage(choosenSaxon.strength);
        if (choosenViking.health <= 0){
            this.vikingArmy.splice(vikingIndex, 1);
        }
        return damageResult
    

    }

    showStatus(){
        if (this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        }
        else if (this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        }
        else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}
