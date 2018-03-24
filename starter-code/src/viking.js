// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}
Soldier.prototype.attack = function () {
    return this.strength;
}
Soldier.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
}


// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;

}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function () {
    return this.strength;
}
Viking.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
    }
    else {
        return this.name + " has died in act of combat";
    }
};
Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(health, strength);
    this.health = health;
    this.strength = strength;
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.attack = function () {
    return this.strength;
}
Saxon.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return "A Saxon has received " + damage + " points of damage";
    }
    else {
        return "A Saxon has died in combat";
    }
};

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
    this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function () {
    var indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var oneViking = this.vikingArmy[indexViking];
    var oneSaxon = this.saxonArmy[indexSaxon];
    var ataque = oneSaxon.receiveDamage(oneViking.attack());
  
    if (oneSaxon.health <= 0) {
      this.saxonArmy.splice(indexSaxon, 1);
    }
  
    return ataque;
    }

    War.prototype.saxonAttack = function () {
        var indexViking = Math.floor(Math.random() * this.vikingArmy.length);
        var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        var oneViking = this.vikingArmy[indexSaxon];
        var oneSaxon = this.saxonArmy[indexViking];
        var ataque= oneViking.receiveDamage(oneSaxon.attack());

        if (oneViking.health <=0) {
            this.vikingArmy.splice(indexViking, 1);
        }
        return ataque;
    }
      
    War.prototype.showStatus = function () {
        if (this.saxonArmy.length === 0) {
          return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
          return "Saxons have fought for their lives and survive another day...";
        }
        return "Vikings and Saxons are still in the thick of battle.";
      };

    