// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    
    attack() {
    console.log(this.health)}

    receiveDamage(damage) {
    this.health = this.health - damage}
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super (health, strength) 
        this.name = name 

    attack() {
    console.log(this.health)}

    receiveDamage(damage) {
        this.healt = this.health - damage

        if (this.health <= 0) {
            console.log ("${this.name} has died in act of combat")
        }
        else {console.log("${this.name} has received ${"damage"} points of damage"}
    }

    battleCry()
    console.log("Odin Owns You All!");

}
// Saxon
class Saxon extends Soldier {
   
    super(health, strength);

    attack() {
        console.log(this.strength)}

    receiveDamage(damage)
        this.health = this.health - damage}

        if (this.health <= 0) {
            console.log("A Saxon has died in combat")
        }
        else {console.log("A Saxon has received ${damage} points of damage"}

}

// War
class War {}
