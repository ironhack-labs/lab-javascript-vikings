// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    } attack() {
        return this.strength
    } receiveDamage(theDamage){
        this.health -= theDamage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        this.name = name;
        super(health, strength)
    } receiveDamage(theDamage){
        this.health -= theDamage;
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }    
    } battleCry(){
        return  "Odin Owns You All!"
    }
}

// Saxon

class Saxon extends Soldier {
       receiveDamage(theDamage){
        this.health -= theDamage
        if(this.health > 0){
            return `A Saxon has received ${theDamage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const saxon = this.saxonArmy[saxonIndex];
        const viking = this.vikingArmy[vikingIndex];
        const message = saxon.receiveDamage(viking.strength);
        if (saxon.health < 1) {
            this.saxonArmy.splice(saxonIndex, 1)
        } 
        return message;
    }
    saxonAttack(){
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const saxon = this.saxonArmy[saxonIndex];
        const viking = this.vikingArmy[vikingIndex];
        const message = saxon.receiveDamage(viking.strength);
        if (viking.health < 1) {
            this.saxonArmy.splice(vikingIndex, 1)
        } 
        return message;
    }
    showStatus(){
    
    }

}//end war




// const viking1 = new Viking ('Timmy, 10, 5');
// const war1 = new War();
// war1.addViking(viking1);
// console.log(war1.vikingArmy);