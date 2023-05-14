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
         this.health -= damage;
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength); 
        this.name = name;
    }

    receiveDamage(damage){
        super.receiveDamage(damage);
       
        if(this.health > 0){
        return `${this.name} has received ${damage} points of damage`;
        }  else {
            return `${this.name} has died in act of combat`;
      } 
    }
    
    battleCry(){
        return 'Odin Owns You All!';
    } 
}

// Saxon
class Saxon extends Soldier{

    receiveDamage(damage){
        super.receiveDamage(damage);

        if(this.health > 0){
          return `A Saxon has received ${damage} points of damage`;  
        }  else{ 
            return "A Saxon has died in combat";
            
        }
    }
}


// War
class War{
    constructor(){

    }
    addViking(Viking){
        vikingArmy = [];
        vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        saxonArmy = [];
        saxonArmy.push(Saxon);
    }
    vikingAttack(){
        saxonArmy.receiveDamage();
    }

    saxonAttack(){
        vikingArmy.receiveDamage();
    }
    showStatus(){
        if(saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        } else if (vikingArmy.length === 0){
            return `Saxon have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}
