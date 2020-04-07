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
        this.health-=damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        super.receiveDamage(damage);
        if (this.health>0) { 
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    }
    battleCry(){
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(damage){
        super.receiveDamage(damage);
        if (this.health>0) { 
            return `A Saxon has received ${damage} points of damage`;
        } 
        return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.addSoldier(viking);
    }
    addSaxon(saxon){
        this.addSoldier(saxon);
    }
    addSoldier(soldier){
        if (soldier instanceof Viking){
            this.vikingArmy.push(soldier);
        }
        else if (soldier instanceof Saxon) {
            this.saxonArmy.push(soldier);
        }
    }
    getVikingSoldier(){
        let vikingIdx = Math.floor(Math.random()*this.vikingArmy.length);
        return this.vikingArmy[vikingIdx];
    }
    getSaxonSoldier(){
        let saxonIdx = Math.floor(Math.random()*this.vikingArmy.length);
        return this.saxonArmy[saxonIdx];
    }
    vikingAttack(){
        return this.soldierAttack(this.getVikingSoldier(),this.getSaxonSoldier());
    }
    saxonAttack(){
        return this.soldierAttack(this.getSaxonSoldier(),this.getVikingSoldier());
    }
    soldierAttack(attack,defense){
        let message = '';
        message = defense.receiveDamage(attack.strength);
        if (defense instanceof Viking){
            this.vikingArmy = this.vikingArmy.filter(v => v.health>0);
        }
        else if (defense instanceof Saxon){
            this.saxonArmy = this.saxonArmy.filter(s => s.health>0);
        }
        return message;
    }
    showStatus(){
        if (this.saxonArmy.length===0) {return 'Vikings have won the war of the century!';}
        else if (this.vikingArmy.length===0) {return 'Saxons have fought for their lives and survived another day...';}
        else {return 'Vikings and Saxons are still in the thick of battle.'}
    }
}
