// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
         this.health - damage;
         
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health - damage;
        if ((this.health - damage) <= 0){
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`
        };
        
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}






// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health - damage;
        if ((this.health - damage) <= 0){
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${damage} points of damage`
        };
        
    }
}



// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    };
    
   addViking(viking){
    this.vikingArmy.push(viking)
   };
   addSaxon(saxon){
    this.saxonArmy.push(saxon)
   }; 
   vikingAttack(){
       let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
       let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
       
       
    let saxons =  this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    
    this.saxonArmy.splice(randomSaxon-1, 1 )
    return saxons;

   }   
   saxonAttack(){
     let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
     let randomViking = Math.floor(Math.random()* this.vikingArmy.length);
  
    let vikings = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    
    this.vikingArmy.splice(randomViking-1, 1 )
    return vikings;


    }
  

    


}

let kevin = new Viking('Kevin', 56, 13)
let billy = new Viking('Billy', 35, 17)
let albert = new Viking('Albert', 17, 20)
let jim = new Saxon('Jim', 36, 1)
let frank = new Saxon('Frank', 10, 8)
let bob = new Saxon('Bob', 25, 19)

let battleOfSam = new War();

battleOfSam.addViking(kevin);
battleOfSam.addViking(billy);
battleOfSam.addViking(albert);
battleOfSam.addSaxon(jim);
battleOfSam.addSaxon(frank);
battleOfSam.addSaxon(bob);
console.log(battleOfSam.vikingArmy);
console.log(battleOfSam.saxonArmy);

console.log(battleOfSam.vikingAttack());
console.log(battleOfSam.saxonAttack())
console.log(battleOfSam.vikingArmy);
console.log(battleOfSam.saxonArmy);




