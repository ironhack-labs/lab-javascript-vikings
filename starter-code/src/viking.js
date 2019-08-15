// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health;
        this.strength=strength;
    }
        attack(){
            return this.strength;
        }

        receiveDamage(damage){
            this.health=this.health-damage;

        }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name=name;
    }

    receiveDamage(damage){
        this.health=this.health-damage
        if(this.health>0) return (`${this.name} has received ${damage} points of damage`)
        else return(`${this.name} has died in act of combat`)

    }
    battleCry(){
        return("Odin Owns You All!")

    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
receiveDamage(damage){
    this.health=this.health-damage;
    if(this.health>0) return(`A Saxon has received ${damage} points of damage`)
    else return ("A Saxon has died in combat")
}

}

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];

    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
      // var oldHealth=saxon.health;
      let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
      let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);

      let attackResult = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack())
      this.saxonArmy = this.saxonArmy.filter(e=>{
          return e.health>0;
      });
      return attackResult;
    }

    saxonAttack(){
        let randomViking = Math.floor(Math.random()*this.vikingArmy.length);

        let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);

        let attackResult = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack())

        this.vikingArmy = this.vikingArmy.filter(e=>{
            return e.health>0;
        });
        return attackResult;
    }

    showStatus(){
        if(this.saxonArmy.length===0) return ("Vikings have won the war of the century!")
        else if(this.vikingArmy.length===0) return ("Saxons have fought for their lives and survive another day...")

        else return ("Vikings and Saxons are still in the thick of battle.")


    }
}

    


