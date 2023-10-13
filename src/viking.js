// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength = strength;
    }
    //attack() method

     attack() {
        return this.strength;
    }
   //receiveDamage() method
   receiveDamage(damage){
    this.damage =  damage;
    this.health -= damage;
   }
 

}




// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
       super(health,strength);
        this.name = name;
    }
    //receiveDamage() method
    receiveDamage(damage){
        this.damage =  damage;
        this.health -= damage;
        if(this.health > 0){
            return (`${this.name} has received ${this.damage} points of damage`)
        }
        else {

            return (`${this.name} has died in act of combat`)
        }
       }
      // battleCry() method
      battleCry() {
       return `Odin Owns You All!`;
        
      }

}

// Saxon
class Saxon extends Soldier{

//receiveDamage() {method
    receiveDamage(damage) {
        this.damage =  damage;
        this.health -= damage;
        if(this.health > 0){
            return (`A Saxon has received ${damage} points of damage`);
        }
        else {

            return (`A Saxon has died in combat`);

    }
  } 
}
  
// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    //addViking() method
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    //addSaxon() method
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
 //Armies Attack
 //vikingAttack() method
  vikingAttack() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];

    const damage = randomViking.strength;
    
    const result = randomSaxon.receiveDamage(damage);

    if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxonIndex, 1); 
    }

    return result;
}
   //saxonAttack() method
   saxonAttack(){ 
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];

    const damage = randomSaxon.strength;
    const result = randomViking.receiveDamage(damage);

    if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomVikingIndex, 1);; 
    }

    return result;
}


//showStatus() method
showStatus() {
    if (this.saxonArmy.length === 0 ){
        return `Vikings have won the war of the century!`;
    }
    if (this.vikingArmy.length === 0){
        return `Saxons have fought for their lives and survived another day...`
    }
    else {
        return`Vikings and Saxons are still in the thick of battle.`
    }
}

}