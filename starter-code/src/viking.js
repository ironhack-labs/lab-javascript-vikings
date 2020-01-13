// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };

    attack() {
       return this.strength;
    };

    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
    };
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        this.name = name;
        super(health, strength);
    };

    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
        if (this.health > 0){
            return `${this.name} has received ${theDamage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
        
    }; 

    battleCry () {
        return "Odin Owns You All!!!"
    };
}

// Saxon
class Saxon extends Soldier{

    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
        if (this.health > 0) {
            return `A saxon has received ${theDamage} points of damage`;
        }
        else {
            return `A saxon has died in act of combat`;
        };
    };
}


// War
class War {

    //Add soldier in their Armies

    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    };

    addViking(viking) {
        this.vikingArmy.push(viking);
    };

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    };

    //Class attack of Vikings and Saxons

    vikingAttack(){
        let saxon = this.saxonArmy[Math.round(Math.random() * this.saxonArmy.length)]
        let viking = this.vikingArmy[Math.round(Math.random() * this.vikingArmy.length)]
        const result = saxon.receiveDamage(viking.strength)
        if (saxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1)
        }
        return result
    };

    saxonAttack(){
        let saxon = this.saxonArmy[Math.round(Math.random() * this.saxonArmy.length)]
        let viking = this.vikingArmy[Math.round(Math.random() * this.vikingArmy.length)]
        const result = viking.receiveDamage(saxon.strength)
        if (viking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1)
        }
        return result
    };

    //Show the status of the battle

    showStatus(){
        if (this.saxonArmy.length == 0){
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length == 0){
            return "Saxons have fought for their lives and survived another day..."
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
