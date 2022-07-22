// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack (){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
        console.log(this.health)
    }        
    
}





// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        super(health, strength);
    
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            console.log(this.health)
            return `${this.name} has received ${damage} points of damage `;
        }
        else {
            return `${this.name} has died in combat`
        }
    }
    battleCry(){
        return 'Odin Owns You All'
    }
     
}

let Jason= new Viking('Jason',100,100);
console.log(Jason.receiveDamage(50));
console.log(Jason.battleCry());

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if (this.health >= 0){
            console.log(this.health)
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
            
    }
}

let newSaxon= new Saxon(100,100);
let newSaxon2= new Saxon(80,100);
let newSaxon3= new Saxon(60,100);
console.log(newSaxon.receiveDamage(50));
console.log(newSaxon2.receiveDamage(30));
// War
class War {}
