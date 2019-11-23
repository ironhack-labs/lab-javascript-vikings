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

// Vikingg
class Viking extends Soldier{

    constructor(name, health, strength){
        
        super(health, strength);
        this.name = name;

        // this.health = health;

        // this.strength = strength;


    }

    receiveDamage(damage){

        this.health -= damage;

        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }else{
            return `${this.name} has died in act of combat`
        }

    }

    battleCry(){
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){
        this.health -= damage;

        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }else{
            return `A Saxon has died in combat`
        }

    }



}

// War
class War {

    constructor() {
       this.vikingArmy = [];
       this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let rand = Math.random();

        let totalVikings = vikingArmy.length;
        let totalSaxons = saxonArmy.length;

        let randomVikingIndex = Math.floor(rand * totalVikings);
        let randomViking = vikingArmy[randomVikingIndex];

        let randomSaxonIndex = Math.floor(rand * totalSaxons);
        let randomSaxon = vikingArmy[randomSaxonIndex];

        let a = randomSaxon.receiveDamage(randomViking.strength);

        if(a.contains("A Saxon has died")){
            this.saxonArmy.splice(randomSaxonIndex,1)
        }

    }

    saxonAttack() {

    }

    showStatus() {

    }


}
