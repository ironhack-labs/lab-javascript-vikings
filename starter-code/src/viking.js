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

    constructor (name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        super.receiveDamage(damage);
        
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage){
        super.receiveDamage(damage);
        
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
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        
        var vikingRndId = Math.floor(Math.random()*this.vikingArmy.length);
        var saxonRndId = Math.floor(Math.random()*this.saxonArmy.length);

        var viking = this.vikingArmy[vikingRndId];
        var saxon = this.saxonArmy[saxonRndId];

        if (viking.attack() < saxon.health){
            return saxon.receiveDamage(viking.attack());
        } else {
            this.saxonArmy.splice(saxonRndId, 1);
            return saxon.receiveDamage(viking.attack());      
        }
    }
    saxonAttack(){
        var vikingRndId = Math.floor(Math.random()*this.vikingArmy.length);
        var saxonRndId = Math.floor(Math.random()*this.saxonArmy.length);

        var viking = this.vikingArmy[vikingRndId];
        var saxon = this.saxonArmy[saxonRndId];

        if (saxon.attack() < viking.health){
            return viking.receiveDamage(saxon.attack());
        } else {
            this.vikingArmy.splice(vikingRndId, 1);
            return viking.receiveDamage(saxon.attack());
        }
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

var war1 = new War();

war1.addViking(new Viking('Ube', 100, 30));
war1.addViking(new Viking('Erik', 80, 6));
war1.addViking(new Viking('Arne', 90, 12));
war1.addViking(new Viking('Ube', 50, 18));
war1.addViking(new Viking('Olaf', 200, 4));


war1.addSaxon(new Saxon(50, 5));
war1.addSaxon(new Saxon(150, 25));
war1.addSaxon(new Saxon(60, 7));
war1.addSaxon(new Saxon(60, 5));
war1.addSaxon(new Saxon(70, 5));

console.log(war1.showStatus());






