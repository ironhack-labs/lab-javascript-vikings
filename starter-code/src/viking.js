// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;

    this.attack = () => {
        return this.strength;
    }

    this.receiveDamage = (dmg) => {
        this.health = this.health - dmg;
    }
}

// Viking
function Viking (name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
    this.receiveDamage = (dmg) => {
        this.health = this.health - dmg;
        return this.health > 0 ? `${this.name} has received ${dmg} points of damage` : `${this.name} has died in act of combat`;
    }

    this.battleCry = () => {
        return "Odin Owns You All!";
    }
}

Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.receiveDamage = (dmg) => {
        this.health = this.health - dmg;
        return this.health > 0 ? `A Saxon has received ${dmg} points of damage` : `A Saxon has died in combat`;
    }
}
Saxon.prototype = Object.create(Soldier.prototype);
// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];

    this.addViking = (Viking) => {
        this.vikingArmy.push(Viking);
    }
    this.addSaxon = (Saxon) => {
        this.saxonArmy.push(Saxon);
    }
    this.vikingAttack = () => {
        Saxon.receiveDamage() = Viking.strength;
        if(Saxon.health < 0) {
            for(var i=0 ; i<saxonArmy.length; i++) {
                if(saxonArmy[i].health <= 1) {
                    saxonArmy.splice(i);
                }
            }
        } 
        return Saxon.receiveDamage(Viking.strength);
    }
    this.saxonAttack = () => {
        this.Viking.receiveDamage = Saxon.strength;
        for(var i=0 ; i<vikingArmy.length; i++) {
            if(vikingArmy[i].name <= 1) {
                vikingArmy.splice(i);
            }
        }
        return Viking.receiveDamage(Saxon.strength);
    }
    //  this.showStatus = () => {
    //     if (saxonArmy.length > 0 && vikingArmy.length > 0) {
    //         return "Vikings and Saxons are still in the thick of battle.";
    //     } else {
    //         return saxonArmy.length < 1 ? "Vikings have won the war of the century!" : "Vikings have won the war of the century!";
    //     }
    // }
}
 