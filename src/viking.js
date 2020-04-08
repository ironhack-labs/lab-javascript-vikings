// Soldier
class Soldier {
    constructor(health,strenght){
        this.health = health;
        this.strenght = strenght;
    };

    attack(){
        return this.strenght

    }

    receiveDamage(damage){
        this.health -= damage
        

    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strenght){
        super(health,strenght);
        this.name = name
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) {
            return '${this.name} has received ${damage} point of damage';
        }
        return `${this.name} has died in act of combat`;

    }
    battleCry(){
        return "Odin Owns You All"

    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health,strenght) {
        super(health,strenght);
    }
    receiveDamage(damage){
        super.receiveDamage(damage);

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        return "A Saxon has died in combat";
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingObj){
        this.vikingArmy.push(vikingObj);
    };

    addSaxon(saxonObj){
        this.saxonArmy.push(saxonObj);

    };

    vikingAttack(){
      let attackedSaxon = this.saxonArmy[
          Math.floor(Math.random()*this.saxonArmy.length)
        ];
        let attackingViking = this.vikingArmy[
            Math.floor(Math.random()*this.vikingArm.length) 
        ];  
        let vikingAttackResult = attackedSaxon.receiveDamage(
            attackingViking.attack()
        );

        if (attackedSaxon.health <= 0) {
            this.saxonArmy = this.saxonArmy.filter((item) => item !== attackedSaxon);
        }
        return vikingAttackResult;
    };

    soldierAttack(attack,defense){
        let message = "";
        message = defense.receiveDamage(attack.attack());
        if (defense instanceof Saxon) {
            this.saxonArmy = this.saxonArmy.filter((item) => item.health > 0);
        }else if(defense instanceof Viking){
        this.vikingArmy = this.vikingArmy.filter((item) => item.health > 0);
    };
       
        return vikingAttackResult;
    }

    saxonAttack(){
        let saxon = this.saxonArmy[
            Math.floor(Math.random()*this.saxonArmy.length)
          ];
          let viking = this.vikingArmy[
              Math.floor(Math.random()*this.vikingArm.length) 
          ];  

          return this.soldierAttack(saxon,viking);
    };

    showStatus(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century"; 
        }else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }

        return "Vikings and Saxons are still in the thick of battle.";
    }
}
