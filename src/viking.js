// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
       return this.strength; 
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage; 
        if (this.health>0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
    }
    receiveDamage(damage){
        this.health -= damage; 
        if (this.health>0){
            return `A Saxon has received ${damage} points of damage`
        } else {
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
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        const idSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const idViking = Math.floor(Math.random() * this.vikingArmy.length);
    
        const saxonRandom = this.saxonArmy[idSaxon];
        const vikingRandom = this.saxonArmy[idViking];
        
        const resultF = saxonRandom.receiveDamage(vikingRandom.strength)
        
        if (saxonRandom.health <0){
            this.saxonArmy.splice(idSaxon,1);
        }
        return resultF
    }
    saxonAttack(){
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        
        const saxon = this.saxonArmy[randomSaxon];
        const viking = this.saxonArmy[randomViking];
        
        const damagedViking = viking.receiveDamage(saxon.strenght)
        
        this.vikingArmy.splice(viking,1)

        return damagedViking
    }
    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length ===0){
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }	
    }		
}   


