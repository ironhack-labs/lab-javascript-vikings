// Soldier
class Soldier {
    constructor(health, strength) {
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
        super(health, strength, name)
        this.name = name;
    }
        attack(){
            return this.strength;
        }
        
        receiveDamage(damage){
            this.health -= damage;
            if (this.health > 0) {
                return `${this.name} has received ${damage} points of damage`
            }
            if(this.health <= 0) {
                return `${this.name} has died in act of combat`
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
    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        if(this.health <= 0) {
            return 'A Saxon has died in combat'
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

    vikingAttack(){
        const combat = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength);
        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
        return combat;
    }

    saxonAttack(){
        const combat = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength);
        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
        return combat;
    }
    
    /*showStatus(){

    }*/
}
