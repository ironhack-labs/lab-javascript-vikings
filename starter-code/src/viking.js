// Soldier
//class : Elle fournit uniquement une syntaxe plus simple pour créer des objets et manipuler l'héritage.
//constructor function pour construire l'objet Soldier
// Objet : JavaScript est conçu autour d'un paradigme simple, basé sur les objets. 
// Un objet est un ensemble de propriétés et une propriété est une association entre un nom (aussi appelé clé) et une valeur. 
// La valeur d'une propriété peut être une fonction, auquel cas la propriété peut être appelée « méthode ».


class Soldier {
    constructor(health, strength){
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


// // Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health,strength);
        this.name = name;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// // Saxon
class Saxon extends Soldier{
    constructor(health,strength){
        super(health,strength);
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
    
}

// // War
// class War {}

