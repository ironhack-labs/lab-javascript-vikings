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
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    }
    battleCry(){
        return 'Odin Owns You All!';
    }
}
// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor() {
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
        const indexViking = Math.floor(Math.random()*this.vikingArmy.length);
        const indexSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        const damage = this.saxonArmy[indexSaxon].receiveDamage(this.vikingArmy[indexViking].strength);
        if (this.saxonArmy[indexSaxon].health <= 0) {
            for( let i = 0; i < this.saxonArmy.length; i++){ 
                if ( this.saxonArmy[i] === this.saxonArmy[indexSaxon]) {
                    this.saxonArmy.splice(i, 1); 
                }
            }
        }
        return damage;
    }
    saxonAttack(){
        const indexViking = Math.floor(Math.random()*this.vikingArmy.length);
        const indexSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        const damage = this.vikingArmy[indexViking].receiveDamage(this.saxonArmy[indexSaxon].strength);
        if (this.vikingArmy[indexViking].health <= 0) {
            for( let i = 0; i < this.vikingArmy.length; i++){ 
                if ( this.vikingArmy[i] === this.vikingArmy[indexViking]) {
                    this.vikingArmy.splice(i, 1); 
                }
            }
        }
        return damage;
    }
    showStatus(){}
}
