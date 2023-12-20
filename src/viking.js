// Soldier
class Soldier {
constructor(health, strength) {
    this.health = health;
    this.strength = strength;
}

attack() {
    return this.strength
}

receiveDamage(damage) {
    this.health = this.health - damage;

    
}


}
// Viking
class Viking extends Soldier {
    constructor (name,health, strength){
        super(health, strength);
        this.name = name;
}

receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;

}

}

battleCry() {
    return "Odin Owns You All!"
}

}

// Saxon
class Saxon extends Soldier {
        constructor (health, strength){
            super(health, strength);
    }
    
    receiveDamage(damage) {
        this.health -= damage;
    
        if (this.health > 0) {
          return `A Saxon has received ${damage} points of damage`;
        } else {
          return `A Saxon has died in combat`;
    
    }
    }
}

// War
class War {

    constructor(){

        this.vikingArmy = [];
        this.saxonArmy = [];
    }


    addViking(viking) {
        this.vikingArmy.push(viking);

    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let randomVikingIndex = [Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxonIndex = Math.floor(Math.random() * this.SaxonArmy.length);


        let randomViking = this.vikingArmy[randomVikingIndex];
       damage = randomViking.strength;

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }

    }


    saxonAttack(){

        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];


    }
    showStatus(){

    }



}



        
    
    


//__________________________________________________//

// should return "NAME has received DAMAGE points of damage", if the Viking is still alive
// should return "NAME has died in act of combat", if the Viking dies
/*
move() {
    dice = Math.floor((Math.random() *6) +1)
    this.position =(this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if(this.cash <= 0){
        console.log('bye,see you at Ironbeers');
    }

    */



/*class player {
    constructor(name,color) {
    this.name = name; 
    this.color = color;
    this.position = 0;
    this.cash = 1000;
    }
    
    move() {
        dice = Math.floor((Math.random() *6) +1)
        this.position =(this.position + dice) % squares.length;
        this.cash += squares[this.position];
        if(this.cash <= 0){
            console.log('bye,see you at Ironbeers');
        }
    }
    displayInfo(){
        return console.log(`${this.name} is at position ${this.position} and has ${this.cash}`)
    }
    }
    
    
    let player1 = new player('Diogo','Blue')
    let player2 = new player('Diogo','Blue')
    let player3 = new player('Diogo','Blue')

    class Bigboss extends player {
        constructor(name, color, amountOfCoolness) {
        super(name,color)
        this.amountOfCoolness = amountOfCoolness
        }
        */