// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
 attack () {
     return this.strength
 }

 receiveDamage (damage) {
     this.health -= damage;
 }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health,strength);
        this.name = name;
        
    }
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }  else {
        return `${this.name} has died in act of combat`;
        }
    }
    

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health,strength);
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }  else {
        return `A Saxon has died in combat`;
        }
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
        const randSaxon = Math.floor( (this.saxonArmy.length)*Math.random() );
        const randViking = Math.floor( (this.vikingArmy.length)*Math.random() );
        const saxon = this.saxonArmy[randSaxon];
        const viking = this.vikingArmy[randViking];
        const saxonHealt = saxon.receiveDamage(viking.strength);

        if (saxon.health <= 0) {
            this.saxonArmy.splice(randSaxon, 1);
        }
        return saxonHealt;
    
    }

    saxonAttack(){

        const randSaxon = Math.floor( (this.saxonArmy.length)*Math.random() );
        const randViking = Math.floor( (this.vikingArmy.length)*Math.random() );
        const saxon = this.saxonArmy[randSaxon];
        const viking = this.vikingArmy[randViking];
        const vikingHealt = viking.receiveDamage(saxon.strength);

        if (viking.health <= 0) {
            this.vikingArmy.splice(randViking, 1);
        }
        return vikingHealt;
    }

    showStatus(){
    
    if (this.vikingArmy.length === 0) {
        return `Saxons have fought for their lives and survived another day...`;
    } else if (this.saxonArmy.length === 0) {     
        return `Vikings have won the war of the century!`;
    } else {
        return `Vikings and Saxons are still in the thick of battle.`;
     }
    }
}