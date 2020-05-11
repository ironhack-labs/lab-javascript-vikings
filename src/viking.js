// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.strength -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    battleCry(){
        return "Odin Owns You All!";
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        else{
            return `${this.name} has died in act of combat`
        }
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength)
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return "A Saxon has died in combat";
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        return this.genericAttack(this.vikingArmy, this.saxonArmy);
    }
    saxonAttack(){
        return this.genericAttack(this.saxonArmy, this.vikingArmy);
    }
    genericAttack(attackerArmy, defenderArmy){
        const randomAttackerIndex = Math.floor(Math.random() * attackerArmy.length);
        let attacker = attackerArmy[randomAttackerIndex];
        const randomDefenderIndex = Math.floor(Math.random()*defenderArmy.length);
        let defender = defenderArmy[randomDefenderIndex];
        const result = defender.receiveDamage(attacker.strength);
        if(defender.health <= 0){
            defenderArmy.splice(randomDefenderIndex,1);
        }
        return result

    }
    showStatus(){
        if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }
        else if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }
        else{
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
