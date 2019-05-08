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
        if (damage === null || undefined) {
            return;
        }

        this.health -= parseFloat(damage);

        //TODO esto parece que es death
        if (this.health < 0) {
          // this.health = 0;
            /* los test requieren que healt sea menor a 0 */
        }
    }

}

// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {

        super(health, strength);

        this.name = name;
    }


    receiveDamage(damage) {
        super.receiveDamage(damage);

        return this.getMensajeOnDamage(damage);


    }

    getMensajeOnDamage(damage) {
        if (this.health === 0) {
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;
        }
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {


    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);

        return this.getMensajeOnDamage(damage);


    }

    getMensajeOnDamage(damage) {
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${damage} points of damage`;
        }
    }


}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];

    }

    addViking(v){
        this.vikingArmy.push(v);
    }

    addSaxon(s){
        this.saxonArmy.push(s);
    }

    vikingAttack(){

        /* no esta claro que se require*/
        let v=this.vikingArmy[0];
        let s=this.saxonArmy[0];

        let mensaje= s.receiveDamage(v.strength);

        if(s.health<=0){
            //esta muerto el sax
            let indexOf=this.saxonArmy.indexOf(s);
            this.saxonArmy.splice(indexOf,1);
        }

        return mensaje;
    }


    saxonAttack(){

        /* no esta claro que se require*/
        let v=this.vikingArmy[0];
        let s=this.saxonArmy[0];

        let mensaje= v.receiveDamage(s.strength);

        if(v.health<=0){
            //esta muerto el sax
            let indexOf=this.vikingArmy.indexOf(v);
            this.vikingArmy.splice(indexOf,1);
        }

        return mensaje;
    }

}
