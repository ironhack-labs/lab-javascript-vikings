// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength ;

    }

    receiveDamage(theDamage) {
        this.health -= theDamage;
    }
}

// Viking

    class Viking extends Soldier{
        constructor(name, health, strenght){
            super(health, strenght);
            this.name = name;
        }
        receiveDamage(theDamage){
            this.health -= theDamage;
            if(this.health >= 1){
                return `${this.name} has received ${theDamage} points of damage`;
            }
                return `${this.name} has died in act of combat`;
           
        }
        battleCry() {
            return 'Odin Owns You All!';
        }
    }


// Saxon

    class Saxon  extends Soldier{

    
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if(this.health >= 1){
            return `A Saxon has received ${theDamage} points of damage`;
        } 
            return `A Saxon has died in combat`;
       
    }
    }

// War



class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        
        let saxonIndex = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let vikingIndex = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let weakSaxon = this.saxonArmy[saxonIndex];
        let strongViking =this.vikingArmy[vikingIndex];
        let damage =  weakSaxon.receiveDamage(strongViking.attack());

        if (weakSaxon.health <= 0){
            this.weakSaxon.splice(saxonIndex, 1);
        } return damage;

        
       
    }
    saxonAttack() {
        let saxonIndex = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let vikingIndex = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let strongSaxon = this.saxonArmy[saxonIndex];
        let weakViking =this.vikingArmy[vikingIndex];
        let damage =  strongSaxon.receiveDamage(weakViking.attack());
        if (weakViking.health <= 0){
            this.weakViking.splice(vikingIndex, 1);
        } return damage;
}
    
