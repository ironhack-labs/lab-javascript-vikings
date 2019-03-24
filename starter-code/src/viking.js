/* eslint-disable no-unused-vars */
//Soldier
class Soldier{
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

//Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    
    receiveDamage(damage){
        this.health -= damage;   
        return  this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;    
    }    

    battleCry(){
        return 'Odin Owns You All!';
    }
}

//Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(damage){
        this.health -= damage;   
        return  this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;    
    }               
}

//War
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
        var Saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        var Viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        var attackMessage = Saxon.receiveDamage(Viking.strength);
        if(Saxon.health <= 0){
            this.saxonArmy.pop(Saxon);
        }
        return attackMessage;
    }
   
    saxonAttack(){
        var Saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        var Viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        var attackMessage = Viking.receiveDamage(Saxon.strength);
        if(Viking.health <= 0){
            this.vikingArmy.pop(Viking);
        }
        return attackMessage;
    }   
    
    showStatus(){
        return this.vikingArmy.length > 0 && this.saxonArmy.length > 0  
                        ? 'Vikings and Saxons are still in the thick of battle.' 
                        : this.vikingArmy.length === 0 ? 'Saxons have fought for their lives and survive another day...'
                                                       : 'Vikings have won the war of the century!';
    }
}

//Soldier
function soldier () {

}

//Viking
function viking () {}

//Saxon
function saxon () {}

//War
function war () {}