// Soldier
// describe('Soldier', () => {
//     let soldier;
//     const strength = 150;
//     const health = 300;
// }

class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage
        // console.log(Soldier.health)
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    //>>>AQUI TENEMOS PROBLEMAS
    receiveDamage(damage){
        this.health = this.health - damage;
        let alive = this.health

        if(alive > 0) {
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
    receiveDamage(damage){
        this.health = this.health - damage;
        let alive = this.health

        if(alive > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        return `A Saxon has died in combat` 
    }
}

// War
class War {}
