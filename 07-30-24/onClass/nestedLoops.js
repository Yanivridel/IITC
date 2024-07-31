
//1
console.log("Task 1");
let i=0,j=0;
let pat = "";
for(i=0;i<5;i++){
    pat = "";
    for(j=0;j<=i;j++){
        pat+="*"
    }
    console.log(pat);
}
//2
console.log("Task 2");
for(i=1;i<=5;i++){
    pat = "";
    for(j=1;j<=5;j++){
        pat += i*j + "\t"
    }
    console.log(pat);
}
//3
console.log("Task 3");
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function findInMat(mat,val){
    let isFound = false,i,j;
    for(i=0;i<mat.length && !isFound;i++){
        for(j=0;j<mat[i].length && !isFound;j++){
            if(mat[i][j] === val) { isFound = true; }
        }
    }
    if(isFound) console.log(`Value ${val} found in position (${i-1},${j-1})`);
    else console.log(`Value ${val} not in mat`);
}   
findInMat(arr,7);
//4
console.log("Task 4");
let vowels = "aeiouAEIOU"
let str = "Hello how are you?"
function countVowCons(str,vowels){
    let cons=0, vow = 0;
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])) vow+=1;
        else cons +=1;
    }
    console.log(`For input = "${str}", output: Vowels: ${vow}, Constants: ${cons}`);
}
countVowCons(str,vowels);
//5
console.log("Task 5");
function reverseStr(str){
    let rev = "";
    for(let i=str.length-1;i>=0;i--){
        rev += str[i];
    }
    return rev;
}
console.log(reverseStr(str));
//6
console.log("Task 6");
pat = ""
for(i=1;i<=5;i++){
    pat += i.toString();
    console.log(pat);
}
//7
console.log("Task 7");
arr = [[1, 2], [3, 4], [5, 6]]
function sumArrays(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            sum+= arr[i][j];
        }
    }
    return sum;
}
console.log(sumArrays(arr));
//8
console.log("Task 8");
function charFreq(str){
    let letters = [];
    let counts = [];
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(letters.includes(char))
            counts[letters.indexOf(char)] += 1;
        else{
            letters.push(char);
            counts.push(1);
        }
    }
    let msg = `For input = "${str}", output:\n`;
    for(let i=0;i<letters.length;i++){
        msg += ` ${letters[i]}: ${counts[i]}\n`
    }
    console.log(msg);
}
charFreq(str);
//9
console.log("Task 9");
arr = [[1, 2], [3, 4], [5, 6]];
function flattenArr(arr){
    let temp = [];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            temp.push(arr[i][j]);
        }
    }
    return temp;
}
console.log(flattenArr(arr));
//10
console.log("Task 10");
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7 ,8 ,9]];

function transpose(mat){
    let temp;
    for(let i=0;i<mat.length;i++){
        for(j=0;j<mat[i].length;j++){
            if(i<j){
                temp = mat[i][j];
                mat[i][j] = mat[j][i];
                mat[j][i] = temp;
            }
        }
    }
    return mat;
}
console.log(transpose(matrix));
//11
console.log("Task 11");
function isPalindrome(str){
    let i=0, j=str.length-1;
    while(i<j){
        if(str[i++] !== str[j--]) return false;
    }
    return true;
}
console.log(isPalindrome("radar"));

//12
console.log("Task 12");
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

function commonElem(arr1,arr2){
    let sol = [];
    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i]))
            sol.push(arr1[i]);
    }
    return sol;
}
console.log(commonElem(arr1,arr2));
//13
console.log("Task 13");
range = [10, 20];

function primeRange(range){
    let sol = []
    for(let i=range[0];i<=range[1];i++){
        if(isPrime(i)) sol.push(i);
    }
    return sol;
}
function isPrime(x){
    for(let i=2;i*i<x;i++){
        if(x%i===0) return false;
    }
    return true
}
console.log(primeRange(range));

//14
console.log("Task 14");
let mat = [[3, 1, 2], [1, 4, 5], [2, 3, 1], [6, 7, 9], [1, 1, 2], [10,2,-1]];

function rowSumSort(mat){
    let sums = [], sol = [];
    let min, len = mat.length;
    for(let i=0;i<len;i++) sums.push(rowSum(mat[i]));
    console.log(`Rows Sums: ${sums}`);
    for(let i=0;i<len;i++){
        min = Math.min(...sums);
        let idx = sums.indexOf(min);
        sol.push(mat.splice(idx,1));
        sums.splice(idx,1);
    }
    return sol;
}
function rowSum(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++) sum+=arr[i];
    return sum;
}
console.log(rowSumSort(mat));

