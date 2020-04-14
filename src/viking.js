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

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return  `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;

    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
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
   addViking(newViking) {
       this.vikingArmy.push(newViking);
   }
   addSaxon(newSaxon) {
       this,this.saxonArmy.push(newSaxon);
   }
   
   vikingAttack() {
       let attackSaxon = this.saxonArmy[
           Math.floor(Math.random()*this.saxonArmy.length)
       ];
       let attackViking = this.vikingArmy[
        Math.floor(Math.random()*this.vikingArmy.length)
    ];
    let vikingAttackResult = attackSaxon.receiveDamage(attackViking.attack());

    if (attackSaxon.health <= 0) {
        this.saxonArmy = this.saxonArmy.filter((item) => item !== attackSaxon);
    }
    return vikingAttackResult;
    }
    soldierAttack(attack, defense) {
        let message = "";
        message = defense.receiveDamage(attack.attack());

        if (defense instanceof Saxon) {
            this.saxonArmy = this.saxonArmy.filter((item) => item.health > 0);
        } else if (defense instanceof Viking){
            this.vikingArmy = this.vikingArmy.filter((item) => item.health > 0);

        }
        return message;
    }
    saxonAttack() {
        let saxon = this.saxonArmy[
            Math.floor(Math.random()*this.saxonArmy.length)
        ];
        let viking = this.vikingArmy[
         Math.floor(Math.random()*this.vikingArmy.length)
     ];
     return this.soldierAttack(saxon, viking);
    }
    showStatus(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        return "Vikings and Saxons are still in the thick of battle.";
    }
   }

