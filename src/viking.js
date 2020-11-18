// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        console.log(this)
    }
    attack() {
        return this.strength;
    }
    
    receiveDamage(damage) {
        this.health -= damage
    }
}

console.log(new Soldier(1000, 10000))

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        this.name=name;
        super(health, strength);
    }
    attack(){return super.attack()}
    
    receiveDamage(damage){
if (this.health-=damage > 0){
    return this.name + " has received"+ this.damage
}
else {
    return this.name + "has died in act of combat"
}

    }
   
    battleCry() {
        return 'Odin Owns You All!'
        }

}
console.log(new Viking (Ben, 1000, 10000));

// Saxon
class Saxon extends Soldier {
    constructor(health, strength)

    attack(){return super.attack()}

    receiveDamage(damage) {
        if (this.health-=damage > 0){
            return "A SAXON has received"+ this.damage
        }
        else {
            return "A Saxon has died in combat"
        }
    }

}

// War
class War {
    constructor (vikingArmy, saxonArmy)
    addViking()
    addSaxon()
    vikingAttack()
    saxonAttack()
    showStatus()

}

