// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
    }

    isAlive(){
        return this.health >0;
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
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        super.receiveDamage(damage);
        if(this.health > 0){
            return this.name + " has received " + damage + " points of damage";
        }
        return this.name + " has died in act of combat";
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }

    receiveDamage(damage){
        super.receiveDamage(damage);
        if(this.health > 0){
            return "A Saxon has received " + damage + " points of damage";
        }
        return "A Saxon has died in combat";
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

    _actionArmyAttack(AttackerArmy, DamagedArmy){
        if (AttackerArmy.lenght === 0 || DamagedArmy.length === 0) return;
        const attacker = this._randomArmy(AttackerArmy);
        const damaged = this._randomArmy(DamagedArmy);
        const message = DamagedArmy[damaged].receiveDamage(AttackerArmy[attacker].attack());
        if(!damaged.isAlive){
            DamagedArmy.splice(damaged,1);
        }
        return message;
    }
    
    vikingAttack(){
        return this._actionArmyAttack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack(){
        return this._actionArmyAttack(this.saxonArmy, this.vikingArmy);
    }
    _randomArmy(array){
        if(array.length === 1) return 0;
        return Math.floor(Math.random() * array.lenght);
    }

    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day...";
        }
        return  "Vikings and Saxons are still in the thick of battle."
    }
}
