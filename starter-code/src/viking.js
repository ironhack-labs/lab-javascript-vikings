// Soldier
class Soldier{ 
constructor(health, strength){
    this.health = health;
    this.strength = strength;
}
 attack(){
 return this.strength
 } 
 receiveDamage(thedamage){
     this.health -= thedamage;
}
}

// Viking
class Viking extends Soldier { //why enxtend?
    constructor(name, health, strength){
        super(health,strength);//what is the super used for
this.name=name;

    }
attack(){
     return this.strength 
 }
receiveDamage(thedamage){
    //super.receiveDamage(thedamage); why did we use this?
    this.health -= thedamage;
    if (this.health > 0 ){
        return (`${this.name} has received ${this.thedamage} points of damage`);
    } else {
        return (`${this.name} had died in act of combat`);
    }
}
battleCry(){
    return "Odin Owns You All!";

}

}

// Saxon

class Saxon extends Soldier {
constructor(health, strength){
    this.health=health;
    this.strength=strength;
}

receiveDamage(thedamage){
   
    super.receiveDamage(thedamage);
if (this.health>0){
return `A Saxon has received ${this.damage}points of damage`}
else {
    return "A Saxon has died in combat"
}
}

// War
class War {
constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
}
    addViking(aViking){
        this.vikingArmy.push(aViking);
    }
    addSaxon(aSaxon){
        this.saxonArmy.push(aSaxon);
    }
    vikingAttack(){
        let randomSaxon = Math.floor(Math.random()* this.saxonArmy.length);
        let randomViking = Math.floor(Math.random()* vikingArmy.length);
        let health = randomSaxon.health -randomViking.strength;
        if (health === 0){
            this.saxonArmy.splice(Math.random()* saxonArmy.length);
        } else {
            return randomSaxon.receiveDamage(randomViking.strength);
        }
         
    }

    saxonAttack(){
        let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxon];
        let randomVike = Math.floor(Math.random()* this.vikingArmy.length);
        let randomVike = this.vikingArmy[randomVike];
        let result =  randomVike.receiveDamage(randomSaxon.attack());

        if (randomVike.health <=0){
            this.vikingArmy.splice(randomVike);
        }
        return result ;
    }


    showStatus(){
        if (this.saxonArmy.length===0){
            return "Vikings have won the war of the century!"
        } else if  (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day...Saxons have fought for their lives and survive another day...";
        }else {
            return "Vikings and Saxons are still in the thick of battle."
        }

        
    }
    }

