// Soldier
function Soldier(health, strength){
    this.health = health
    this.strength = strength
}

Soldier.prototype.attack = function (){
    return this.strength
}

Soldier.prototype.receiveDamage = function(thedamage){
  this.health -= thedamage
}
// Viking
function Viking (name, health, strength){
    Soldier.call(this, health, strength)
    this.name = "Harald"
}
Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking

Viking.prototype.receiveDamage = function(thedamage){
    this.health -= thedamage
    if (this.health > 0) {
        return this.name + ' has received ' + thedamage + ' points of damage';
      } else if (this.health <= 0) {
        return this.name + ' has died in act of combat';
      }
    };
    
    Viking.prototype.attack = function () {
      return this.strength;
    };
    
    Viking.prototype.battleCry = function () {
      return 'Odin Owns You All!';
    };
    
    
    // Saxon
    
    
    function Saxon(health, strength) {
      Soldier.call(this, health, strength);
    }
    
    Saxon.prototype = Object.create(Soldier.prototype);
    
    Saxon.prototype.receiveDamage = function (damage) {
      this.health -= damage;
      if (this.health > 0) {
        return 'A Saxon has received ' + damage + ' points of damage';
      } else if (this.health <= 0) {
        return 'A Saxon has died in combat';
      }
    };
    
    Saxon.prototype.attack = function () {
      return this.strength;
    };
    function War() {
      this.vikingArmy = []
      this.saxonArmy = []
    }
    
    War.prototype = Object.create(Saxon.prototype)
    War.prototype.constructor = War
    
    War.prototype.addViking = function (a) {
      this.vikingArmy.push(a)
    }
    
    War.prototype.addSaxon = function (a) {
      this.saxonArmy.push(a)
    }
    
    War.prototype.vikingAttack = function () {
      const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
      const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
  
    const randomSaxon = this.saxonArmy[randomSaxonIndex]
    const randomViking = this.vikingArmy[randomVikingIndex]

    const msg = randomSaxon.receiveDamage(randomViking.strength)
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1)

    }
    return msg
  }
  War.prototype.saxonAttack = function() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)

    const randomSaxon = this.saxonArmy[randomSaxonIndex]
    const randomViking = this.vikingArmy[randomVikingIndex]

    const msg = randomViking.receiveDamage(randomSaxon.strength)

    // Remove dead saxons from the army
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1)
    }

    return msg
  }
  War.prototype.showStatus = function() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survive another day...'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }




    // //War
    // function War(){
    //   this.vikingArmy = []
    //   this.saxonArmy = []

    //   War.prototype.addViking = function (Viking) {
    //     vikingSoldier.push(Viking);
    //     return 0;
    //   };
      
    //   War.prototype.addSaxon = function (Saxon) {
    //     saxonSoldier.push(Saxon);
    //     return 0;

    //   const vikingSoldier = this.vikingArmy(Math.floor((Math.random() * vikingArmy.length)))
    //   const saxonSoldier = this.saxonArmy(Math.floor((Math.random() * saxonArmy.length)))
    
    //   };
    // }

 