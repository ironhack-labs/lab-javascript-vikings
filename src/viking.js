
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
       const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
       const randomViking = Math.floor(Math.random() * this.vikingArmy.length);

       const result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
       

       if(this.saxonArmy[randomSaxon].health <= 0){
             this.saxonArmy.splice(randomSaxon,1);
       }
        return result;
       
       
    }
    saxonAttack(){
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        const result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);

        if(this.vikingArmy[randomViking].health <= 0){
             this.vikingArmy.splice(randomViking,1);
        }
        return result;
    }
    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }else if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

 