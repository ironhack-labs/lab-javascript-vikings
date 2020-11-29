// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
  }

  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  //Deafult behaviour
  //constructor(health, strength) {
  //  super(health, strength);
  //}

  receiveDamage(damage) {
    super.receiveDamage(damage);
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy = [...this.vikingArmy, viking]
  }

  addSaxon(saxon) {
    this.saxonArmy = [...this.saxonArmy, saxon]
  }

  randomSoldier = (soldierArr) => soldierArr[Math.floor(Math.random() * soldierArr.length)]

  atackTurn(attackerArmy, defenderArmy) {
    const randomAttacker = this.randomSoldier(attackerArmy)
    const randomDefender = this.randomSoldier(defenderArmy)
    console.log(randomAttacker)
    console.log(randomDefender)

    const attackLog = randomAttacker.receiveDamage(randomDefender.attack())

    //defenderArmy = defenderArmy.filter(defender => defender.health > 0)

    return attackLog
  }

  vikingAttack() {
    this.saxonArmy = this.saxonArmy.filter(defender => defender.health > 0)
    return attackLog = this.atackTurn(this.vikingArmy, this.saxonArmy)
  }

  saxonAttack() {
    this.vikingArmy = this.vikingArmy.filter(defender => defender.health > 0)
    return attackLog = this.atackTurn(this.saxonArmy, this.vikingArmy)
  }

  showStatus() {
    return this.vikingArmy.length === 0 ?
      `Saxons have fought for their lives and survived another day...` :
      this.saxonArmy.length === 0 ?
        `Vikings have won the war of the century!` :
        `Vikings and Saxons are still in the thick of battle.`
  }
}


const war = new War

war.addViking(new Viking('Erik', 110, 40))
war.addViking(new Viking('Gunnar', 120, 30))
war.addViking(new Viking('Ivar', 90, 20))

war.addSaxon(new Saxon(40, 25))
war.addSaxon(new Saxon(175, 15))
war.addSaxon(new Saxon(200, 20))

console.log(war.vikingAttack())

console.log('####WAR####')
while (war.vikingArmy.length != 0 || war.saxonArmy.length != 0) {

  console.log("")
  console.log(war.vikingArmy)
  console.log(war.saxonArmy)
  console.log(war.vikingAttack())
  console.log(war.saxonAttack())
  console.log(war.showStatus())

}