
function getRandom(min,max){
    return random = Math.floor(Math.random() * (max-min+1) + min);
}

//EXERCISE 1
{
    //1
    console.log("TASK 1");
    for(let i=10;i>0;i--){
        console.log(i);
    }

    //2
    console.log("TASK 2");
    for(let i=2;i<=20;i+=2){
        console.log(i);
    }

    //3
    let sum=0;
    console.log("TASK 3");
    for(let i=1;i<=10;i++){
        sum+=i;
    }
    console.log(sum);

    //4
    console.log("TASK 4");
    for(let i=5;i<=50;i+=5){
        console.log(i);
    }

    //5
    console.log("TASK 5");
    // Option 1
    let x = "*";
    for(let i=1;i<=5;i++){
        console.log(x);
        x += "*";
    }
    //Option 2
    for(let i=1;i<=5;i++){
        console.log("*".repeat(i));
    }
}



//EXERCISE 2
{
    let i;
    //1
    console.log("TASK 1");
    i=1;
    while(i<=10) console.log(i++);

    //2
    console.log("TASK 2");
    i=1;
    while(i<=100){
        console.log(i);
        i*=2;
    }

    //3
    console.log("TASK 3");
    i=20;
    while(i>=0) console.log(i--);

    //4
    console.log("TASK 4");
    let correctPass=1234;
    let enteredPass= Number(prompt("Enter password"));
    while(enteredPass !== correctPass){
        console.log("Wrong password");
        enteredPass= Number(prompt("Enter password"));
    }

    //5
    console.log("TASK 5");
    i = 0;
    while(i!==5){
        i = getRandom(1,10);
        console.log(i);
    }

    
}


//EXERCISE 3
{
    let i,decision;
    //1
    console.log("TASK 1");
    i=1
    do{
        console.log(i++);
    } while(i<=5);

    //2
    console.log("TASK 2");
    do{
        decision = confirm("Do you wanna play again?")
    }while(decision)

    //3
    console.log("TASK 3");
    let dice;
    do{
        dice=getRandom(1,6);
        console.log(dice);
    }while(dice !== 6)

    //4
    console.log("TASK 4");
    i=1;
    do{
        console.log(i);
        i*=2
    }while(i<=1000)

    //5
    console.log("TASK 5");
    let list=[];
    let name;
    do{
        name= prompt("Enter name (done for exit)")
        console.log(name);
        list.push(name);
    }while(name !== "done")
}