const radius = 6;
const length = 20;
const width = 15;

function calcAreaCircle(num){
    //get pi from library
    const pi = Math.PI;

    //calculate area with radius
    const result = Math.pow(num,2) * pi;

    //print result to console
    console.log(result);
}

function arithmeticFuncs(num1, num2, s){
    
    if (s=='add'){
        let addition = num1 + num2;
        console.log(addition);
        return(addition);
    } 
    else if (s=='subtract'){
        let subtract = num1 - num2;
        console.log(subtract);
        return(subtract);
    } 
    else if (s=='multiply') {
        let multiply = num1 * num2;
        console.log(multiply);
        return(multiply);
    } 
    else if (s=='divide'){
        let divide = num1 / num2;
        console.log(divide);
    }else{
        let invalid = "not valid input";
        console.log(invalid);
    }
}

    function calcAreaRec(l,w){
        let result = l * w;
        console.log(result);
    }


calcAreaCircle(radius);
arithmeticFuncs(10,2,"divide");
calcAreaRec(length,width);



// Questions

// a) The scope of a Const variable depends on whether the varible is global or local, if the const varible is global
// that means the varible can be accessed anywhere in the script. If the scope of the const variable is local such
// as it has been initalized in a function that it can only be called/ accessed in that function. 

// b) The let and const keywords were added to javascript in 2015 