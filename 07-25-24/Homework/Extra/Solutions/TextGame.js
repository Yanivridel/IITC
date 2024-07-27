// **** TASK 4: TEXT ADVENTURE GAME **** //

let currentRoom,score,health,random,decision;
const name= setInfo();
let inventory=[]; //stick,sword,shoes,armor,shield,crossbow,helmet

function setInfo(){
    health=100;
    score=0;
    return prompt("Enter your unchangeable name");
}

function room1DarkForest(){
    alert(`THE DARK FOREST\nThe trees are tall and thick,
        blocking most of the sunlight.
        The forest is eerily quiet,
        with the occasional rustle of leaves or
        distant howl breaking the silence.`);
    decision = confirm("You see a torch at the entrance, do you take it?")
    if(decision) inventory.push("Torch");
    do{
        decision = prompt(`Suddenly you notice a huge tree monster with glowing red eyes, what are you doing?
            1. Run away: attempt to flee though the forest.
            2. Hide behind the big bushes.
            3. Use the torch to lit him in fire.`)
        if(decision!==null) decision = Number(decision);
    }while(1 < decision && decision > 3);
    switch(decision){
        case 1:
            console.log(`${name}, you manage to escape unharmed!\nCurrent health: ${health}`);
            break;
        case 2:
            random = Math.floor(Math.random() * 30);
            health-=random;
            console.log(`The monster found you ${name}, you lost ${random} health.\nCurrent health: ${health}`);
            break;
        case 3:
            let check= inventory.includes("Torch");
            if(check){
                console.log(`${name}, you manage to kill the monster!\nCurrent health: ${health}`);
            }else{
                random = Math.floor(Math.random() * 40);
                health-=random;
                console.log(`${name}, you don't even have a torch, The monster attacked you you, you lost ${random} health.\nCurrent health: ${health}`);
            }
            break;
    }
}


room1DarkForest();
//random = Math.floor(Math.random() * 100);