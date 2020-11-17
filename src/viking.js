// Soldier
class Soldier {
        constructor(health, strength) {
                this.health = health;
                this.strength = strength;
        }
        attack() {
                return this.strength;
        }
        receiveDamage(damage) {
                this.health -= damage;
        }
}

// Viking
class Viking extends Soldier {
        constructor(name, health, strength) {
                super(health, strength);
                this.name = name;
        }
        receiveDamage(damage) {
                this.health -= damage;

                return this.health>0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
        }
        battleCry() {
                return "Odin Owns You All!";
        }

}


// Saxon
class Saxon extends Soldier {
        constructor(health, strength) {
                super(health, strength);
        }
        receiveDamage(damage) {
                this.health -= damage;

                return this.health >0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
        }

}

// War
class War {
        constructor() {
                this.vikingArmy = [];
                this.saxonArmy = [];
        }
        
        addViking(Viking){
                this.vikingArmy.push(Viking);
        }

        addSaxon(Saxon){
                this.saxonArmy.push(Saxon);
        }
        vikingAttack(){
                let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)] ;
                let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)] ;
                // let indexRandomViking = this.vikingArmy.indexOf(randomViking);
                let indexRandomSaxon = this.saxonArmy.indexOf(randomSaxon);
                
                const a = randomSaxon.receiveDamage(randomViking.strength);
                if(randomSaxon.health <=0){ this.saxonArmy.splice(indexRandomSaxon,1)};

                return a;
                
        }
        saxonAttack(){
                let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)] ;
                let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)] ;
                let indexRandomViking = this.vikingArmy.indexOf(randomViking);
                // let indexRandomSaxon = this.saxonArmy.indexOf(randomSaxon);
                
                const a = randomViking.receiveDamage(randomSaxon.strength);
                if(randomViking.health <=0){ this.vikingArmy.splice(indexRandomViking,1)};

                return a;

        }
        showStatus(){
                if(this.saxonArmy.length == 0){
                        return "Vikings have won the war of the century!"
                }
                else if (this.vikingArmy.length == 0){
                        return "Saxons have fought for their lives and survived another day..."
                }
                else if (this.saxonArmy.length != 0 && this.vikingArmy != 0){
                        return "Vikings and Saxons are still in the thick of battle."
                }
        }
}
