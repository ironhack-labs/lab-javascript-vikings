// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }

    attack() {
        return this.strength;
    }
    
    receiveDamage(damage) {
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
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }else{
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
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }else{
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
        let indexViking = Math.floor(Math.random()*this.vikingArmy.length);
        let indexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        let saxon = this.saxonArmy[indexSaxon];
        let viking = this.vikingArmy[indexViking]
        let damage = viking.attack();
        saxon = saxon.receiveDamage(damage)
        if(saxon === `A Saxon has died in combat`){
            this.saxonArmy.splice(indexSaxon, 1);
        }
        return saxon;
    }

    saxonAttack(){
        let indexViking = Math.floor(Math.random()*this.vikingArmy.length);
        let indexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        let saxon = this.saxonArmy[indexSaxon];
        let viking = this.vikingArmy[indexViking]
        let damage = saxon.attack();
        viking = viking.receiveDamage(damage)
        if(viking.includes(`has died in act of combat`)){
            this.vikingArmy.splice(indexViking, 1);
        }
        return viking;
    }

    genericAttack(attack){
        if (attack === 'viking'){
            // Using var because we need the variable outside of the if statement
            var indexAttacker = Math.floor(Math.random()*this.vikingArmy.length);
            var indexVictim = Math.floor(Math.random()*this.saxonArmy.length);
            var victim = this.saxonArmy;
            var attacker = this.vikingArmy;
        } else if (attack === 'saxon'){
            var indexAttacker = Math.floor(Math.random()*this.saxonArmy.length);
            var indexVictim = Math.floor(Math.random()*this.vikingArmy.length);
            var victim = this.vikingArmy;
            var attacker = this.saxonArmy;
        } else {
            return 'Enter valid attacker'
        }
        let damage = attacker[indexAttacker].attack();
        victim[indexVictim] = victim[indexVictim].receiveDamage(damage)
        if (victim.includes(`has died in act of combat`)){
            victim.splice(indexVictim, 1);
        }
        return victim[indexVictim];
    }


    showStatus(){
        if (this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}



let viking = new Viking('Harald', 150, 300);
let saxon = new Saxon(600, 250);
let war = new War();

war.addViking(viking);
war.addSaxon(saxon);
console.log(war.genericAttack('viking'));