export class war {
    vikingArmy = [];
    saxonsArmy = [];
    vikingArmy: Viking[];
    saxonsArmy: Saxon[];

    constructor() {}

    addViking(viking: Viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon: Saxon){
        this.saxonsArmy.push(saxon);
    }

    vikingAttack(atacker, victim) {
       const victim = vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]; 
    }
    
}