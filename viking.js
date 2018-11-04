// Soldier
function Soldier() {
  this.health = health
  this.strength = strength
  this.attack = () => {
    return this.strength
  }
  this.receiveDamage = (damage) => {
    this.health = this.health - damage
  }
}
// Viking
function Viking() {
    Soldier.call(this, health, strength)

    this.name = name
    this.receiveDamage = (damage) =>{
      this.health = this.health - damage
      if (this.health > 0) {
        var message = (this.name " has received " + damage + " point of damage.")
        return message
      }else{
        var message = (this.name + " has died in act of combat.")
      }
    }
    this.battleCry = () => {
      var cry = "Odin Owns You All!"
      return cry
    }
}

// Saxon
function Saxon() {
    Soldier.call(this, health, damage)

    this.receiveDamage =(damage) => {
      this.health = this.health - damage
      if(this.health > 0){
        var message = "A Saxon has received DAMAGE points of damage"
        return message
      } else {
        var message = "A Saxon has died in combat"
        return message
      }
    }
}

// War
function War() {

    this.vikingArmy = []
    this.saxonArmy = []

    this.addViking = (_vikingObject ) => {
        push.vikingObject(this.vikingArmy)

    }
    this.addSaxon = (_saxonObject) => {
        push._saxonObject(this.saxonArmy)

    }

    this.vikingAttack = () =>{
        var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        var resultOfAttack = randomSaxon.receiveDamage(randomViking.strength)

        this.saxonArmy.forEach(saxon => {
            if (saxon.health === 0){
                this.saxonArmy.splice( this.saxonArmy.indexOf(saxon),1)
            }
        });

        return resultOfAttack

    }

    this.saxonAttack = () =>{
        var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        var resultOfAttack = randomViking.receiveDamage(randomSaxon.strength)

        this.vikingArmy.forEach(viking => {
            if (viking.health === 0){
                this.vikingArmy.splice( this.vikingArmy.indexOf(viking),1)
            }
        });

        return resultOfAttack

    }

    this.showStatus = () => {
        if (this.saxonArmy === []){
            var message = "Vikings have won the war of the century!"
            return message
        }else if (this.vikingArmy === []){
            var message = "Saxons have fought for their lives and survive another day..."
            return message
        }else{
            var message = "Vikings and Saxons are still in the thick of battle."
            return message
        }

    }

}
