// Soldier
class Soldier {
constructor(health, strength) {
    this.health = health;
    this.strength = strength
};
attack(){
    return this.strength;
};
receiveDamage(damage){
    if (this.health - damage > 0){
        this.health -= damage;
        }
    }
}


// Viking
class Viking extends Soldier{
constructor(name, health, strength){
    super(health, strength);
    this.name = name;
};
receiveDamage(damage){
    this.health -= damage;

    if(this.health > 0){
        return `${this.name} has received ${damage} points of damage`
    } else if (this.health <= 0) {
        return `${this.name} has died in act of combat`
    }
};
battleCry(){
    return `Odin Owns You All!`
};
}


// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage;
            
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } 
        return `A Saxon has died in combat`
    }
};
// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking){
        this.vikingArmy.push(viking)
    };

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    };
    
    vikingAttack(){
        let randomTarget = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)] 
        let randomAttacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        let receiveDamageMessage = randomTarget.receiveDamage(randomAttacker.strength)

        if (randomTarget.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomTarget))
        }
    return receiveDamageMessage
    };  
    saxonAttack(){
        let randomTarget = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomAttacker = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)] 

        let receiveDamageMessage = randomTarget.receiveDamage(randomAttacker.strength)

        if (randomTarget.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomTarget))
        }
    return receiveDamageMessage
    };
    showStatus(){
        if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
            return "Vikings and Saxons are still in the thick of battle."
        }
    };
}
