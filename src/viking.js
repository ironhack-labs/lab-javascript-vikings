// Soldier
class Soldier {
    constructor(health, strength) { 
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
    this.health = this.health - damage;

    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health !== 0) {
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
   
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health !== 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        return "A Saxon has died in combat"
    }
}

// War
class War {
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];

    }
    addViking(viking){
        (this.vikingArmy.push(viking))
    }
    addSaxon(saxon){
        (this.saxonArmy.push(saxon))

    }
    vikingAttack(){
         // take random saxon and viking 
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
       // define attack power
        const vikingAttackPower = randomViking.strength;
       // calculate the damage
        const saxonDamage = randomSaxon.receiveDamage(vikingAttackPower);
      // if dead remove
        this.saxonArmy = this.saxonArmy.filter(function (saxon){ 
            return saxon.health > 0;})
            // return result of calling receiveDamage() of a Saxon with the strength of a Viking
            return saxonDamage; 
    }

    saxonAttack(){
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const saxonAttackPower = randomSaxon.strength;
        const vikingDamage = randomViking.receiveDamage(saxonAttackPower)
       this.vikingArmy =this.vikingArmy.filter( function (viking){ return viking.health > 0})
       return vikingDamage;
    }
    
    showStatus(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } return "Vikings and Saxons are still in the thick of battle."
            
           
    }
}
