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
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
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
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }else{
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

    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    attack(attacker){
        let randomSaxonI = Math.floor(Math.random()*this.saxonArmy.length);
        let randomVikingI = Math.floor(Math.random()*this.vikingArmy.length);
        let attackedSoldier, attackerSoldier;
        if(attacker === "viking"){
            attackedSoldier = this.saxonArmy[randomSaxonI], attackerSoldier = this.vikingArmy[randomVikingI];
        }else if(attacker === "saxon"){
            attackedSoldier = this.vikingArmy[randomVikingI], attackerSoldier = this.saxonArmy[randomSaxonI];
        }
        let message = attackedSoldier.receiveDamage(attackerSoldier.attack());
        if(attackedSoldier.health <= 0){
            if(attacker === "viking"){
                this.saxonArmy.splice(randomSaxonI, 1);
            }else if(attacker === "saxon"){
                this.vikingArmy.splice(randomVikingI, 1);
            }
        }
        return message;
    }

    vikingAttack(){
        return this.attack("viking");
    }

    saxonAttack(){
        return this.attack("saxon");
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }
        if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }

        return "Vikings and Saxons are still in the thick of battle."
    }
}
