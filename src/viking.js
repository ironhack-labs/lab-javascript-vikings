// Soldier
class Soldier {
    constructor(health, strength) {
        this.health= health;
        this.strength= strength;
    }
attack(){
    return this.strength
}
receiveDamage(theDamage){
    this.health= this.health - theDamage
}
}





// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        super(health, strength);
        this.name = name;
    }
attack(){
    return this.strength
}
receiveDamage(theDamage){
    this.health= this.health - theDamage;
    if (this.health>0){
        return (`${this.name} has received ${theDamage} points of damage`)
    }
    else return `${this.name} has died in act of combat`
}
battleCry(){
    return ('Odin Owns You All!')
}
}






// Saxon
class Saxon extends Soldier{
    receiveDamage(theDamage){
        this.health= this.health - theDamage;
        if (this.health>0){
            return `A Saxon has received ${theDamage} points of damage`
        }
        else return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
addViking(viking){
    this.vikingArmy.push(viking);
}
addSaxon(saxon){
    this.saxonArmy.push(saxon);
}
vikingAttack(){
    let randomVikingIndex= Math.floor(Math.random()*this.vikingArmy.length);
    let vikingRandom= this.vikingArmy[randomVikingIndex]
    let randomSaxonIndex= Math.floor(Math.random()*this.saxonArmy.length);
    let saxonRandom= this.saxonArmy[randomSaxonIndex]
    let vikingAttack= vikingRandom.attack()
    let saxonDefend= saxonRandom.receiveDamage(vikingAttack);

    if (saxonRandom.health <= 0){
        this.saxonArmy.splice(saxonRandom,1)
    }
    return saxonDefend
}
saxonAttack(){
    let randomVikingIndex= Math.floor(Math.random()*this.vikingArmy.length);
    let vikingRandom= this.vikingArmy[randomVikingIndex]
    let randomSaxonIndex= Math.floor(Math.random()*this.saxonArmy.length);
    let saxonRandom= this.saxonArmy[randomSaxonIndex]
    let saxonAttack= saxonRandom.attack()
    let vikingDefend= vikingRandom.receiveDamage(saxonAttack);

    if (vikingRandom.health <= 0){
        this.vikingArmy.splice(vikingRandom,1)
    }
    return vikingDefend
}
showStatus(){
    if (this.saxonArmy.length <= 0){
        return ('Vikings have won the war of the century!')
    }
    else if(this.vikingArmy.length<=0){  
        return ('Saxons have fought for their lives and survived another day...')
    }
    else return ('Vikings and Saxons are still in the thick of battle.')
}
}
