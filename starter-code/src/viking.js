// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function () {
    return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
}

Viking.prototype.attack = function () {
    Soldier.call(this)
    return this.strength;
}

Viking.prototype = Object.create(Soldier.prototype)

Viking.prototype.receiveDamage = function (damage) {
    this.health -= damage

    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
    } else if (this.health === 0) {
        return `${this.name} has died in act of combat`
    }
}

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
    this.health = health;
    this.strength = strength;
}

Saxon.prototype.attack = function () {
    Soldier.call(this)// on copie pour l'héritage
    return this.strength;
}

Saxon.prototype = Object.create(Soldier.prototype)// on fork pour l'héritage


Saxon.prototype.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
    } else if (this.health === 0) {
        return `A Saxon has died in combat`
    }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function (Viking) {
    this.vikingArmy.push(Viking);
}
War.prototype.addSaxon = function (Viking) {
    this.saxonArmy.push(Viking);
}

War.prototype.vikingAttack = function () {
    var aleaViking = Math.floor(Math.random() * this.vikingArmy.length)
    var aleaSaxon = Math.floor(Math.random() * this.vikingArmy.length)
    var vikingHit = this.vikingArmy[aleaViking]
    var degatSaxon = this.saxonArmy[aleaSaxon]
    degatSaxon.health -= vikingHit.strength
    console.log(degatSaxon)
    if (degatSaxon.health <= 0 ){
        this.saxonArmy.splice(aleaSaxon,1);
    }
}

War.prototype.saxonAttack = function () {
    var aleaViking = Math.floor(Math.random() * this.vikingArmy.length)
    var aleaSaxon = Math.floor(Math.random() * this.vikingArmy.length)
    var vikingHit = this.vikingArmy[aleaViking]
    var degatSaxon = this.saxonArmy[aleaSaxon]
    vikingHit.health -=  degatSaxon.strength
    console.log(vikingHit)
    if (vikingHit.health <= 0 ){
        this.vikingArmy.splice(aleaViking,1);
    }
}
War.prototype.showStatus = function(){
    debugger
    if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
        return 'Vikings and Saxons are still in the thick of battle.'
    } else if (this.saxonArmy.length === 0){
        return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length === 0) {
        return 'Saxons have fought for their lives and survive another day...'
    }
}