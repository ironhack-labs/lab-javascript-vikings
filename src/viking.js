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
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        super.receiveDamage(damage);

        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else if(this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{

    receiveDamage(damage){
        super.receiveDamage(damage);

        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else if(this.health <= 0) {
            return `A Saxon has died in combat`;
        }
    }

    attack(){
        return this.strength;
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


    vikingAttack(){
        const result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    
        this.saxonArmy.forEach((viking, index) => {
            if(viking.health <= 0){
                this.saxonArmy.shift(index, index+1)
            };
        });
        
        return result;
        
    }
    
    saxonAttack(){
        const result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
        
        this.vikingArmy.forEach((viking, index) => {
            if(viking.health <= 0){
                this.vikingArmy.shift(index, index+1) };
        });

        return result;
        
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`;
        } else if(this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}
