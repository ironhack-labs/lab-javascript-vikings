// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    };

    receiveDamage(damage){
        this.health = this.health - damage;
    };
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health,strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    };

    battleCry(){
        return 'Odin Owns You All!';
    };
}

// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
        super(health,strength);
    }

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
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    };

    addViking(viking){
        this.viking = viking;
        this.vikingArmy.push(this.viking);
    };

    addSaxon(saxon){
        this.saxon = saxon;
        this.saxonArmy.push(this.saxon);
    };

    vikingAttack(){
        const selectedViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const selectedSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        selectedSaxon.receiveDamage(selectedViking.strength);
        if (selectedSaxon.health < 0){
            this.saxonArmy.pop(selectedSaxon);
        }
    };

    saxonAttack(){
        const selectedViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const selectedSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        selectedViking.receiveDamage(selectedSaxon.strength);
        if (selectedViking.health < 0){
            this.vikingArmy.pop(selectedViking);
        }
    };

    showStatus(){};
}
