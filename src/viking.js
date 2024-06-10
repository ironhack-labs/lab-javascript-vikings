// Soldier
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

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
    super(health, strength)
    this.name = name;
    }

    attack(){
       return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;

        if (damage < this.health){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{

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
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = [];
    }
    

    addViking(viking){
    this.vikingArmy.push(viking); // Enviamos el nuevo soldado al array de vikingos
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){

        //Declaramos una varaible para almacenar uno de los soldados sajones por un lado y vikingos
        // por el otro;

            const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
            const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        //Declaramos otra variable para elegir a uno de esos soldados.
            
            const randomSaxon = this.saxonArmy[randomSaxonIndex];
            const randomViking = this.vikingArmy[randomVikingIndex];
        
        //Declaramos que el daño recibido por un sajón es igual a la fuerza de un vikingo

            const saxonDamageReceived = randomSaxon.receiveDamage(randomViking.strength);
        
        // Si la vida de un sajón es menor o igual a 0, restamos un sajón del ejército sajón;

            if (randomSaxon.health <= 0) {
                this.saxonArmy.splice(randomSaxonIndex, 1);
            }
        
            //Devolvemos la vida del sajón, puede ser negativa, por lo que muere;

            return saxonDamageReceived;
        }
    saxonAttack(){

            const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
            const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
            
            const randomSaxon = this.saxonArmy[randomSaxonIndex];
            const randomViking = this.vikingArmy[randomVikingIndex];
        
            const vikingDamageReceived = randomViking.receiveDamage(randomSaxon.strength);
        
            if (randomViking.health <= 0) {
                this.vikingArmy.splice(randomVikingIndex, 1);
            }
        
            return vikingDamageReceived;

    }
    showStatus(){

        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
      
    }
}
