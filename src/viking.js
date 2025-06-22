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
        this.health = this.health - damage;
    }



}

// Viking 
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }else{
             return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }else{
             return `A Saxon has died in combat`;
        }
    }
    
}

// War
class War {
    constructor (){
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
        const indexSax = Math.floor(Math.random() * this.saxonArmy.length);
        const indexVik = Math.floor(Math.random() * this.vikingArmy.length);
        const damage = this.vikingArmy[indexVik].strength;

        const res = this.saxonArmy[indexSax].receiveDamage(damage)

        if (this.saxonArmy[indexSax].health <= 0){
            this.saxonArmy.splice(indexSax, 1);
        }

        return res;   
    }

    saxonAttack(){
        const indexSax = Math.floor(Math.random() * this.saxonArmy.length);
        const indexVik = Math.floor(Math.random() * this.vikingArmy.length);
        const damage = this.saxonArmy[indexSax].strength;

        const res = this.vikingArmy[indexVik].receiveDamage(damage)

        if (this.vikingArmy[indexVik].health <= 0){
            this.vikingArmy.splice(indexVik, 1);
        }

        return res;   

    }

    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
    
}
