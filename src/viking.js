// Soldier
class Soldier {
   constructor(health, strength) {
       this.health = health;
       this.strength = strength;
   }
   attack() {
       return this.strength;
   }
   receiveDamage(damage) {
       this.health -= damage;
   }
}
// Viking inherited from Soldier
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
//Re-implement receiveDamage for Viking
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    //Add battleCry method
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon inherited from Soldier
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }
    //Re-implement receiveDamage for Saxon
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
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
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    //Create some help functions to reduce code lines
    chooseSoldier(army) {
        return Math.floor(Math.random() * Math.floor(this.army.length));
    }
    vikingAttack(){

        let atacker = this.vikingArmy[this.chooseSoldier(this.vikingArmy)].attack();
        let defender = this.saxonArmy[this.chooseSoldier(this.saxonArmy)];

        if (defender.health - attack <= 0) {
            this.saxonArmy.pop();
            return defender.receiveDamage(atacker);
            } else {
                return atacker.receiveDamage(atacker);
            }
    }
    
    saxonAttack(){
        let atacker = this.saxonArmy[this.chooseSoldier(this.saxonArmy)].attack();
        let defender = this.vikingArmy[this.chooseSoldier(this.vikingArmy)];

        if (defender.health - attack <= 0) {
            this.saxonArmy.pop();
            return defender.receiveDamage(atacker);
            } else {
                return atacker.receiveDamage(atacker);
            }

    }
    showStatus(){
        if (!this.saxonArmy.length) {
            return 'Vikings have won the war of the century!';
        } else if (!this.vikingArmy.length) {
            return 'Saxons have fought for their lives and survived another day...';
        } else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
    
}

