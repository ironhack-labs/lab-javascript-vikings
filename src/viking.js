// Soldier
class Soldier {
    constructor(health, strength){
        this.health=health;
        this.strength=strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(the_damage){
        if(the_damage>0) this.health-=the_damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name=name;
    }

    attack(){
       return super.attack();
    }

    receiveDamage(the_damage){
        super.receiveDamage(the_damage);
        if(this.health) return this.name +" has received "+ the_damage + ` points of damage`;
        else if(this.health === 0) return this.name + " has died in act of combat";   
    }

    battleCry(){
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health,strength);
    }

    attack(){
        return super.attack();
     }

     receiveDamage(the_damage){
        super.receiveDamage(the_damage);
        if(this.health) return "A Saxon has received "+ the_damage + ` points of damage`;
        else if(this.health === 0) return "A Saxon has died in combat";   
    }

}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking){ 
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        
    }

    saxonAttack(){

    }
    
    showStatus(){

    }



}
