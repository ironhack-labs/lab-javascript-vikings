// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health ;
        this.strength = strength ;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health, strength){
        super(health,strength);
        this.name = name;
    }
    
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return `Odin Owns You All!`
    }


}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        else {
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
        if (viking instanceof Viking) {
            this.vikingArmy.push(viking);
          } else {
            console.log("Only Viking instances can be added to the army.");
          }
        } 
    

    addSaxon(saxon){
        if (saxon instanceof Saxon) {
            this.saxonArmy.push(saxon);
          } else {
            console.log("Only Viking instances can be added to the army.");
          }
    }
    genericAttack(attackingArmy, defendingArmy) {
        const attackerIndex = Math.floor(attackingArmy.length * Math.random());
        const defenderIndex = Math.floor(defendingArmy.length * Math.random());
        
        const attacker = attackingArmy[attackerIndex];
        const defender = defendingArmy[defenderIndex];

        const damageResult = defender.receiveDamage(attacker.strength);
        
        if (defender.health <= 0) {
            defendingArmy.splice(defenderIndex, 1);
        }
        
        return damageResult;
    }

    vikingAttack() {
        return this.genericAttack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack() {
        return this.genericAttack(this.saxonArmy, this.vikingArmy);
    }
    showStatus(){
        if (this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        }
        else if (this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        }
        else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}
