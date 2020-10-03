// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(dmg){
        this.health -= dmg
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(dmg){
        this.health -= dmg;
        return this.health > 0 ? `${this.name} has received ${dmg} points of damage` : `${this.name} has died in act of combat`
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(dmg){
        this.health -= dmg;
        return this.health > 0 ? `A Saxon has received ${dmg} points of damage` : `A Saxon has died in combat`
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    addViking(vObj){
        this.vikingArmy.push(vObj)
    }
    addSaxon(sObj){
        this.saxonArmy.push(sObj)       
    }
    // vikingAttack(){
    //     this.soldierAttack(this.saxonArmy, this.vikingArmy)
    // }
    // saxonAttack(){
    //     this.soldierAttack(this.vikingArmy, this.saxonArmy)
    // }
    vikingAttack(){
        let damage = this.vikingArmy[this.getRandomInt(this.vikingArmy.length)].attack();
        let randSax = this.getRandomInt(this.saxonArmy.length)
        let result =  this.saxonArmy[randSax].receiveDamage(damage)
        this.saxonArmy = this.saxonArmy.filter(soldier=>soldier.health > 0)
        return result
    }
    saxonAttack(){
        let damage = this.saxonArmy[this.getRandomInt(this.saxonArmy.length)].attack();
        let randVik = this.getRandomInt(this.vikingArmy.length)
        let result =  this.vikingArmy[randVik].receiveDamage(damage)
        this.vikingArmy = this.vikingArmy.filter(soldier=>soldier.health > 0)
        return result
    }

    // soldierAttack(attacker, defender){
    //     let damage = attacker[this.getRandomInt(attacker.length)].attack();
    //     let randDef = this.getRandomInt(defender.length)
    //     let result =  defender[randDef].receiveDamage(damage)
    //     defender === this.saxonArmy? this.saxonArmy = defender.filter(soldier=>soldier.health > 0) : this.vikingArmy = defender.filter(soldier=>soldier.health > 0)
    //     console.log('atacker', defender)
    //     return result
    // }

    showStatus(){
        return this.saxonArmy.length && this.vikingArmy.length ? "Vikings and Saxons are still in the thick of battle." : this.vikingArmy.length ? "Vikings have won the war of the century!" : "Saxons have fought for their lives and survived another day..."
    }
}
