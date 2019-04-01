// Soldier

class Soldier {
    constructor (healthArg, strengthArg){     
        this.health = healthArg;
        this.strength = strengthArg;
    }
    attack() {
        return this.strength;
    } 
    receiveDamage(damageArg) { 
       this.health -= damageArg;
    } 
}

// // Viking
class Viking extends Soldier{
    constructor (name, healthArg, strengthArg){
        super (healthArg, strengthArg);
        this.name = name;
    } 
    receiveDamage (damageArg) { 
        this.health -= damageArg;
        if (this.health > 0){
        return `${this.name} has received ${damageArg} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    } 
    battleCry (){
        return `Odin Owns You All!`;
    }
} 

// // Saxon
class Saxon  extends Soldier{
    constructor (healthArg, strengthArg){
        super (healthArg, strengthArg);
    } 
    receiveDamage (damageArg) { 
        this.health -= damageArg;
        if (this.health > 0){
        return `A Saxon has received ${damageArg} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
} 


// // War
class War {
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vik){
        this.vikingArmy.push(vik);
    } 
    addSaxon(sax){
        this.saxonArmy.push(sax);
    }
    vikingAttack(){
        let randomIndexVik = Math.floor(Math.random() * this.vikingArmy.length);
        let randomVik = this.vikingArmy[randomIndexVik];
        let randomIndexSax = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSax = this.saxonArmy[randomIndexSax];
        randomSax.receiveDamage(randomVik.attack());  
        
        if (randomSax.health <= 0){
            this.saxonArmy.splice(randomIndexSax,1);
        } 
        return `A Saxon has died in combat`;
    } 

    saxonAttack(){
        let randomIndexVik = Math.floor(Math.random() * this.vikingArmy.length);
        let randomVik = this.vikingArmy[randomIndexVik];
        let randomIndexSax = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSax = this.saxonArmy[randomIndexSax];
        const saxText = randomVik.receiveDamage(randomSax.attack()); 

        if (randomVik.health <= 0){
            this.vikingArmy.splice(randomIndexVik, 1);
        }
        return saxText;
    } 
    showStatus(){
        if (this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        } 
        if (this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survive another day...'
        } 
        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    } 
}

let guerra = new War();
for (let i=0; i<10; i+=1){
    guerra.addViking(new Viking(`${i}barbudo`, 20, 80))
}
console.log();