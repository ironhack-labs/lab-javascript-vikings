
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


class Viking extends Soldier {
    constructor(name, health, strength){

        super(name, health, strength);

        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`;
        }else if(this.health <= 0){
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`;
        }else if(this.health <= 0){
            return `A Saxon has died in combat`;
        }
    }
}


class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(obj){
        this.vikingArmy.push(obj);
    }
    addSaxon(obj){
        this.saxonArmy.push(obj);
    }
    vikingAttack(){
        receiveDamage()
    }
    saxonAttack(){

    }
    showStatus(){

    }
}

 