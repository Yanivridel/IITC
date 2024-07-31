let i,j,count,pat;

// Exercise 1
console.log("Exercise 1:");
pat = "";
for(i=0;i<3;i++){
    for(j=0;j<3;j++){
        pat+="* ";
    }
    pat+='\n';
}
console.log(pat);

// Exercise 2
console.log("\nExercise 2:");
pat = "";
for(i=0;i<5;i++){
    for(j=0;j<5;j++){
        pat+= i+j + " ";
    }
    pat+='\n';
}
console.log(pat);
// Exercise 3
console.log("\nExercise 3:");
for(i=0;i<5;i++){
    pat = "";
    for(j=0;j<=i;j++){
        pat+="* ";
    }
    console.log(pat);
}

// Exercise 4
console.log("\nExercise 4:");
for(i=1;i<=4;i++){
    pat = "";
    for(j=1;j<=4;j++){
        pat+= i*j + '\t';
    }
    pat+='\n';
    console.log(pat);
}

// Exercise 5
console.log("\nExercise 5:");
pat = "";
for(i=1;i<=5;i++){
    for(j=1;j<=5;j++){
        if(i===1 || i===5 || j===5 || j===1)
            pat+= "* ";
        else pat+= "  ";
    }
    pat+='\n';
}
console.log(pat);

// Exercise 6
console.log("\nExercise 6:");
pat = "";
for(i=0;i<=4;i++){
    for(j=0;j<=4;j++){
        pat+= 5*i + j + 1 + '\t';
    }
    pat+='\n';
}
console.log(pat);

// Exercise 7
console.log("\nExercise 7:");
for (let i = 1; i <= 5; i++) {
    let row = ' '.repeat(5 - i);
    for (let j = 1; j <= i; j++) {
        row += i + ' ';
    }
    console.log(row);
}

// Exercise 8
console.log("\nExercise 8:");
pat = "";
for(i=0;i<=4;i++){
    for(j=0;j<=4;j++){
        pat+= (j-i)%2===0 ? "0 ":"1 ";
    }
    pat+='\n';
}
console.log(pat);

// Exercise 9
console.log("\nExercise 9:");
let arr = [[1]];  // [[1],[1]]
for (let i = 1; i <= 5; i++) {
    let row = ' '.repeat(5 - i);
    let temp = [1];
    for (let j = 1; j < i; j++){
        temp.push(arr[i-1][j-1] + arr[i-1][j]);
    }
    temp.push(1)
    arr.push(temp);
    console.log(row + arr[i-1]);
}

// Exercise 10
console.log("\nExercise 10:");


// Exercise 11
console.log("\nExercise 11:");


// Exercise 12
console.log("\nExercise 12:");


// Exercise 13
console.log("\nExercise 13:");


// Exercise 14
console.log("\nExercise 14:");


// Exercise 15
console.log("\nExercise 15:");


// Exercise 16
console.log("\nExercise 16:");


// Exercise 17
console.log("\nExercise 17:");


// Exercise 18
console.log("\nExercise 18:");


// Exercise 19
console.log("\nExercise 19:");


// Exercise 20
console.log("\nExercise 20:");

// Exercise 21
console.log("\nExercise 21:");


// Exercise 22
console.log("\nExercise 22:");


// Exercise 23
console.log("\nExercise 23:");


// Exercise 24
console.log("\nExercise 24:");


// Exercise 25
console.log("\nExercise 25:");

// Exercise 26
console.log("\nExercise 26:");


// Exercise 27
console.log("\nExercise 27:");


// Exercise 28
console.log("\nExercise 28:");


// Exercise 29
console.log("\nExercise 29:");

// Exercise 30
console.log("\nExercise 30:");
