// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
       super(health,strength);
       this.name = name;
    }

    receiveDamage(damage){
       super.receiveDamage(damage)

       if(this.health<=0){
           return `${this.name} has died in act of combat`
       }else{
           return `${this.name} has received ${damage} points of damage`
       }
    }

    battleCry(){
        return `Odin Owns You All!`
    }

}

// Saxon
class Saxon extends Soldier{

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        super.receiveDamage(damage)

        if(this.health<=0){
            return `A Saxon has died in combat`
        }else{
            return `A Saxon has received ${damage} points of damage`
        }
    }

}

// War
class War {

    vikingArmy = [];
    saxonArmy = [];

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        
        let saxonRandom = this.saxonArmy[
            Math.floor(Math.random() * this.saxonArmy.length)
        ];

        let vikingRandom = this.vikingArmy[
            Math.floor(Math.random()* this.vikingArmy.length)
        ];

        let resultWar = saxonRandom.receiveDamage(vikingRandom.strength)

        if(saxonRandom.health<=0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxonRandom),1)
        }

        return resultWar
    }

    saxonAttack(){

        let saxonRandom = this.saxonArmy[
            Math.floor(Math.random() * this.saxonArmy.length)
        ];

        let vikingRandom = this.vikingArmy[
            Math.floor(Math.random() * this.vikingArmy.length)
        ]; 

        let resultWar = vikingRandom.receiveDamage(saxonRandom.strength)

        if(vikingRandom.health<=0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(vikingRandom),1)
        }
        return resultWar
    }

    showStatus(){

        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        }else if (this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        }else {
            return `Vikings and Saxons are still in the thick of battle.` 
           }
       }
}
