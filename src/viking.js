// Soldier
class Soldier {

    constructor (health,strength) {
    this.health = health;
    this.strength = strength
}
//metodos soldier
attack() {
     
    return this.strength
};

receiveDamage(damage) {

    this.health = this.health - damage
}
}

// Viking
class Viking extends Soldier {

    constructor (name,health , strength) {
      super (name,health , strength)

    this.name = name
    this.health = health
    this.strength = strength }

    //metodos viking

    receiveDamage(damage){
        
        this.health = this.health - damage
        let isStillAlive = `${this.name} has received ${damage} points of damage`
        let vikingDies= `${this.name} has died in act of combat`
        if ( this.health > 0 ) {
            return isStillAlive
        } else {
            return vikingDies
        }
    }
    
    battleCry(){
        return `Odin Owns You All!`

    }
}

// Saxon
class Saxon extends Soldier {

//metodos Saxon

receiveDamage(damage){
        
    this.health = this.health - damage
    let isStillAlive = `A Saxon has received ${damage} points of damage`
    let saxonDies= `A Saxon has died in combat`
    if ( this.health > 0 ) {
        return isStillAlive
    } else {
        return saxonDies
    }
}
}
// War
class War {
    
    constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];

    };
//metodo agregar un viking al ejercito viking
addViking (vikingo1) {
    this.vikingArmy.push (vikingo1)
    console.log (this.vikingArmy)
};


 
//metodo agregar un saxon al ejercito saxon 
 addSaxon (saxon1) {
    this.saxonArmy.push(saxon1)
    console.log (this.saxonArmy)
 };






//ataque vikingo
vikingAttack(){
    let vikingRamdom = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];console.log(vikingRamdom)
    let saxonRamdom =this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];console.log(saxonRamdom)
    

    let damage=vikingRamdom.strength
    let indexSaxonRandom= this.saxonArmy.indexOf(saxonRamdom)
    console.log(indexSaxonRandom) 
    if (damage >= saxonRamdom.health){ 
        this.saxonArmy.splice(indexSaxonRandom,1)
        
    }
    console.log(vikingRamdom.strength)
    console.log(saxon2.health)
    return saxonRamdom.receiveDamage(damage)
};
//ataque saxon
saxonAttack(){
    let vikingRamdom = this.vikingArmy [Math.floor (Math.random () *this.vikingArmy.length )] ;console.log(vikingRamdom)
    let saxonRamdom = this.saxonArmy [Math.floor (Math.random () *this.saxonArmy.length )] ;console.log(saxonRamdom)
    let damage = saxonRamdom.strength;console.log(damage)
    let indexVikingRandom = this.vikingArmy.indexOf (vikingRamdom) ;console.log(indexVikingRandom)
    console.log(vikingRamdom.health)
    if (damage >= vikingRamdom.health ) {
        this.vikingArmy.splice( indexVikingRandom,1)
    }

    
    return vikingRamdom.receiveDamage(damage) 
};
//show status
showStatus(){
if (this.vikingArmy.length <= 0) {
    return `Saxons have fought for their lives and survived another day...`
}else if (this.saxonArmy.length <= 0){
    return `Vikings have won the war of the century!`
}else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
    return `Vikings and Saxons are still in the thick of battle.`
}


}

}






let vikingo1= new Viking("Raknar",50,60)
let vikingo2= new Viking("Ivar",80,50)
let saxon1= new Saxon(506,601)
let saxon2= new Saxon(200,400)
console.log(saxon1)
console.log(vikingo1)
let war1= new War

war1.addViking(vikingo1)
war1.addViking(vikingo2)
war1.addSaxon(saxon1)
war1.addSaxon(saxon2)

console.log(war1)
console.log(this.saxonArmy)
war1.vikingAttack()
war1.saxonAttack()
console.log(war1.vikingArmy[Math.floor(Math.random()*war1.vikingArmy.length)])