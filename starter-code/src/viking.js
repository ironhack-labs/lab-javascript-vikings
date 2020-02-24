// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
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
        this.health -= damage;
        if(this.health > 0){  
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }  
     } battleCry(){
                return 'Odin Owns You All!'
            }
        } 
    


// Saxon
class Saxon extends Soldier {
    // ataqueSajon
    attack(){
        return this.strength;
    }
    //recibe un daño
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){ 
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }

    }

    
}

// War
class War {
    
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking (viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        //escoger un vikingo aleatoriamente.
        let indiceVikingoAleatorio = Math.floor(Math.random()*this.vikingArmy.length);
        let vikingoAleatorio = this.vikingArmy[indiceVikingoAleatorio];
        //escoger a un sajo aleatoriamente.
        let indiceSajonAleatorio = Math.floor(Math.random()*this.saxonArmy.length);
        let sajonAleatorio = this.saxonArmy[indiceSajonAleatorio];
        //añadirle daño al sajon
        let strength = vikingoAleatorio.strength;
        let resultado = sajonAleatorio.receiveDamage(strength);
        // sacar del campo de batalla a Sajones muertos
        if (sajonAleatorio.health <= 0) {
            this.saxonArmy.splice(indiceSajonAleatorio);
        }
        // regresar el resultado
        return resultado;
    }
    saxonAttack(){
        //escoger un vikingo aleatoriamente.
        let indiceVikingoAleatorio = Math.floor(Math.random()*this.vikingArmy.length);
        let vikingoAleatorio = this.vikingArmy[indiceVikingoAleatorio];
         //escoger a un sajo aleatoriamente.
         let indiceSajonAleatorio = Math.floor(Math.random()*this.saxonArmy.length);
         let sajonAleatorio = this.saxonArmy[indiceSajonAleatorio];
         //añadirle daño al vikingo
        let strength = sajonAleatorio.strength;
        let resultado = vikingoAleatorio.receiveDamage(strength);
        if(vikingoAleatorio.health <= 0){
            this.vikingArmy.splice(indiceVikingoAleatorio);
        }

        return resultado;
    }
    showStatus(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
 