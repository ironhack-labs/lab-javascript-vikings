// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

attack() {
    return this.strength;
}

receiveDamage(damage){
    this.health = this.health - damage;
}
}

// Viking
class Viking extends Soldier{
     constructor(name, health, strength){
        super(health, strength)
         this.name = name;
     } 

receiveDamage(damage){
        this.health = this.health - damage;
     if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
             } else if (this.health <= 0) { 
        return `${this.name} has died in act of combat`;
    }
}

battleCry(){
    return `Odin Owns You All!`  
}
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0) {
           return `A Saxon has received ${damage} points of damage`;
                } else if (this.health <= 0) { 
           return `A Saxon has died in combat`;
       }
    }
}

// let saxon = new Soldier (health, strength);

//  // Saxon
// class Saxon extends Soldier{
//     constructor(health, strength) {
//         this.health = health
//         this.strength = strength
//     }
//     attack() {
//         return this.strength;
//     }
// }

 


//     receiveDamage(damage){
//         let soldierHealth = soldier.health-damage;
//     }
// }

//         let messageAlive = `${name} has received ${damage} points of damage`
//         let messageDead = `${name} has died in the act of combat`
//         if (soldierHealth >= 0) {
//             return messageAlive;
//         } else {
//             return messageDead; 
//         }
//     }

//     battleCry(){
//         let messageOdin = `Odin owns you all`
//         return messageOdin
//     }
//     }

// // Saxon
// class Saxon {}

// // War
// class War {}

// (this.health <= 0) {