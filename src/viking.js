// Soldier
class Soldier {
    constructor (health, strength){
        
this.health = health;
this.strength = strength;

}

attack() {
  return this.strength;
    
}

receiveDamage(damage) {
    this.health -= damage;



}

    }


// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
     super(health, strength);

     this.name = name;
      
    }
    receiveDamage(damage) {
        this.health -= damage;
     

    if(this.health) 
    {return `${this.name} has received ${damage} points of damage`;}
   else return `${this.name} has died in act of combat`;


}

      
battleCry(){
    return "Odin Owns You All!"    
}
}
 




// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage;

    if(this.health) 
    {return `A Saxon has received ${damage} points of damage`;}
    else return `A Saxon has died in combat`;



}
}
// War
class War {
    constructor(){

this.vikingArmy = [];
this.saxonArmy = [];
}

addViking(Viking){
    this.vikingArmy.push(Viking)
}

addSaxon(Saxon){
this.saxonArmy.push(Saxon);
}

vikingAttack(){
    let saxonFirst = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let vikingFirst = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let resultFirst = saxonFirst.receiveDamage(vikingFirst.attack());

    if(saxonFirst.health <= 0){this.saxonArmy.splice(this.saxonArmy.indexOf(saxonFirst), 1)};
        return resultFirst;
}

saxonAttack(){
    let saxonSecond = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let vikingSecond = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let resultSecond = vikingSecond.receiveDamage(saxonSecond.attack());

    if(vikingSecond.health <= 0){this.vikingArmy.splice(this.vikingArmy.indexOf(vikingSecond), 1)};
        return resultSecond;
}

showStatus(){
    if (this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survived another day..."
    } else if (this.saxonArmy.length && this.vikingArmy.length){
        return "Vikings and Saxons are still in the thick of battle."
    }
}
}