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
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage){
        super.receiveDamage(damage);
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else{
            return`${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{

    receiveDamage(damage){
        super.receiveDamage(damage);
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }else{
            return 'A Saxon has died in combat';
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
        let currentViking = [Math.floor(Math.random() * this.vikingArmy.length)];
        let currentSaxon = [Math.floor(Math.random() * this.saxonArmy.length)];

        let battle = this.saxonArmy[currentSaxon].receiveDamage(this.vikingArmy[currentViking].attack());
        
        if(this.saxonArmy[currentSaxon].health < 1){
            this.saxonArmy.splice(currentSaxon, 1);
        }

        return battle;

    }
    saxonAttack(){
        let currentViking = [Math.floor(Math.random() * this.vikingArmy.length)];
        let currentSaxon = [Math.floor(Math.random() * this.saxonArmy.length)];

        let battle = this.vikingArmy[currentViking].receiveDamage(this.saxonArmy[currentSaxon].attack());
        
        if(this.vikingArmy[currentViking].health < 1){
            this.vikingArmy.splice(currentViking, 1);
        }

        return battle;

    }
    showStatus(){
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!';
        }
        else if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...';
        }
        else{
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}
