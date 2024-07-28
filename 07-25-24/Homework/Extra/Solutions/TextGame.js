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
    alert(`The Dark Forest\nThe trees are tall and thick,
        blocking most of the sunlight.
        The forest is eerily quiet,
        with the occasional rustle of leaves or
        distant howl breaking the silence.`);
    decision = confirm("You see a torch at the entrance, do you take it?")
    if(decision) inventory.push("torch");
    do{
        decision = prompt(`Suddenly you notice a huge tree monster with glowing red eyes, what are you doing?
            1. Run away: attempt to flee though the forest.
            2. Hide behind the big bushes.
            3. Fight: use the torch to lit him in fire.`)
        if(decision!==null) decision = Number(decision);
    }while(1 < decision && decision > 3);
    switch(decision){
        case 1:
            console.log(`${name}, you manage to escape unharmed!\nCurrent health: ${health}`);
            break;
        case 2:
            random = getRandom(10,30);
            health-=random;
            console.log(`The monster found you ${name}, you lost ${random} health.\nCurrent health: ${health}`);
            break;
        case 3:
            let check= inventory.includes("torch");
            if(check){
                console.log(`${name}, you manage to kill the monster!\nCurrent health: ${health}`);
            }else{
                random = getRandom(20,40);
                health-=random;
                console.log(`${name}, you don't even have a torch, The monster attacked you you, you lost ${random} health.\nCurrent health: ${health}`);
            }
            break;
    }
}
function room2DarkForest(){
    alert(`The Abandoned Village\nThe houses are in ruins,
        with broken windows and doors hanging off their hinges.
        The air is thick with the smell of decay.`)
        do{
            decision = prompt(`Suddenly you notice A band of skeletal warriors with swords, what are you doing?
                1. Run Away: flee to a nearby building.
                2. Distract: throw the torch away to distract the skeletons.
                3. Fight: kick their asses with your fists`)
            if(decision!==null) decision = Number(decision);
        }while(1 < decision && decision > 3);
        switch(decision){
            case 1:
                random = getRandom(1,10);
                health-=random;
                console.log(`${name}, you manage to escape but 1 skelton found you! you lost ${random} health.\nCurrent health: ${health}`);
                break;
            case 2:
                console.log(`${name}, you lost your torch but you managed to escape!\nCurrent health: ${health}`);
                break;
            case 3:
                let check= inventory.includes("torch");
                if(check){
                    console.log(`${name}, you manage to kill the monster!\nCurrent health: ${health}`);
                }else{
                    random = getRandom(30,50);
                    health-=random;
                    console.log(`${name}, you really thought you can overcome 40 skeletons alone?\nyou lost ${random} health.\nCurrent health: ${health}`);
                }
                break;
        }
}

room1DarkForest();
room2DarkForest();


function hadLost(health){
    return health<=0;
}
function getRandom(min,max){
    return random = Math.floor(Math.random() * (max-min+1) + min);
}
function removeFromArray(element){
    let index = array.indexOf(element);
    if (index > -1)
        array.splice(index, 1); //from index remove 1 item.
}