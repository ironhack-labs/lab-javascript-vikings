// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack () {
       return this.strength;
    }
    receiveDamage (theDamage){
         this.health -= theDamage;
             
    }   
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(theDamage){
        
        this.health -= theDamage;
        if (this.health > 0){
            return `${this.name} has received ${theDamage} points of damage`;
        }
        else ( this.health <= 0)
            return `${this.name} has died in act of combat`; 
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
    
    receiveDamage(theDamage){
       

        this.health -= theDamage;
        if (this.health > 0){ 
        return `A Saxon has received ${theDamage} points of damage`;
        }
        else (this.health <= 0) 
        return `A Saxon has died in combat`;  
    }

}
// aqui me dui errores el jasmin .
/*
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
        const randomSaxon = this.saxonArmy [Math.floor](Math.random()) * this.saxonArmy.length;
        const randomViking = this.vikingArmy [Math.floor](Math.random()) * this.vikingArmy.length;
        
        const result = randomSaxon.receiveDamage(randomViking.attack());
        
        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
        
        return result;
    }
    saxonAttack(){
        const randomViking = getRandomElement (this.vikingArmy);
        const randomSaxon = getRandomElement (this.saxonArmy);
        
        const result = randomViking.receiveDamage(randomSaxon.attack());
        
        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
        
        return result;
    }
    showStatus(){
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!';
        }else if (this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...';
        }else {
            return 'Viking and Saxons are still in the thick of battle.';
        }
    }

}*/

