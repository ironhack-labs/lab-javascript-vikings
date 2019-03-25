// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return (this.strength);    
    }


    receiveDamage(pDamage){
        this.health-=pDamage;
    }
}
    

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(pDamage){
        this.health-=pDamage;
        if (this.health>0) return `${this.name} has received ${pDamage} points of damage`
        else return `${this.name} has died in act of combat`;
    }

    battleCry(){
        return "Odin Owns You All!";
    } 
}


// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength);
    }  
    receiveDamage(pDamage) {
        this.health-=pDamage;

        if (this.health>0) return `A Saxon has received ${pDamage} points of damage`
        else return `A Saxon has died in combat`;            
    }

}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];     
    }

    addViking(object){
        //this.vikingArmy.push(new Viking(object.name, object.health, object.strength)); 
        this.vikingArmy.push(object); 
    }   

    addSaxon(object){
        //this.saxonArmy.push(new Saxon(object.health, object.strength));   
        this.saxonArmy.push(object); 
    }

    vikingAttack() {
        let positionViking=Math.floor(Math.random() * (this.vikingArmy.length - 1));
        let positionSaxon=Math.floor(Math.random() * (this.saxonArmy.length - 1));
        let theViking=this.vikingArmy[positionViking];
        let theSaxon=this.saxonArmy[positionSaxon];
        let resultSaxon=theSaxon.receiveDamage(theViking.strength);
        if (theSaxon.health<=0) this.saxonArmy.splice(positionSaxon,1);
        return resultSaxon;      
    }

    saxonAttack(){
        let positionViking=Math.floor(Math.random() * (this.vikingArmy.length - 1));
        let positionSaxon=Math.floor(Math.random() * (this.saxonArmy.length - 1));
        let theViking=this.vikingArmy[positionViking];
        let theSaxon=this.saxonArmy[positionSaxon];
        let resultViking=theViking.receiveDamage(theSaxon.strength);
        if (theViking.health<=0) this.vikingArmy.splice(positionViking,1);
        return resultViking;          
    }
    showStatus() {
        if (this.saxonArmy.length==0) return "Vikings have won the war of the century!"
        else if (this.vikingArmy.length==0) return "Saxons have fought for their lives and survive another day..."
        else return "Vikings and Saxons are still in the thick of battle.";
    }
}
