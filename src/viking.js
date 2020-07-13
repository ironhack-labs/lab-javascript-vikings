// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damagetaken){
        this.health-=damagetaken
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        super (health, strength);
        this.name = name;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damagetaken){
        this.health-=damagetaken;
        if (this.health >0){return `${this.name} has received ${damagetaken} points of damage`}
        else if (this.health<=0){return `${this.name} has died in act of combat`}
    }
    battleCry(){
        return (`Odin Owns You All!`)
    }
}

// Saxon
class Saxon extends Soldier{
    constructor (health, damage){
        super (health, damage);
    }
    receiveDamage(damagetaken){
        this.health-=damagetaken;
        if (this.health >0){return `A Saxon has received ${damagetaken} points of damage`}
        else if (this.health<=0){return `A Saxon has died in combat`}
    }
}

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let damagedSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        let attackingViking = Math.floor(Math.random()*this.vikingArmy.length)
        let result = this.saxonArmy[damagedSaxon].receiveDamage(this.vikingArmy[attackingViking].attack())
        if (this.saxonArmy[damagedSaxon].health <=0){
            this.saxonArmy.splice(damagedSaxon,1);}
        return result;
    }

    saxonAttack(){
        let damagedViking = Math.floor(Math.random()*this.vikingArmy.length)
        let attackingSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        let result = this.vikingArmy[damagedViking].receiveDamage(this.saxonArmy[attackingSaxon].attack())
        if (this.vikingArmy[damagedViking].health <=0){
            this.vikingArmy.splice(damagedViking,1);}
        return result;
    }

    Attack (turn){
        let defender, attacker;
        if (turn =='Saxons'){
            defender = this.vikingArmy;
            attacker = this.saxonArmy;
        }
        else if (turn == 'Vikings'){
            defender = this.saxonArmy;
            attacker = this.vikingArmy;
        }
        else {console.log (`Please choose between Saxons and Vikings`)}

        let damagedUnit = Math.floor(Math.random()*defender.length)
        let attackingUnit = Math.floor(Math.random()*attacker.length)
        let result = defender[damagedUnit].receiveDamage(attacker[attackingUnit].attack());
        
        if (defender[damagedUnit].health <=0){
            defender.splice(damagedUnit,1);}
        return result;
    }

    showStatus(){
        if (this.saxonArmy.length >0 && this.vikingArmy.length>0){return `Vikings and Saxons are still in the thick of battle.`}
        if (this.saxonArmy.length == 0){return `Vikings have won the war of the century!`;}
        if (this.vikingArmy == 0){return  `Saxons have fought for their lives and survived another day...`}

    }


}
