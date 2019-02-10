'use strict'


class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
       return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

class Viking extends Soldier {
    constructor (name, health, strenght){
        super(health,strenght);
        this.name = name;
    }
    attack (){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage` //porque no me deja name sin ¡this! es un string, no?
        }else{
            return `${this.name} has died in act of combat` //idem
        }
    }
    battleCry(){
        return `Odin Owns You All!`
    }  
}

class Saxon extends Soldier{
    constructor (health, strenght){
        super(health, strenght)
    }

    //preguntar si volver a poner esto si jasmine me permite sin.
    
    attack(){
    return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage` 
        }else{
            return `A Saxon has died in combat` 
        }
    }
}


class War {
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        
    }

    // ni idea

    saxonAttack(){

    }

    // ni idea

    showStatus(){     //no debería fallar el if&else if ¿por qué?
        if (this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        }else if (this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survive another day...`
        }else{
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}
