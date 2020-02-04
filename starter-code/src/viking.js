// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    };
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health-damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super (name, health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage){
        this.health = this.health-damage;
        if(this.health>0){
            return (`${this.name} has received ${damage} points of damage`); 
        }else{
            return (`${this.name} has died in act of combat`);
        }
    }

    battleCry(){
        return (`Odin Owns You All!`);
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health = this.health-damage;
        if(this.health>0){
            return (`A Saxon has received ${damage} points of damage`); 
        }else{
            return (`A Saxon has died in combat`);
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
    let viking2 = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let saxon2 = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];  
    return saxon2.receiveDamage(viking2.strength);
    if(this.saxon2.health<=0){
        for (let i=0; i<this.saxonArmy.length; i++){
            if (this.saxonArmy[i]===this.saxon2){
            this.saxonArmy.splice(i,1);
            }
        }
    }
}

saxonAttack(){
    let viking2 = this.vikingArmy[Math.floor((Math.random()*this.vikingArmy.length))];
    let saxon2 = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    return viking2.receiveDamage(saxon2.strength);
    if(this.viking2.health<=0){
        for (let i=0; i<this.vikingArmy.length; i++){
            if (this.vikingArmy[i]===this.viking2){
            this.vikingArmy.splice(i,1);
            }
        }
    }
}

showStatus(){

}

}
