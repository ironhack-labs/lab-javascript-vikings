// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }
    
    receiveDamage(the_damage){

      this.health =  this.health - the_damage;

    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength);
        this.name= name;
    }

    

    attack(){
        return this.strength;
    }
    
    receiveDamage(the_damage){
        this.health = this.health - the_damage;

        if(this.health > 0){
            return `${this.name} has received ${the_damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }

}

//let viking1 = new Viking("pepe",30,23);
//console.log(viking1)

// Saxon
class Saxon extends Soldier {
    constructor(health,strength){
        super(health,strength);
    }

    attack(){
        return this.strength;
    }

    receiveDamage(the_damage){
        this.health = this.health - the_damage;

        if(this.health > 0){
            return `A Saxon has received ${the_damage} points of damage`;
        }
        else {
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

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    //Armies Attack

    vikingAttack(){
         let value =this.saxonArmy[0].receiveDamage(this.vikingArmy[0].attack());
         if(this.saxonArmy[0].health <=0){
            this.saxonArmy.pop(this.saxonArmy[0]);
        }
        return value;
    }

    saxonAttack(){
        let value = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].attack());
        if(this.vikingArmy[0].health <=0){
            this.vikingArmy.pop(this.vikingArmy[0]);
        }
        return value;
       
   }
    

    showStatus(){
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`;
        }
        else if(this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`;
        }
        else{
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}
