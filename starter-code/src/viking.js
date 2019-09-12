// Soldier
class Soldier {

    constructor(health, strength){
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
        super(health, strength)
        this.name = name
    }

    receiveDamage(dmg){
        super.receiveDamage(dmg)
        if (this.health > 0) {
            return `${this.name} has received ${dmg} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health,strength)
    }

    receiveDamage(dmg){
        super.receiveDamage(dmg)
        if (this.health>0){
            return `A Saxon has received ${dmg} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {

    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
        this._randomViking;
        this._randomSaxon;
    }


    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        this._pickSaxon();
        this._pickViking();
        const result = this._randomSaxon.receiveDamage(this._randomViking.strength)

        if (this._randomSaxon.health <= 0){
            this._rmDeadSaxon(this._randomSaxon)
        }

        return result
    }

    saxonAttack(){
        this._pickSaxon();
        this._pickViking();
        const result = this._randomViking.receiveDamage(this._randomSaxon.strength)

        if (this._randomViking.health <= 0){
            this._rmDeadViking(this._randomViking)
        }

        return result
    }

    _pickSaxon(){
        this._randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    }

    _rmDeadSaxon(saxon){
        this.saxonArmy.splice(this.saxonArmy.indexOf(saxon),1)
    }

    _rmDeadViking(viking){
        this.vikingArmy.splice(this.vikingArmy.indexOf(viking),1)
    }

    _pickViking(){
        this._randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    }

    showStatus(){
        if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survive another day...`
        } else if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}
