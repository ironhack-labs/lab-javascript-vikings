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
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    attack(attackerArmy, victimArmy){
        const victim = victimArmy[Math.floor(Math.random()*victimArmy.length)]
        const attacker = attackerArmy[Math.floor(Math.random()*attackerArmy.length)].strength;
        const result = victim.receiveDamage(attacker);
        if(victim.health <= 0) {
            victimArmy.splice(victimArmy.indexOf(victim), 1);
        }
        return result;
        }
        
        
    

    vikingAttack() {
        return this.attack(this.vikingArmy, this.saxonArmy)
    }
    saxonAttack() {
        return this.attack(this.saxonArmy, this.vikingArmy)
    }
    // vikingAttack(){
    //     const victim = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    //     const attacker = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].strength;
    //     const result = victim.receiveDamage(attacker);
    //     if(victim.health <= 0) {
    //         this.saxonArmy.splice(this.saxonArmy.indexOf(victim), 1);
    //     }
    //     return result;

    // }
    // saxonAttack(){
    //     const victim = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    //     const attacker = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)].strength;
    //     const result = victim.receiveDamage(attacker);
    //     if(victim.health <= 0) {
    //         this.vikingArmy.splice(this.vikingArmy.indexOf(victim), 1);
    //     }
    //     return result;
    // }
    showStatus(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
