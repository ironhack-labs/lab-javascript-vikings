// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health
        this.strength = strength
    }
    attack(){

        return this.strength
    }
    receiveDamage(dmg){

        this.health = this.health -dmg      
    }
}

// Viking
class Viking extends Soldier {

    constructor(name,health,strength){
        super(health,strength)
        this.name = name;
    }
    receiveDamage(dmg){
        this.health = this.health -dmg 
        if(this.health > 0){
            return `${this.name} has received ${dmg} points of damage`;
        }else{
            return `${this.name} has died in act of combat`
        }     
    }
    battleCry(){
        return `Odin Owns You All!`
    }
    
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength){
        super(health,strength)
    }   
    receiveDamage(dmg){
        this.health = this.health -dmg 
        if(this.health > 0){
            return `A Saxon has received ${dmg} points of damage`;
        }else{
            return `A Saxon has died in combat`
        }   
}
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(vikObj){
        this.vikingArmy.push(vikObj);
    }
    addSaxon(saxObj){
        this.saxonArmy.push(saxObj);
    }
    vikingAttack(){
        let saxObj = this.saxonArmy[Math.floor(Math.random * this.saxonArmy.length)];
        let vikObj = this.vikingArmy[Math.floor(Math.random * this.vikingArmy.length)];
        let attack = vikObj.receiveDamage(saxObj.attack());
        if(saxObj.health <= 0){
            this.vikingArmy.splice(vikObj, 1);
          }
        return attack;
          }
}
