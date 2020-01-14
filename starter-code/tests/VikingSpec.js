describe('Soldier', () => {
  let soldier;
  const strength = 150;
  const health = 300;

  beforeEach(() => {
    soldier = new Soldier(health, strength);
  });

  describe('class', () => {
  
  });

  describe('attack() method', () => {
    

  describe('receiveDamage() method', () => {
   
});

describe('Viking', () => {
  let viking;
  const name = 'Harald';
  const strength = 150;
  const health = 300;

  beforeEach(() => {
    viking = new Viking(name, health, strength);
  });

 

  describe('class', () => {
    
  });

  describe('attack() method', () => {
  
  });

  describe('receiveDamage() method', () => {
   
  });
});

describe('Saxon', () => {
  let saxon;
  const health = 60;
  const strength = 25;

  beforeEach(() => {
    saxon = new Saxon(health, strength);
  });

  

  describe('class', () => {
    
    
  });

  describe('attack() method', () => {

  });
});

describe('War', () => {
  let viking, saxon, war;

  function generateViking() {
    const name = 'Harald';
    const strength = 150;
    const health = 300;
    return new Viking(name, health, strength);
  }

  function generateSaxon() {
    const health = 60;
    const strength = 25;
    return new Saxon(health, strength);
  }

  beforeEach(() => {
    viking = generateViking();
    saxon = generateSaxon();
    war = new War();
  });

  describe('class', () => {

  });

  describe('addViking() method', () => {

  });

  describe('addSaxon() method', () => {
   
  });

  describe('Armies Attack', () => {
    beforeEach(() => {
      war.addViking(viking);
      war.addSaxon(saxon);
    });

    describe('vikingAttack() method', () => {
     
    });

    describe('saxonAttack() method', () => {
   
    });

    describe('showStatus() method', () => {
      
    });
  });
});
