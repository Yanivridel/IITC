// **** TASK 4: TEXT ADVENTURE GAME **** //

let currentRoom,score,health,random,decision,i;
const name= setInfo();
let inventory=[];

GameStart();

function GameStart(){
    let scenarios = [room1DarkForest,room2AbandonedVillage,room3EnchantedLake,room4DragonLair];

    for(i=0;i< scenarios.length;i++){
        scenarios[i]();
        if(hadLost(health)){
            console.log("Game Over ! No more lives");
            break;
        }
    }
    if(i===scenarios.length)
        console.log("You won the game! Congrats");
}

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
    decision = confirm("You see a Torch at the entrance, do you take it?")
    if(decision) inventory.push("torch");
    do{
        decision = prompt(`Suddenly you notice a huge tree monster with glowing red eyes, what are you doing?
            1. Run away: attempt to flee though the forest.
            2. Hide behind the big bushes.
            3. Fight: use the torch to lit him in fire.`)
        if(decision!==null) decision = Number(decision);
    }while(isNaN(decision) && 1 < decision && decision > 3);
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
function room2AbandonedVillage(){
    alert(`The Abandoned Village\nThe houses are in ruins,
        with broken windows and doors hanging off their hinges.
        The air is thick with the smell of decay.`)
    do{
        decision = prompt(`Suddenly you notice A band of skeletal warriors with swords, what are you doing?
            1. Run Away: flee to a nearby building.
            2. Distract: throw the torch away to distract the skeletons.
            3. Fight: kick their asses with your fists`)
        if(decision!==null) decision = Number(decision);
    }while(isNaN(decision) && 1 < decision && decision > 3);
    switch(decision){
        case 1:
            random = getRandom(1,10);
            health-=random;
            console.log(`${name}, you manage to escape but 1 skelton found you! you lost ${random} health.\nCurrent health: ${health}`);
            break;
        case 2:
            if(inventory.includes("torch")){
                console.log(`${name}, you lost the torch but managed to distract the skeletons!\nCurrent health: ${health}`);
                removeFromArray("torch");
                decision = confirm("You found an Abandoned Sword, do you take it?")
                if (decision) inventory.push("abandoned sword");
            }else{
                random = getRandom(30,50);
                health-=random;
                console.log(`You don't even have a torch remember?\nyou lost ${random} health.\nCurrent health: ${health}`);
            }
            break;
        case 3:
            random = getRandom(30,50);
            health-=random;
            console.log(`${name}, you really thought you could overcome 40 skeletons alone?\nyou lost ${random} health.\nCurrent health: ${health}`);
            break;
    }
}
function room3EnchantedLake(){
    alert(`The Enchanted Lake\nThe water is crystal clear,
         and the surroundings are lush and green.
         There's a mystical aura in the air,
         and the lake's surface glows faintly under the moonlight.`)
        do{
            decision = prompt(`A water nymph with control over the lake's waters shown, what are you doing?
                1. Run Away: Swim back to the shore and escape.
                2. Appease: offer your sword as a gift to the monster.
                3. Fight: use the sword to kill the nymph`)
            if(decision!==null) decision = Number(decision);
        }while(isNaN(decision) && 1 < decision && decision > 3);
        switch(decision){
            case 1:
                random = getRandom(40,60);
                health-=random;
                console.log(`${name}, the nymph control the water, theres no escape! you lost ${random} health.\nCurrent health: ${health}`);
                break;
            case 2:
                if(inventory.includes("abandoned sword")){
                    console.log(`${name}, the nymph liked the sword and let you pass!\nCurrent health: ${health}`);
                    removeFromArray("abandoned sword");
                    decision = confirm("The nymph offers you an healing potion, do you take it?")
                    if (decision) {
                        health+=40;
                        console.log(`You received 40hp\nCurrent health: ${health}`);
                    }
                }
                else{
                    random = getRandom(30,40);
                    health-=random;
                    console.log(`You didn't take the sword remember?, you lost ${random} health.\nCurrent health: ${health}`);
                }
                break;
            case 3:
                if(inventory.includes("abandoned sword")){
                    random = getRandom(30,40);
                    health-=random;
                    console.log(`${name}, sword does nothing to water.. you lost ${random} health.\nCurrent health: ${health}`);
                }
                else{
                    random = getRandom(30,40);
                    health-=random;
                    console.log(`You didn't take the sword remember?, you lost ${random} health.\nCurrent health: ${health}`);
                }
                break;
        }
}
function room4DragonLair(){
    alert(`The Dragon's Lair\nThe air is hot and filled with the smell of sulfur.
        The ground is uneven and covered in ash.
        The dragon is a massive, fearsome creature with scales like armor 
        and eyes that glow with an inner fire.`)
    do{
        decision = prompt(`The final Dragon boss lies here, what are you doing?
            1. Hide: Find a large rock or hollow tree to hide behind and wait for the monster to pass.
            2. Negotiate: attempt to communicate with the dragon and offer a trade or plea for mercy.
            3. Fight: use the sword to engage the dragon in combat.`)
        if(decision!==null) decision = Number(decision);
    }while(isNaN(decision) && 1 < decision && decision > 3);
    switch(decision){
        case 1:
            random = getRandom(30,40);
            health-=random;
            console.log(`${name}, its too hot there, your burning alive! you lost ${random} health.\nCurrent health: ${health}`);
            break;
        case 2:
            random = getRandom(30,40);
            health-=random;
            console.log(`${name}, you do not make deals with the devil.. you lost ${random} health.\nCurrent health: ${health}`);
            break;
        case 3:
            if(inventory.includes("abandoned sword")){
                console.log(`${name}, the battle was hard but you won!\nCurrent health: ${health}`);
                decision = confirm("You see the dragons egg, do you take it?")
                if (decision) inventory.push("dragon egg");
            }else{
                random = getRandom(30,50);
                health-=random;
                console.log(`You don't even have a sword remember?\nyou lost ${random} health.\nCurrent health: ${health}`);
            }
    }
}


function hadLost(health){
    return health<=0;
}
function getRandom(min,max){
    return random = Math.floor(Math.random() * (max-min+1) + min);
}
function removeFromArray(element){
    let index = inventory.indexOf(element);
    if (index > -1)
        inventory.splice(index, 1); //from index remove 1 item.
}