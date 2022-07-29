let newWar = new War()

    let viking1 = new Viking('Arne', 100, 250);
    let viking2 = new Viking('Bjorn', 100, 75);
    let viking3 = new Viking('Agatha', 100, 350);
    let viking4 = new Viking('Halfdan',100, 175);
    let viking5 = new Viking('Freya', 100, 55);

    newWar.addViking(viking1);
    newWar.addViking(viking2);
    newWar.addViking(viking3);
    newWar.addViking(viking4);
    newWar.addViking(viking5);

    let saxon1 = new Saxon (75, 50);
    let saxon2 = new Saxon (70, 55);
    let saxon3 = new Saxon (65, 110);
    let saxon4 = new Saxon (70, 75);
    let saxon5 = new Saxon (80, 100);

    newWar.addSaxon(saxon1);
    newWar.addSaxon(saxon2);
    newWar.addSaxon(saxon3);
    newWar.addSaxon(saxon4);
    newWar.addSaxon(saxon5);

    // function showStatusOfWar(){
    //     const status = document.querySelector("status span");
    //     //status.innerText = showStatus();
    // }
    // showStatusOfWar();


    let vikingRow = document.querySelectorAll(".viking");
    
    for(let i = 0; i < 5; i++){
    
       let vikingName = document.querySelectorAll(".name span")[i];
       let vikingHealth = document.querySelectorAll(".health span")[i];
       let vikingStrength = document.querySelectorAll(".strength span")[i];
       
       vikingName.innerText = newWar.vikingArmy[i].name
       vikingHealth.innerText = newWar.vikingArmy[i].health
       vikingStrength.innerText = newWar.vikingArmy[i].strength
    }
    
    let saxonRow = document.querySelectorAll(".saxon");

    for(let i = 0; i < 5; i++){

       let saxonHealth = document.querySelectorAll(".health2 span")[i];
       let saxonStrength = document.querySelectorAll(".strength2 span")[i];
       
       saxonHealth.innerText = newWar.saxonArmy[i].health
       saxonStrength.innerText = newWar.saxonArmy[i].strength
    }