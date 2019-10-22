// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
    }

}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name
    }
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0)
        return `${this.name} has received ${damage} points of damage`
        else 
        return `${this.name} has died in act of combat`
    }
    battleCry() {
       return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0)
        return `A Saxon has received ${damage} points of damage`
        else 
        return `A Saxon has died in combat`
    }
}


// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        let i = Math.floor(Math.random()*this.vikingArmy.length)
        let j = Math.floor(Math.random()*this.saxonArmy.length)
        let hustSaxons = this.saxonArmy[j].receiveDamage(this.vikingArmy[i].strength)
        if (this.saxonArmy[j].health <= 0)
        {
            this.saxonArmy.splice(j,1)
        } 
        return hustSaxons
    }
    saxonAttack() {
        let i = Math.floor(Math.random()*this.saxonArmy.length)
        let j = Math.floor(Math.random()*this.vikingArmy.length)
        let hustVikings = this.vikingArmy[j].receiveDamage(this.saxonArmy[i].strength)
        if (this.vikingArmy[j].health <= 0)
        {
            this.vikingArmy.splice(j,1)
        } 
        return hustVikings
    }
    showStatus() {
        if(this.saxonArmy.length===0) return `Vikings have won the war of the century!`
        if(this.vikingArmy.length===0) return `Saxons have fought for their lives and survive another day...`
        if((this.saxonArmy.length>0)&&(this.vikingArmy.length>0)) return `Vikings and Saxons are still in the thick of battle.`
    }
}

warOfACentury = new War()

h = new Viking(name = "HrÖrik", health = 100, strength = 20)
o = new Viking(name = "Heleg", health = 120, strength = 18)
i = new Viking(name = "Ingwar", health = 160, strength = 25)

warOfACentury.addViking(h)
warOfACentury.addViking(o)
warOfACentury.addViking(i)

for(k=0; k<6; k++)
{
    s = new Saxon(50,12)
    warOfACentury.addSaxon(s)
}
console.log(warOfACentury)
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.vikingAttack())
console.log(warOfACentury.showStatus())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.vikingAttack())
console.log(warOfACentury.showStatus())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.vikingAttack())
console.log(warOfACentury.vikingAttack())
console.log(warOfACentury.showStatus())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.vikingAttack())
console.log(warOfACentury.showStatus())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.vikingAttack())
console.log(warOfACentury.showStatus())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.vikingAttack())
console.log(warOfACentury.vikingAttack())
console.log(warOfACentury.showStatus())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.vikingAttack())
console.log(warOfACentury.showStatus())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.vikingAttack())
console.log(warOfACentury.showStatus())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.vikingAttack())
console.log(warOfACentury.vikingAttack())
console.log(warOfACentury.showStatus())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.vikingAttack())
console.log(warOfACentury.showStatus())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.vikingAttack())
console.log(warOfACentury.showStatus())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.saxonAttack())
console.log(warOfACentury.vikingAttack())
console.log(warOfACentury.vikingAttack())
console.log(warOfACentury.showStatus())
console.log(warOfACentury)


