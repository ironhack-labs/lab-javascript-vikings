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
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

const newPlayer = new Viking('marquinhos',100,50)
console.log(newPlayer)

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    
    addViking()
    addSaxon()
    vikingAttack()
    saxonAttack()
    showStatus()
}

// class Car {
//     constructor(carColor, carEngine, carPotency, carDoorQuantity){
//         this.color = carColor;
//         this.engine = carEngine;
//         this.potency = carPotency;
//         this.doorsQuantity = carDoorQuantity;
//         this.speed = 0;
//     }

//     accelerate(speed) {
//         this.speed += speed;
//     }

//     break(speed) {
//         this.speed -= speed;
//     }

//     turnLeft(){
//         switch(this.direction){
//             case 'N':
//                 this.direction = 'W';
//                 break;
//             case 'N':
//                 this.direction = 'W';
//                 break;
//             case 'N':
//                 this.direction = 'W';
//                 break;    
//         }
//     }
// }