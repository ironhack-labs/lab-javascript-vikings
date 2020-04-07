// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        if(damage){
            this.health -= damage;
        }
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
        // this.health = health;
        // this.strength = strength;
    }
    receiveDamage(damage){
        if(damage){
            this.health -= damage
            if(this.health > 0){
                return (`${this.name} has received ${damage} points of damage`)
            } else {
                return (`${this.name} has died in act of combat`)
            }
        }
    }
    battleCry(){
        return ("Odin Owns You All!")
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        if(damage){
            this.health -= damage;
            if(this.health > 0){
                return (`A Saxon has received ${damage} points of damage`);
            } else {
                return (`A Saxon has died in combat`);
            }
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(vikingObject){
        this.vikingArmy.push(vikingObject);
    }
    addSaxon(saxonObject){
        this.saxonArmy.push(saxonObject);
    }
    attack(soldierHit, soldierAttack){
        let soldierIndex = [Math.floor(Math.random() * soldierHit.length)];
        let soldierStrength = soldierAttack[Math.floor(Math.random() * soldierAttack.length)].strength;
        let result = soldierHit[soldierIndex].receiveDamage(soldierStrength)
        if (soldierHit[soldierIndex].health <= 0){
            soldierHit.splice(soldierIndex,1)
        }
        return result
    }
    vikingAttack(){
        return this.attack(this.saxonArmy, this.vikingArmy)
        // let saxonHit = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        // let vikingAttacking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength;
        // let result = saxonHit.receiveDamage(vikingAttacking)
        // if (saxonHit.health <= 0){
        //     this.saxonArmy.splice(saxonHit)
        // }
        // return result
    }
    saxonAttack(){
        return this.attack(this.vikingArmy, this.saxonArmy)
        // let vikingHit = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        // let saxonAttacking = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength;
        // let result = vikingHit.receiveDamage(saxonAttacking)
        // if (vikingHit.health <= 0){
        //     this.vikingArmy.splice(vikingHit)
        // }
        // return result
    }
    showStatus(){
        if(this.saxonArmy.length == 0){
            return ("Vikings have won the war of the century!");
        } else if(this.vikingArmy.length == 0){
            return ("Saxons have fought for their lives and survived another day...");
        } else {
            return ("Vikings and Saxons are still in the thick of battle.");
        }
    }
}
