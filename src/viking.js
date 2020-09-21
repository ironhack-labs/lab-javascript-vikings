// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
        this.attack = function(){
            return strength
        }
        this.receiveDamage = (damage)=>{
            this.health = health - damage
        }
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
    super (health, strength)
    this.name = name;
    this.attack = () =>{
        return strength
    }
    this.receiveDamage = (damage) => {
        this.health = health - damage;
        if (this.health > 0 ){
            return `${name} has received ${damage} points of damage`
        }else{
            return `${name} has died in act of combat`
        }
    }
    this.battleCry = () =>{
        return "Odin Owns You All!"
    }

    }
}

// Saxon
class Saxon  extends Soldier{
    constructor(health, strength){
    super(health, strength);
    this.attack= () =>{
        return strength
    }
    this.receiveDamage = (damage) => {
        this.health = health - damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }else{
            return `A Saxon has died in combat`
        }
    }
    }
}

// War
// class War {
//     constructor(){
//     let war.vikingArmy = []
//     let war.saxonArmy = []
//     this.addViking = () =>{
        
//     }
//     this.addSaxon = () =>{

//     }
//     this.vikingAttack =() =>{

//     }
//     this.saxonAttack = () =>{

//     }
//     this.showStatus = () =>{

//     }    
//     }
// }
