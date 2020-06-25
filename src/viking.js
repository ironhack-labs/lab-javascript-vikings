// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
attack() {
    return this.strength;
}
receiveDamage(thedamage){
    this.health = this.health - thedamage
}
    
}
// Viking
class Viking extends Soldier{
    constructor(name,health,strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(thedamage){
        this.health = this.health - thedamage
    if(thedamage < this.health){
        return this.name.charAt(0).toUpperCase() + this.name.slice(1) + ' has received ' + thedamage + ' points of damage';
    } else{
         return this.name.charAt(0).toUpperCase() + this.name.slice(1) + ' has died in act of combat';
    }   
}
    battleCry(){
        return 'Odin Owns You All!'
}
}
// Saxon
class Saxon extends Soldier {
    receiveDamage(thedamage){
        this.health = this.health - thedamage
    if(thedamage < this.health){
        return 'A Saxon has received ' + thedamage + 'points of damage';  
    } 
    else {
         return 'A Saxon has died in combat';
    }   
}
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(addViking){
        this.vikingArmy.push(addViking)
    }
    addSaxon(addSaxon){
        this.saxonArmy.push(addSaxon)
    }
        vikingAttack(){
            let randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
            let randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
            let damage = randSaxon.receiveDamage(randViking.strength);
                if(randSaxon.health < damage){
                    this.saxonArmy.slice(0)
                }
            return damage
        
        
    }
    saxonAttack(){
        let randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
            let randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
            let damage = randViking.receiveDamage(randSaxon.strength);
                if(randViking.health < damage){
                    this.saxonArmy.slice(0)
                }
            return damage
    }
    showStatus(){

    }
}
    
