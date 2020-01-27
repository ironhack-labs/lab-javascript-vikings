// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        super.receiveDamage(damage)
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }else{
            return `A Saxon has died in combat`
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
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    attack(attackers, defenders){
        const attackerIndex = Math.floor(Math.random() * attackers.length)
        const defenderIndex = Math.floor(Math.random() * defenders.length)
        const attacker = attackers[attackerIndex]
        const defender = defenders[defenderIndex]
        const result = defender.receiveDamage(attacker.strength)
        if (defender.health <=0) {
            defenders.splice(defenderIndex,1)
        }
        return result

    }
    vikingAttack(){
       return this.attack(this.vikingArmy, this.saxonArmy)
    }
    saxonAttack() {
        return this.attack(this.saxonArmy, this.vikingArmy)
    }
    showStatus() {
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        }else if(this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }else{
            return "Vikings and Saxons are still in the thick of battle."
        }

    }
    
}
for (let i = 0;i<10; i++) {
    saxonArmy.push(new Saxon)
}
// let aViking = new Viking("bob", 50, 50);
// let aSaxon = new Saxon(50, 50);

//console.log(aSaxon.receiveDamage(aViking.strength))