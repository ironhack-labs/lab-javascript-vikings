// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;

    }

    attack(){
        return this.strength;
    }
   
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength)
    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(Viking){
        vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        saxonArmy.push(Saxon);
    }

    vikingAttack(){
        let oldHealth = saxon.health;
        let newHealth = Saxon.receiveDamage(Viking.strength);
        if (newHealth < 0) {
            
        } else {
            return 
        }
    


        expect(saxon.health).toEqual(oldHealth - viking.strength);

    }

//  #### `vikingAttack()` method

//  A `Saxon` (chosen at random) has their `receiveDamage()` method 
//  called with the damage equal to the `strength` of a `Viking` (also chosen at random). 
//  This should only perform a single attack and the `Saxon` doesn't get to attack back.
 
//  - should be a function
//  - should receive **0 arguments**
//  - should make a `Saxon` `receiveDamage()` equal to the `strength` of a `Viking`
//  - should remove dead saxons from the army
//  - should return **result of calling `receiveDamage()` of a `Saxon`** with the `strength` 
//  of a `Viking`



 saxonAttack(){

 }
 showStatus(){

 }


}
