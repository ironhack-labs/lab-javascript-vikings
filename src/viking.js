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
        this.name = name    
    }

    receiveDamage(damage){

    super.receiveDamage(damage);
    
    if(this.health > 0){     

    return `${this.name} has received ${damage} points of damage`
    
    }else if (this.health <= 0 ){

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

        super.receiveDamage(damage)

        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage` ;
        } else if(this.health <= 0){
            return `A Saxon has died in combat`;
        }
    }
}


// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        let randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length))];
        let randomSaxonInd = Math.floor(Math.random () * (this.saxonArmy.length));
        let randomSaxon = this.saxonArmy[randomSaxonInd];
        let receiveDamageOfSaxon = this.randomSaxon.receiveDamage(this.randomViking.strength)

        if(randomSaxon.health <= 0){
           this.saxonArmy.splice(randomSaxonInd,1);
        }
        
        return receiveDamageOfSaxon
    }

    saxonAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length))] ;
        let randomVikingInd = Math.floor(Math.random() * (this.vikingArmy.length));
        let randomViking = this.vikingArmy[randomVikingInd];
        let receiveDamageOfViking = this.randomViking.receiveDamage(this.randomSaxon.strength);
            
        if (this.randomViking.health <= 0){
            this.vikingArmy.splice(randomVikingInd,1);

        }
        return receiveDamageOfViking;
    }

    showStatus(){

        if(this.saxonArmy.length === 0){
            return`Vikings have won the war of the century!`
        } else if (this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        }else {
           return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}




const Gerald = new Saxon(550, 150);
const Peter = new Saxon(400, 120);
const Patrique = new Saxon(120, 40);
const Steven = new Saxon(900, 20);
const Merlin = new Saxon(200, 320);
 

const Lorkis = new Viking('Lorkis', 500, 140);
const Torus = new Viking('Torus', 320, 160);
const Melkiaur = new Viking('Melkiaur', 850, 30);
const Paskal = new Viking('Paskal', 150, 15);
const Eskor = new Viking('Esko', 180, 380);