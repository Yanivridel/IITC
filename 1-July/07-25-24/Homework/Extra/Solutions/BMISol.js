// **** TASK 1: BMI **** //

let bmiHistory = [];
let exitStatus;

do{  //MAIN EXIT LOOP
    let decision = confirm("Click YES to enter new BMI\nClick NO to watch old records");

    if(decision){ //ADD NEW RECORD
        let _height = parseFloat(prompt("Enter your height"));
        let _weight = parseFloat(prompt("Enter your weight"));

        // Checking Valid Inputs
        while(isNaN(_height) || isNaN(_weight) || _height <= 0 || _weight <= 0){
            console.log("Invalid height or weight");
            _height = parseFloat(prompt("Enter your height"));
            _weight = parseFloat(prompt("Enter your weight"));
        }
        let _bmi =calculateBMI(_weight,_height,);
        let bmiObj = {height:_height,weight:_weight,bmi:_bmi,
                    category:getBMICategory(_bmi),date:new Date()};
        addCalHistory(bmiObj);
    }
    else //WATCH HISTORY
    {
        if(bmiHistory.length === 0) console.log("No records");
        else{
            for(let i=0;i<bmiHistory.length;i++){
                console.log(`${i+1}.\nheight= ${bmiHistory[i].height}\nweight= ${bmiHistory[i].weight}\nBMI= ${bmiHistory[i].bmi}\ncategory= ${bmiHistory[i].category}\nDate= ${bmiHistory[i].date}\n\n`);
            }
        }
    }
exitStatus = confirm("Click YES to Continue\nClick NO to exit");
}
while (exitStatus);
console.log("GoodBye");

// Functions
function calculateBMI(weight,height){
    return weight/(height*height);
}
function getBMICategory(bmi){
    if(bmi< 18.5) return "Underweight";
    else if(bmi<24.9) return "Normal weight";
    else if(bmi<29.9) return "Overweight";
    else return "Obese";
}
function addCalHistory(bmiObj){
    bmiHistory.push(bmiObj);
}