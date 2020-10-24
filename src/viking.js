// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }        

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
   }
}

class Viking extends Soldier {
    constructor(name ,health ,strength){
        super();    
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health >0){
            return `${this.name} has received ${damage} points of damage`;
        }else{
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}


class Saxon extends Soldier {

    receiveDamage(damage){
        this.health -= damage;
        if(this.health >0){
            return `A Saxon has received ${damage} points of damage`;
        }else{
            return `A Saxon has died in combat`;
        }
    }

}


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
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];
        if(randomSaxon.health - randomViking.strength <= 0){
            this.saxonArmy.splice(randomSaxonIndex,1);
        }
        return randomSaxon.receiveDamage(randomViking.attack());
    }
    
    saxonAttack(){
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];
        if(randomViking.health - randomSaxon.strength <= 0){
            this.vikingArmy.splice(randomVikingIndex,1);
        }
        return randomViking.receiveDamage(randomSaxon.attack());
    }


    genericAttack(armyAtt, armyDef){
        let randomIndexAtt = Math.floor(Math.random() * armyAtt.length);
        let randomIndexDef = Math.floor(Math.random() * armyDef.length);
        const randomAtt = armyAtt[randomIndexAtt];
        const randomDef = armyDef[randomIndexDef];
        if(randomDef.health - randomAtt.strength <= 0){
            armyDef.splice(randomIndexDef,1);
        }
        return randomDef.receiveDamage(randomAtt.attack());
    }
    
    showStatus(){
        if(this.vikingArmy.length <= 0){
            return "Saxons have fought for their lives and survived another day...";
        } else if(this.saxonArmy.length <= 0){
            return "Vikings have won the war of the century!";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }

    }
}

