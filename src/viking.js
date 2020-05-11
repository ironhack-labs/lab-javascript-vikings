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
        this.health -= damage ;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return 'Odin Owns You All!'

    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else if (this.health <= 0){
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
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        let attacker =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let defender = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let result = defender.receiveDamage(attacker.strength);
        for(let i = 0; i <= this.saxonArmy.length; i ++){
            if (this.saxonArmy[i].health <= 0){
                this.saxonArmy.splice(i, 1);
            }
        }  
        return result;
    }

    saxonAttack(){
        let attacker1 =  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let defender1 = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let result1 = defender1.receiveDamage(attacker1.strength);
        // for(let i = 0; i <= this.vikingArmy.length; i ++){
        //     if (this.vikingArmy[i].health <= 0){
        //         this.vikingArmy.splice(i, 1);
        //     }
        // }  
        return result1;
    }

    showStatus(){
        if (this.saxonArmy.length <= 0 && this.vikingArmy.length > 0){
            return 'Vikings have won the war of the century!';
        }
        else if (this.saxonArmy.length > 0 && this.vikingArmy.length <= 0){
            return 'Saxons have fought for their lives and survived another day...';
        }
        else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}
