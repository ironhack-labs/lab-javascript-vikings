// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };
    attack() {
        return this.strength;
    };

    receiveDamage(damage) {
        this.damage = damage;
        this.health -= this.damage;
    };
};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        this.name = "Harald";
        this.health = health;
        this.strength = strength;
    };
    attack() {
        return this.strength;
    };
    receiveDamage(damage) {
        this.damage = damage;
        this.health -= this.damage;
        if (this.health > "0") `${this.name} has received ${this.damage}points of damage`;
        else if (this.health <= "0") `${this.name} has died in act of combat`;
    };
    battleCry() {
        return 'Odin Owns You All!'
    };
};

// Saxon
class Saxon extends Soldier {
    // constructor(health, strength){
    // super(health, strength);
    // this.health = health;
    // this.strength = strength; 
    // };
    attack() {
        return this.strength;
    };
    receiveDamage(damage){
        this.damage = damage
        this.health -= this.damage;
        if (this.health > "0") `A Saxon has received ${this.damage}points of damage`;
        else if (this.health <= "0") `A Saxon has died in combat`;
    };
}


// War
class War {
    constructor(vikingArmy = [], saxonArmy = []) {
        this.vikingArmy = vikingArmy;
        this.saxonArmy = saxonArmy;
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
       let oldHealth = this.saxon.health;
       this.saxon.health = oldHealth - this.viking.strength;
       this.saxonArmy.splice(this.saxon, 1);
       return 'A Saxon has died in combat';
    };
    saxonAttack(){
        let oldHealth = this.viking.health;
        this.viking.health = oldHealth - this.saxon.strength;
        // for (let i = 0; i < this.vikingArmy.length; i++){
        this.vikingArmy.splice(this.viking, 1);
        return '${this.viking.name} has received ${this.saxon.strength} points of damage'; 
    };
    showStatus(){

    };
};