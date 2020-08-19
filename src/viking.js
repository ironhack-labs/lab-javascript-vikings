// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health-damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health = this.health-damage;
        if(this.health>0)
        {
            return `${this.name} has received ${damage} points of damage`
        }
        else
        {
            return `${this.name} has died in act of combat`
        }
    
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health = this.health-damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`;
        }else {
            return 'A Saxon has died in combat'
        }

    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
addViking(ObjV){
    this.vikingArmy.push(ObjV)
}
addSaxon(ObjS){
    this.saxonArmy.push(ObjS);
}
vikingAttack(){
    let saxonIndex = Math.floor(Math.random()*(this.saxonArmy.length - 1));
    let saxon = this.saxonArmy[saxonIndex];
    let vikingIndex = Math.floor(Math.random()*(this.vikingArmy.length - 1));
    let viking = this.vikingArmy[vikingIndex];
    let val = saxon.receiveDamage(viking.strength);
    if(saxon.health<=0){
        this.saxonArmy.splice(saxonIndex,1)
    }
    return val;
}   
saxonAttack(){
    let vikingIndex1 = Math.floor(Math.random()*(this.VikingArmy.length - 1));
    let viking1= this.vikingArmy[vikingIndex1];
    console.log(viking1);
    let saxonIndex1 = Math.floor(Math.random()*(this.saxonArmy.length - 1));
    let saxon1 = this.saxonArmy[saxonIndex1];
    let valS = viking1.receiveDamage(saxon1.strength);
    if(viking1.health<=0){
        this.vikingArmy.splice(vikingIndex1,1)
    }
    return valS;
}
showStatus(){
    if(this.saxonArmy) return 'Vikings have won the war of the century!'
    if(this.vikingArmy) return 'Saxons have fought for their lives and survived another day...'
    if(this.saxonArmy && this.vikingArmy) return 'Vikings and Saxons are still in the thick of battle.'
}
     


}
