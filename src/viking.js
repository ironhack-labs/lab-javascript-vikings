// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }

    attack(){
        return super.attack()
    }

    receiveDamage(damage){
        super.receiveDamage(damage)
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        return `${this.name} has died in act of combat`
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);

    }

    attack(){
        return super.attack();
    }

    receiveDamage(damage){

        super.receiveDamage(damage);

        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        return `A Saxon has died in combat`

    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    getRandomSoldier(army) {
    const index = Math.floor(Math.random() * army.length)
    const soldier = army[index]

    return { soldier: soldier, index: index }
    }

    soldierAttack(isVikingAttacking) { // metodo reutilizable para los ataques
        let attackerInfo
        let defenderInfo

        const saxonInfo = this.getRandomSoldier(this.saxonArmy)
        const vikingInfo = this.getRandomSoldier(this.vikingArmy)

        if (isVikingAttacking) {
            attackerInfo = vikingInfo
            defenderInfo = saxonInfo
        } else {
            attackerInfo = saxonInfo
            defenderInfo = vikingInfo
        }

        const attack = defenderInfo.soldier.receiveDamage(attackerInfo.soldier.strength)

        if (defenderInfo.soldier.health <= 0) {
            const army = isVikingAttacking ? this.saxonArmy : this.vikingArmy

            army.splice(defenderInfo.index, 1)
        }

        return attack
    }

    vikingAttack() {
        return this.soldierAttack(true)
    }

    saxonAttack() {
        return this.soldierAttack(false)
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        }

        if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        }

        return 'Vikings and Saxons are still in the thick of battle.'
    }

}
