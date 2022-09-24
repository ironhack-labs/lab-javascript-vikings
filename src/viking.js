// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength
    }

    attack = ()=>{
        return this.strength
    }

    receiveDamage = (damage)=>{
        this.health = (this.health - damage)

    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health,strength);
        this.name = name;
    }
    battleCry = ()=>{
        return `Odin Owns You All!`
        
    }
    receiveDamage = (damage)=>{
        this.health = this.health - damage;
        let dead = 0;

        if(this.health <= dead){
            return `"${this.name} has died in act of combat"`
        }else {
            return `"${this.name} has received ${this.damage} points of damage"`
        }
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength,){
        super(health,strength);
    }
    receiveDamage = (damage)=>{
        this.health = (this.health - damage)
        let dead = 0

        if(this.health <= dead){
            return `"A Saxon has died in combat"`
        }else {
            return `"A Saxon has received ${this.damage} points of damage"`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = []; 
    }
    addViking = (Viking) => {this.vikingArmy.push(Viking)};
    addSaxon = (Saxon) => {this.saxonArmy.push(Saxon)};
    vikingAttack = () => {
        // cantidad de vikingos
        let saxonArmyQty = this.saxonArmy.length

        // selecciona vikingo random
        let floatNumRandom = Math.random() * saxonArmyQty
        let intNumRandom = floatNumRandom.Math.floor(floatNumRandom)

        let attackSoldier = this.saxonArmy[intNumRandom].receiveDamage(this.vikingArmy[intNumRandom].strength());
       
        if (this.saxonArmy[intNumRandom].health <= 0){
            this.saxonArmy.splice(intNumRandom, 1)
        } return attackSoldier;
    }
    saxonAttack = () => {
        // cantidad de saxon
        let vikingArmyQty = this.vikingArmy.length

        // selecciona saxon random
        let floatNumRandom = Math.random() * vikingArmyQty
        let intNumRandom = floatNumRandom.Math.floor(floatNumRandom)

        let attackSoldier = this.vikingArmy[intNumRandom].receiveDamage(this.saxonArmy[intNumRandom].strength());
    
        if (this.vikingArmy[intNumRandom].health <= 0){
            this.vikingArmy.splice(intNumRandom, 1)
        } return attackSoldier;
    }
    
    showStatus = () => {
        let vikingsWins = `"Vikings have won the war of the century!"`;
        let saxonsWins = `"Saxons have fought for their lives and survived another day..."`;
        let equalStatus = `"Vikings and Saxons are still in the thick of battle."`;
        
        if( this.saxonArmy.length > 0 || this.vikingArmy.length > 0 ){
            return equalStatus
        }else if ( this.vikingArmy.length === 0){
            return saxonsWins
        }else if ( this.saxonArmy.length === 0){
            return vikingsWins
        }
        
    }
}
