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

// Exercise 11
console.log("\nExercise 11:");
count = 1;
for(i=1;i<=5;i++){
    pat = "";
    for(j=0;j<i;j++){
        pat+= count++ + " ";
    }
    console.log(pat);
}

// Exercise 12
console.log("\nExercise 12:");
for(i=1;i<=5;i++){
    pat = "";
    for(j=1;j<=5;j++){
        pat+= (i.toString()).repeat(j);
        pat+= " ";
    }
    console.log(pat);
}

// Exercise 13
console.log("\nExercise 13:");
for(i=1;i<=5;i++){
    pat = "";
    for(j=5;j>=i;j--){
        pat+= "* ";
    }
    console.log(pat);
}

// Exercise 14
console.log("\nExercise 14:");
for(i=0;i<=4;i++){
    pat = "";
    for(j=0;j<=4;j++){
        if(j<=i) pat+=i + " ";
        else pat+= j + " ";
    }
    console.log(pat);
}

// Exercise 15
console.log("\nExercise 15:");
n=20;
n = n%2===0 ? n+1:n;
let mid = Math.floor(n/2);
let base = [];
for(i=0;i<n;i++){
    base.push(" ");
    if(i===mid-1) base.push("*");
}
for(i=1;i<=n;i++){
    console.log(base.join(""));
    if(i<=mid){
        base[mid +i] = "*";
        base[mid -i] = "*";
    }
    else if(i>mid){
        base[mid + (i-n)] = " ";
        base[mid - (i-n)] = " ";
    }
}

// Exercise 16
console.log("\nExercise 16:");
for(i=0;i<=5;i++){
    pat = "";
    for(j=0;j<=5;j++){
        pat+= i*j + "\t";
    }
    console.log(pat);
}

// Exercise 17
console.log("\nExercise 17:");
let curr = "A";
for(i=1;i<=5;i++){
    pat = "";
    for(j=0;j<i;j++){
        pat+= curr + " ";
        curr = (curr.charCodeAt(0));
        curr = String.fromCharCode(++curr);
    }
    console.log(pat);
}

// Exercise 18
console.log("\nExercise 18:");
let mat = Array(5).fill().map(() => Array(5).fill(0));;
let up = 0, left = 0, right = 4, down = 4;

for(let count=1;count <= 25;){
    for(i = left; i<= right; i++) mat[up][i] = count++;
    up++;
    for(i = up; i<= down; i++) mat[i][right] = count++;
    right--;
    for(i = right; i>= left; i--) mat[down][i] = count++;
    down--;
    for(i = down; i>= up; i--) mat[i][left] = count++;
    left++;
}
for(i=0;i<mat.length;i++)
    console.log(mat[i].join("\t") + "\n" );

// Exercise 19
console.log("\nExercise 19:");
pat = "";
n=9;
for(i=1;i<=n;i++){
    pat+= " ".repeat(n-i);
    if(i===1) pat+= "*\n";
    else if(i===n) pat += "*".repeat(2*n-1)
    else{
    pat += "*"
    pat+= " ".repeat(2*i - 3);
    pat+= "*\n";
    }
}
console.log(pat);
// Exercise 20
console.log("\nExercise 20:");
function sumTo(n) {
    return (n * (n + 1)) / 2;
}
for (let i = 1; i <= 4; i++) {
    let row = '';
    for (let j = 1; j <= 4; j++) {
        row += sumTo(i * j) + '\t';
    }
    console.log(row);
}


// Exercise 21
console.log("\nExercise 21:");
n=11;
n = n%2===0 ? n+1:n;
mid = Math.floor(n/2);
base = Array(n).fill("*");
for(i=0;i<=n;i++){
    if(i<mid){
        console.log(base.join(""));
        base[n-1-i] = " ";
        base[i] = " ";
    }
    else if(i>mid){
        console.log(base.join(""));
        base[n-1-i] = "*";
        base[i] = "*";
    }
}

// Exercise 22
console.log("\nExercise 22:");
for(i=0;i<=5;i++){
    pat = "";
    for(j=0;j<=5;j++){
        pat+= Math.abs(i-j) + "\t";
    }
    console.log(pat);
}

// Exercise 23
console.log("\nExercise 23:");
count = 2;
for(i=1;i<=5;i++){
    pat = "";
    for(j=0;j<i;j++){
        pat+= count + "\t";
        count+=2;
    }
    console.log(pat);
}

// Exercise 24
console.log("\nExercise 24:");
for(i=0;i<=5;i++){
    pat = "";
    for(j=0;j<=5;j++){
        pat+= (i*j)%5 + "\t";

    }
    console.log(pat);
}

// Exercise 25
console.log("\nExercise 25:");
n=9;
n = n%2===0 ? n+1:n;
mid = Math.floor(n/2);
base = Array(n).fill(" ");
base[0] = base[n-1] = "*";
for(i=0;i<=n;i++){
    if(i<mid){
        console.log(base.join(""));
        base[n-2-i] = "*";
        base[i+1] = "*";
    }
    else if(i>=mid){
        console.log(base.join(""));
        base[n-1-i] = " ";
        base[i] = " ";
    }
}

// Exercise 26
n=6
console.log("\nExercise 26:");
for(i=0;i<=n;i++){
    pat = "";
    for(j=0;j<=n;j++){
        pat+= Math.min(i,j) + "\t";

    }
    console.log(pat);
}

// Exercise 27
console.log("\nExercise 27:");
count = 1;
for(i=1;i<=5;i++){
    pat = "";
    for(j=0;j<i;j++){
        if(count>25) break;
        pat+= count + "\t";
        count+=2;
    }
    console.log(pat);
}

// Exercise 28
console.log("\nExercise 28:");
n=3
for(i=0;i<=n;i++){
    pat = "";
    for(j=0;j<=n;j++){
        pat+= i+j+1 + "\t";

    }
    console.log(pat);
}

// Exercise 29
console.log("\nExercise 29:");
n=9;
n = n%2===0 ? n+1:n;
pat = "";
for(i=1;i<=n;i++){
    pat+= " ".repeat(n-i);
    if(i===1) pat+= "*\n";
    else{
    pat += "*"
    pat+= " ".repeat(2*i - 3);
    pat+= "*\n";
    }
}
for(i=n;i>0;i--){
    pat+= " ".repeat(n-i);
    if(i===1) pat+= "*\n";
    else{
    pat += "*"
    pat+= " ".repeat(2*i - 3);
    pat+= "*\n";
    }
}
console.log(pat);

// Exercise 30
console.log("\nExercise 30:");
function countFactors(n) {
    let count = 0;
    for (let i = 1; i*i <= n; i++) {
        if (n % i === 0) {
            if (n / i === i) count++;
            else count += 2;
        }
    }
    return count;
}
n=5
for(i=1;i<=n;i++){
    pat = "";
    for(j=1;j<=n;j++){
        pat+= countFactors(i*j) + "\t";

    }
    console.log(pat);
}