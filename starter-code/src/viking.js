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
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War

class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let vikingAttacker = Math.floor(Math.random() * this.vikingArmy.length);
        let saxonReceiver = Math.floor(Math.random() * this.saxonArmy.length);
        let attack = this.saxonArmy[saxonReceiver].receiveDamage(this.vikingArmy[vikingAttacker].attack());
        if (this.saxonArmy[saxonReceiver].health <= 0){
            this.saxonArmy.splice(this.saxonArmy[saxonReceiver], 1);
            return attack;
        }
        return attack;
    }

    saxonAttack(){
        let saxonAttacker = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingReceiver = Math.floor(Math.random() * this.vikingArmy.length);
        let attack = this.vikingArmy[vikingReceiver].receiveDamage(this.saxonArmy[saxonAttacker].attack());
        if (this.vikingArmy[vikingReceiver].health <= 0) {
            this.vikingArmy.splice(this.vikingArmy[vikingReceiver], 1);
            return attack;     
       }   
       return attack;
    }

    showStatus(){

    }

}




